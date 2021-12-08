import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CaverJsModuleConfig } from '@config';
import { CaverJsController } from '@caverJs/app/caverJs.controller';
import { CaverJsService } from '@caverJs/app/caverJs.service';
import { CaverJs } from '@caverJs/infra/caverJs';

@Module({
    imports: [ConfigModule.forFeature(CaverJsModuleConfig)],
    controllers: [CaverJsController],
    providers: [
        {
            provide: 'CaverJsService',
            useClass: CaverJsService,
        },
        {
            provide: 'CaverJs',
            useClass: CaverJs,
        },
    ],
})
export class CaverJsModule {}
