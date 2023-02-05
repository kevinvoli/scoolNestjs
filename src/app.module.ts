import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactureModule } from './facture/facture.module';
import { UserModule } from './user/user.module';
import { UniverciteModule } from './univercite/univercite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestscool',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    FactureModule,
    UniverciteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
