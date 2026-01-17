# Setup Decap CMS với GitHub OAuth

## Bước 1: Tạo GitHub OAuth App

1. Vào: https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Điền thông tin:
   - **Application name:** CV CMS
   - **Homepage URL:** https://thanhnd.netlify.app
   - **Authorization callback URL:** https://api.netlify.com/auth/done
4. Click **"Register application"**
5. Copy **Client ID** 
6. Click **"Generate a new client secret"** và copy **Client Secret**

## Bước 2: Cấu hình OAuth trong Netlify

1. Vào Netlify dashboard: https://app.netlify.com
2. Chọn site **thanhnd**
3. Vào **Project configuration** → **Access & security** → **OAuth**
4. Click **"Install provider"**
5. Chọn **GitHub**
6. Nhập:
   - **Client ID** (từ bước 1)
   - **Client Secret** (từ bước 1)
7. Click **Save**

## Bước 3: Sử dụng CMS

1. Truy cập: https://thanhnd.netlify.app/admin/
2. Click **"Login with GitHub"**
3. Authorize ứng dụng
4. Vào được CMS! 🎉

Mọi thay đổi sẽ tự động commit về GitHub repository của bạn!

## Local Development

Với local (http://localhost:8000/admin/):
1. Chạy proxy server: `npx decap-server`
2. Vào http://localhost:8000/admin/
3. Không cần đăng nhập, đọc/ghi file trực tiếp
