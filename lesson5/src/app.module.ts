import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UsersModule} from "./components/users/users.module";
import {LoggerMiddleware} from "./middlewares/logger.middleware";
import {AuthMiddleware} from "./middlewares/auth.middleware";

@Module({
    imports: [UsersModule],
})
export class AppModule implements NestModule {
    async configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .exclude(
                {path: 'users', method: RequestMethod.GET},
                {path: 'users', method: RequestMethod.POST},
                'cats/(.*)',
            )
            .forRoutes('users')
        consumer
            .apply(AuthMiddleware)
            .forRoutes('users')
    }
}
