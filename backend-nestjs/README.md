### Chạy docker để start các công nghệ có sử dụng

```shell
docker stack deploy --compose-file docker-compose.yml online-exam
```

### Tạo user và database ở MySQL

```sql
CREATE USER 'development01'@'%' IDENTIFIED BY 'development01';
CREATE DATABASE online_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON online_exam.* TO 'development01'@'%';
FLUSH PRIVILEGES;
```

<u>Ghi chú:</u> Có thể tạo tùy ý các thông số ở trên (nếu tạo khác cần sửa trong file `.env`)

### Cài các thư viện cần thiết

Chạy lệnh `npm install --legacy-peer-deps` để tải về các thư viện JS

### Chạy migrate database (tạo các bảng trong cơ sở dữ liệu)

Chạy migrate database bằng lệnh `npm run migration:run`

<u>Lưu ý:</u> Sửa thông tin cấu hình kết nối database ở file `.env`

<u>Ghi chú:</u>

* Lệnh undo lại migrate gần nhất: `npm run migration:revert`

### Chạy seed data (tạo dữ liệu cho các bảng)

Chạy seed data bằng lệnh `npm run seed:run`

### Chạy ứng dụng

Chạy ứng dụng bằng lệnh `npm run start`

<u>Ghi chú:</u>

* Chạy ở chế độ watch (tự động reload khi có thay đổi code): `npm run start:dev`

### Tài liệu Swagger API

Sau khi chạy app tài liệu swagger được public ở link `http://localhost:8080/api/docs`
