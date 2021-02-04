import * as gh from 'passport-github';
import { userDBInteractions } from '../database/interactions/user';
import { Request, Response, NextFunction } from 'express';
import { statusCodes } from '../config/statusCodes';
import passport from 'passport';

const GitHubStrategy = gh.Strategy;

passport.serializeUser((user: any, done) => {
    done(undefined, user[0].dataValues.id);
});

passport.deserializeUser(async (id: any, done) => {
    try {
        const user = await userDBInteractions.find(id);
        done(undefined, user as any);
    } catch (err) {
        done(null, err);
    }
});

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
            callbackURL: process.env.CALLBACK_URL!,
        },
        async (_accessToken, _refreshToken, profile, done) => {
            try {
                const { id, displayName, username, emails, photos } = profile;
                const user = await userDBInteractions.findOrCreate({
                    githubId: id,
                    name: displayName,
                    username: username || '',
                    email: emails ? emails[0].value : '', // need to fix this
                    avatar: photos ? photos[0].value : '',
                });
                return done(undefined, user);
            } catch (err) {
                return done(undefined, err);
            }
        }
    )
);

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        res.status(statusCodes.UNAUTHORIZED).send({ error: 'Unauthorized' });
        return;
    }
    next();
};

export { passport };
