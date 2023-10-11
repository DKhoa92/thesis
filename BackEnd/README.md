### Tạo user và database ở MySQL

```sql
CREATE USER 'development01'@'%' IDENTIFIED BY 'development01';
CREATE DATABASE online_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON online_exam.* TO 'development01'@'%';
FLUSH PRIVILEGES;
```
<u>Ghi chú:</u> Có thể tạo tùy ý các thông số ở trên (nếu tạo khác cần sửa trong file `.env`)

### Cài các thư viện cần thiết

Chạy lệnh `npm install` để tải về các thư viện JS

### Chạy migrate database

Chạy migrate database bằng lệnh `npx sequelize-cli db:migrate --env development`

<u>Lưu ý:</u> Sửa thông tin cấu hình kết nối database ở file `.env` 

<u>Ghi chú:</u>
* Lệnh undo lại migrate gần nhất: `npx sequelize-cli db:migrate:undo`
* Lệnh undo tất cả: `npx sequelize-cli db:migrate:undo:all`
* Lệnh undo lại ở một phiên bản migrate cụ thể: `npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js`


### Chạy seed data

Chạy seed data bằng lệnh `npx sequelize-cli db:seed:all --env development`

<u>Ghi chú:</u>
* Lệnh undo seed gần nhất: `npx sequelize-cli db:seed:undo`
* Lệnh undo tất cả: `npx sequelize-cli db:seed:undo:all`
* Lệnh undo lại ở một phiên bản seed cụ thể: `npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`


### Chạy ứng dụng

Chạy ứng dụng bằng lệnh `npm run start`

<u>Lưu ý:</u> Cần sửa các thông số cấu hình ở file `.env` cho phù hợp trước khi chạy ứng dụng.