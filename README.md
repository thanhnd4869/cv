# CV Project

Online CV website với Netlify CMS để quản lý nội dung.

## 🚀 Tính năng

- Website CV thuần HTML, CSS, JavaScript
- Quản lý nội dung qua Netlify CMS
- Hỗ trợ 2 môi trường:
  - **Development**: Chỉnh sửa file local trực tiếp
  - **Production**: Tự động commit và push lên Git

## 📁 Cấu trúc dự án

```
.
├── admin/                  # Netlify CMS
│   ├── index.html         # Admin UI
│   └── config.yml         # CMS configuration
├── api/
│   └── data.json          # Dữ liệu CV (được quản lý bởi CMS)
├── assets/                # Hình ảnh và media
├── css/                   # Stylesheets
├── js/                    # JavaScript files
└── index.html             # Trang chủ
```

## 🛠️ Sử dụng Netlify CMS

### Development (Local)

1. **Chạy script tự động** (Windows):

   ```bash
   start-local-cms.bat
   ```

2. **Hoặc chạy thủ công**:

   ```bash
   # Terminal 1: HTTP Server
   npx http-server -p 8080 -c-1

   # Terminal 2: CMS Proxy Server
   npx netlify-cms-proxy-server
   ```

3. **Truy cập CMS**: http://localhost:8080/admin

4. **Chỉnh sửa**: Mọi thay đổi sẽ được lưu trực tiếp vào file `api/data.json` trên local

### Production (Netlify)

1. **Deploy lên Netlify**:
   - Connect repository với Netlify
   - Deploy tự động từ branch `main`

2. **Enable Netlify Identity**:
   - Vào Netlify Dashboard → Site settings → Identity
   - Click "Enable Identity"
   - Settings → Registration preferences → "Invite only"
   - Services → Git Gateway → Enable

3. **Thêm user**:
   - Identity tab → Invite users
   - User sẽ nhận email để set password

4. **Truy cập CMS**: https://your-site.netlify.app/admin
   - Đăng nhập bằng Netlify Identity
   - Mọi thay đổi sẽ tự động commit và push lên Git

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

- **Node.js** (để chạy npx commands)
- Không cần cài đặt package nào (sử dụng npx trực tiếp)
- Browser hiện đại (Chrome, Firefox, Edge...)

## 📚 Tài liệu

- [Netlify CMS Docs](https://www.netlifycms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
