export interface AppConfig {
  name: string;
  protocol: string;
  host: string;
  port: number;
}

export interface GitConfig {
  branch: string;
  commit: string;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface MinioConfig {
  host: string;
  port: number;
  accessKey: string;
  secretKey: string;
}

export interface MediaConfig {
  uploadMaxFileSizeBytes: number;
  minioBucketName: string;
}

export interface JwtConfig {
  secret: string;
  expireInSeconds: number;
}

export interface EncryptConfig {
  bcryptSaltOrRounds: number;
}

export interface Config {
  app: AppConfig;
  git: GitConfig;
  database: DatabaseConfig;
  minio: MinioConfig;
  media: MediaConfig;
  jwt: JwtConfig;
  encrypt: EncryptConfig;
}

export default () =>
  ({
    app: {
      name: process.env.APP_NAME,
      protocol: process.env.APP_PROTOCOL || 'http',
      host: process.env.APP_HOST || 'localhost',
      port: +process.env.APP_PORT || 3000,
    },
    git: {
      branch: process.env.GIT_BRANCH,
      commit: process.env.GIT_COMMIT,
    },
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    minio: {
      host: process.env.MINIO_HOST || 'localhost',
      port: +process.env.MINIO_PORT,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SCECRET_KEY,
    },
    media: {
      uploadMaxFileSizeBytes: +process.env.MEDIA_UPLOAD_MAX_FILE_SIZE_BYTES,
      minioBucketName: process.env.MEDIA_MINIO_BUCKET_NAME,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expireInSeconds: +process.env.JWT_EXPIRE_IN_SECONDS,
    },
    encrypt: {
      bcryptSaltOrRounds: +process.env.ENCRYPT_BCRYPT_SALT_OR_ROUNDS,
    },
  }) satisfies Config;
