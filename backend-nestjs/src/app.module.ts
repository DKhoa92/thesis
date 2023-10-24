import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import env, { Config, DatabaseConfig } from './config/environment-variables';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MediaModule } from './modules/media/media.module';
import { RoleModule } from './modules/role/role.module';
import { UserRoleModule } from './modules/user-role/user-role.module';
import { AuthService } from './modules/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { DurationModule } from './modules/duration/duration.module';
import { PeriodModule } from './modules/period/period.module';
import { ExampTypeModule } from './modules/exam-type/exam-type.module';
import { GradeModule } from './modules/grade/grade.module';
import { SubjectModule } from './modules/subject/subject.module';
import { SchoolYearModule } from './modules/school-year/school-year.module';
import { SemesterModule } from './modules/semester/semester.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { ClassroomStudentModule } from './modules/classroom-student/classroom-student.module';

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
        UserModule,
        AuthModule,
        MediaModule,
        RoleModule,
        UserRoleModule,
        DurationModule,
        PeriodModule,
        ExampTypeModule,
        GradeModule,
        SubjectModule,
        SchoolYearModule,
        SemesterModule,
        ClassroomModule,
        ClassroomStudentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
