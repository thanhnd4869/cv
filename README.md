# CV Project

Online CV website với Decap CMS để quản lý nội dung.

## 🚀 Tính năng

- Website CV thuần HTML, CSS, JavaScript
- Quản lý nội dung qua Decap CMS
- Hỗ trợ 2 môi trường:
  - **Development**: Chỉnh sửa file local trực tiếp
  - **Production**: Tự động commit và push lên Git qua GitHub OAuth

## 📁 Cấu trúc dự án

```
.
├── admin/                  # Decap CMS
│   ├── index.html         # Admin UI
│   └── config.yml         # CMS configuration
├── api/
│   └── data.json          # Dữ liệu CV (được quản lý bởi CMS)
├── assets/                # Hình ảnh và media
├── css/                   # Stylesheets
├── js/                    # JavaScript files
└── index.html             # Trang chủ
```

## 🛠️ Sử dụng Decap CMS

### Development (Local)

1. **Chạy script tự động** (Windows):

   ```bash
   start-local-cms.bat
   ```

2. **Hoặc chạy thủ công**:

   ```bash
   # Terminal 1: HTTP Server
   npx http-server -p 8080 -c-1

   # Terminal 2: Decap Server
   npx decap-server
   ```

3. **Truy cập CMS**: http://localhost:8080/admin

4. **Chỉnh sửa**: Mọi thay đổi sẽ được lưu trực tiếp vào file `api/data.json` trên local

### Production (GitHub OAuth)

**Bước 1: Cập nhật config.yml**

- Mở [admin/config.yml](admin/config.yml)
- Sửa `repo: your-username/cv` thành repo của bạn (ví dụ: `thanhnd4869/cv`)

**Bước 2: Tạo GitHub OAuth App**

1. Vào GitHub Settings → Developer settings → OAuth Apps → New OAuth App
2. Điền thông tin:
   - **Application name**: CV Admin
   - **Homepage URL**: `https://your-site.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Lưu lại **Client ID** và **Client Secret**

**Bước 3: Cấu hình trên Netlify**

1. Vào Netlify Dashboard → Site settings → Access control → OAuth
2. Click "Install provider" → chọn GitHub
3. Nhập **Client ID** và **Client Secret** từ bước 2
4. Save

**Bước 4: Sử dụng CMS**

- Truy cập: https://your-site.netlify.app/admin
- Click "Login with GitHub"
- Authorize ứng dụng
- Mọi thay đổi sẽ tự động commit và push lên GitHub!

### Alternative: Self-hosted (không cần Netlify)

Nếu không deploy trên Netlify, bạn có thể tự host OAuth server hoặc dùng các service như:

- [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- Cloudflare Workers
- Vercel Serverless Functions

## 📝 Quản lý nội dung

CMS cho phép chỉnh sửa:

- ✅ Personal Information (Thông tin cá nhân)
- ✅ Objective (Mục tiêu nghề nghiệp)
- ✅ Education (Học vấn)
- ✅ Work Experience (Kinh nghiệm làm việc)
- ✅ Projects (Dự án)
- ✅ Skills (Kỹ năng)
- ✅ Certifications (Chứng chỉ)
- ✅ Interests (Sở thích)

## ⚙️ Yêu cầu

- **Node.js** (để chạy npx commands trong development)
- Không cần cài đặt package nào (sử dụng npx trực tiếp)
- Browser hiện đại (Chrome, Firefox, Edge...)
- **GitHub account** (cho production authentication)

## 📚 Tài liệu

- [Decap CMS Docs](https://decapcms.org/docs/)
- [GitHub Backend](https://decapcms.org/docs/github-backend/)
- [Authentication Backends](https://decapcms.org/docs/authentication-backends/)
