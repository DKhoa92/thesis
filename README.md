## Thông tin kết nối VPS

* **host**: 202.92.4.131
* **port**: 24700
* **username**: root
* **password**: pG5s@OItYwm*

## Thông tin kết nối database

* **host**: 202.92.4.131
* **port**: 3307
* **username**: development01
* **password**: development01
* **database**: online_exam

## Bảng điều khiển MinIO

* **url**: http://202.92.4.131:9001
* **username**: miniorootuser
* **password**: miniorootuser

## Docker

* nginx:
  * File cấu hình ở `docker/nginx/nginx.conf`.
  * Hiện tại đã cấu hình nginx trỏ sub domain `api.bkthesis.site` vế backend app.
  * Frontend có thể cấu hình trỏ sub domain `www.bkthesis.site` về frontend app.

## Backend

<u>Ghi chú:</u>

* Tất cả thay đổi ở đường dẫn `backend-nestjs` và push lên nhánh `backend` sẽ tự động deploy lại app.
* URL tài liệu swagger khi đã deploy lên VPS: https://api.bkthesis.site/api/docs.

## Frontend

