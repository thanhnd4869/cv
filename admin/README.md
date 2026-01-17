# Decap CMS Admin Panel

This project includes Decap CMS (formerly Netlify CMS) for easy content management.

## Cách 1: Local Development (Đơn giản nhất)

### Sử dụng Live Server trong VS Code:

1. Cài đặt extension "Live Server" trong VS Code
2. Mở file `index.html`
3. Click chuột phải và chọn "Open with Live Server"
4. Truy cập: `http://localhost:5500/admin/`

### Hoặc sử dụng Python (có sẵn trên Windows):

1. Mở terminal trong thư mục project
2. Chạy lệnh:

```bash
python -m http.server 8000
```

3. Truy cập: `http://localhost:8000/admin/`

**Lưu ý:** Với local development, bạn cần chạy thêm proxy server để kết nối với Git:

```bash
# Cài đặt (chỉ cần 1 lần)
npm install -g decap-server

# Chạy proxy (mở terminal riêng)
npx decap-server
```

## Cách 2: Deploy lên Netlify (Khuyến nghị - Không cần proxy)

1. Push code lên GitHub (đã làm rồi ✅)
2. Truy cập [netlify.com](https://netlify.com) và đăng nhập
3. Click "Add new site" → "Import an existing project"
4. Chọn repository: `thanhnd4869/cv`
5. Deploy settings để mặc định, click "Deploy"
6. Sau khi deploy xong, vào "Site settings" → "Identity" → "Enable Identity"
7. Vào "Identity" → "Services" → "Enable Git Gateway"
8. Thêm user: "Identity" → "Invite users" → nhập email của bạn
9. Truy cập: `https://your-site-name.netlify.app/admin/`
10. Đăng nhập và bắt đầu chỉnh sửa!

## Cách 3: Deploy lên Vercel

1. Push code lên GitHub ✅
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng GitHub
3. Click "Add New" → "Project"
4. Chọn repository `cv`
5. Click "Deploy"
6. Sau khi deploy xong, setup Netlify Identity như hướng dẫn ở Cách 2 (vì Vercel không có Identity service riêng)

## Production Setup

Với Netlify (khuyến nghị):

- ✅ Không cần cài đặt gì thêm
- ✅ Git Gateway tự động kết nối với GitHub
- ✅ Mỗi khi bạn chỉnh sửa trong CMS, tự động commit về repository
- ✅ Hỗ trợ authentication sẵn

## Features

- ✅ Visual editor for all CV sections
- ✅ Personal information management
- ✅ Work experience and projects
- ✅ Skills and certifications
- ✅ Education history
- ✅ Image upload support
- ✅ Git-based workflow (all changes committed to repository)

## CMS Structure

The CMS manages the `api/data.json` file with the following sections:

- Personal Info (name, title, contact details)
- Objective
- Education
- Work Experience
- Projects
- Skills (technical, soft, office)
- Certifications
- Interests
