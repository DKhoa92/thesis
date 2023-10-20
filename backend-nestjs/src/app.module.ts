import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import env, { Config, DatabaseConfig } from './config/environment-variables';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { SchoolYearModule } from './modules/school-year/school-year.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { MediaModule } from './modules/media/media.module';
import { RoleModule } from './modules/role/role.module';
import { UserRoleModule } from './modules/user-role/user-role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [env],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Config>) => {
        const dbCfg = configService.get<DatabaseConfig>('database');
        return {
          type: 'mysql',
          host: dbCfg.host,
          port: dbCfg.port,
          username: dbCfg.username,
          password: dbCfg.password,
          database: dbCfg.database,
          autoLoadEntities: true,
          // entities: [__dirname + '/../**/*.entity.{js,ts}'],
          synchronize: false,
          migrations: ['src/migration/**/*.ts'],
          migrationsTableName: 'typeorm_migrations',
          logging: ['query'],
        };
      },
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    UserModule,
    AuthModule,
    SchoolYearModule,
    ClassroomModule,
    MediaModule,
    RoleModule,
    UserRoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
