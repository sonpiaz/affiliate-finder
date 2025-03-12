# Affiliate Finder

Affiliate Finder là ứng dụng web giúp người dùng tìm kiếm và so sánh các chương trình tiếp thị liên kết (affiliate) tốt nhất theo danh mục. Ứng dụng cho phép lọc, sắp xếp và tùy chỉnh hiển thị dữ liệu để tìm các chương trình phù hợp nhất.

<!-- Screenshot sẽ được thêm sau khi đẩy lên GitHub -->

## Tính năng

- **Sắp xếp chương trình**: Sắp xếp theo tỉ lệ hoa hồng, lưu lượng truy cập, năm thành lập...
- **Lọc theo danh mục**: Dễ dàng lọc theo CEX, AI Video, AI SEO, v.v.
- **Tùy chỉnh cột**: Hiển thị/ẩn các cột theo nhu cầu người dùng
- **Tìm kiếm**: Tìm kiếm nhanh chóng theo tên chương trình hoặc danh mục
- **Chế độ sáng/tối**: Chuyển đổi giữa giao diện sáng và tối
- **AI Chatbot**: Trợ lý AI hỗ trợ tìm kiếm thông tin về các chương trình affiliate
- **Responsive**: Giao diện thích ứng với các thiết bị khác nhau

## Cài đặt trên localhost

### Yêu cầu

Affiliate Finder là ứng dụng web thuần túy sử dụng HTML, CSS và JavaScript, nên không có yêu cầu đặc biệt để chạy. Bạn chỉ cần một trình duyệt web hiện đại.

### Cách 1: Clone từ GitHub

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/affiliate-finder.git
   ```

2. Mở file `index.html` trong trình duyệt:
   - Đơn giản nhất là mở trực tiếp file `index.html` từ thư mục đã clone
   - Hoặc sử dụng VS Code với extension Live Server

### Cách 2: Tải về dạng ZIP

1. Tải xuống kho lưu trữ dưới dạng file ZIP từ GitHub
2. Giải nén file ZIP vào thư mục của bạn
3. Mở file `index.html` trong trình duyệt

### Cách 3: Sử dụng local server

Để có trải nghiệm tốt nhất, bạn nên sử dụng một local server:

#### Sử dụng Python:

```bash
# Nếu bạn dùng Python 3
python -m http.server

# Nếu bạn dùng Python 2
python -m SimpleHTTPServer
```

Sau đó truy cập: `http://localhost:8000`

#### Sử dụng Node.js:

```bash
# Cài đặt http-server nếu chưa có
npm install -g http-server

# Chạy server
http-server
```

Sau đó truy cập: `http://localhost:8080`

## Cấu trúc dự án

```
affiliate-finder/
├── css/
│   └── styles.css          # Các styles CSS
├── js/
│   └── script.js           # JavaScript logic
├── index.html              # Trang chính
└── README.md               # Hướng dẫn
```

## Cách sử dụng

1. **Lọc chương trình**: Nhấp vào các tab danh mục (CEX, AI Video, v.v.) để lọc danh sách
2. **Sắp xếp**: Nhấp vào tiêu đề cột để sắp xếp theo thứ tự tăng dần/giảm dần
3. **Tìm kiếm**: Sử dụng thanh tìm kiếm để tìm chương trình cụ thể
4. **Tùy chỉnh cột**: Nhấp vào "Customize Columns" để ẩn/hiện các cột
5. **Chuyển chế độ**: Nhấp vào biểu tượng mặt trời/mặt trăng để chuyển giữa giao diện sáng và tối
6. **AI Chat**: Nhấp vào biểu tượng robot ở góc dưới bên phải để mở chatbot AI

## Đóng góp

Mọi đóng góp đều được chào đón! Nếu bạn muốn cải thiện Affiliate Finder, hãy thực hiện theo các bước sau:

1. Fork repository
2. Tạo branch cho tính năng của bạn (`git checkout -b feature/amazing-feature`)
3. Commit các thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push đến branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Giấy phép

Dự án này được phân phối theo giấy phép MIT. Xem `LICENSE` để biết thêm thông tin.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng mở một issue trong repository này hoặc liên hệ trực tiếp với tôi.

---

Made with ❤️ by [Your Name] 