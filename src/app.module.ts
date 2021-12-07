import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { CaverJsModule } from '@caverJs/caverJs.module';

@Module({
    imports: [CaverJsModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
})
export class AppModule {}
