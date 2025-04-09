const products = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        price: "27.990.000₫",
        oldPrice: "32.990.000₫",
        image: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-thumb-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-thumb-600x600.jpg"
        ],
        rating: 4.9,
        stock: "Còn hàng",
        description: "<p>iPhone 14 Pro Max là chiếc smartphone cao cấp nhất của Apple, sở hữu màn hình Dynamic Island, camera 48MP và hiệu năng mạnh mẽ với chip A16 Bionic.</p><p>Màn hình 6.7 inch Super Retina XDR với ProMotion và Always-On display mang đến trải nghiệm hình ảnh sắc nét, sống động.</p><p>Camera chính 48MP cho phép chụp ảnh độ phân giải cao và zoom quang học 2x. Camera Ultra Wide 12MP và Telephoto 12MP với zoom quang 3x giúp bạn ghi lại mọi khoảnh khắc.</p>",
        specifications: [
            { name: "Màn hình", value: "6.7 inch, Super Retina XDR, 120Hz" },
            { name: "Chip", value: "A16 Bionic" },
            { name: "RAM", value: "6GB" },
            { name: "Bộ nhớ trong", value: "128GB/256GB/512GB/1TB" },
            { name: "Camera sau", value: "48MP, 12MP, 12MP" },
            { name: "Camera trước", value: "12MP" },
            { name: "Pin", value: "4323mAh" }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: "23.990.000₫",
        oldPrice: "31.990.000₫",
        image: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-tim-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-den-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-kem-600x600.jpg"
        ],
        rating: 4.8,
        stock: "Còn hàng",
        description: "<p>Samsung Galaxy S23 Ultra là flagship cao cấp nhất của Samsung với bút S-Pen tích hợp, camera 200MP và hiệu năng mạnh mẽ với chip Snapdragon 8 Gen 2.</p><p>Màn hình 6.8 inch Dynamic AMOLED 2X với tần số quét 120Hz mang đến trải nghiệm hình ảnh sắc nét, sống động.</p><p>Camera chính 200MP cho phép chụp ảnh độ phân giải siêu cao. Camera Ultra Wide 12MP, Telephoto 10MP với zoom quang 3x và 10MP với zoom quang 10x giúp bạn ghi lại mọi khoảnh khắc.</p>",
        specifications: [
            { name: "Màn hình", value: "6.8 inch, Dynamic AMOLED 2X, 120Hz" },
            { name: "Chip", value: "Snapdragon 8 Gen 2" },
            { name: "RAM", value: "8GB/12GB" },
            { name: "Bộ nhớ trong", value: "256GB/512GB/1TB" },
            { name: "Camera sau", value: "200MP, 12MP, 10MP, 10MP" },
            { name: "Camera trước", value: "12MP" },
            { name: "Pin", value: "5000mAh" }
        ]
    },
    {
        id: 3,
        name: "OPPO Find N2 Flip",
        price: "19.990.000₫",
        oldPrice: "24.990.000₫",
        image: "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-3.jpg",
        images: [
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-3.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-2.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-1.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-4.jpg"
        ],
        rating: 4.6,
        stock: "Còn hàng",
        description: "<p>OPPO Find N2 Flip là smartphone màn hình gập dạng vỏ sò với màn hình ngoài lớn nhất trong phân khúc.</p><p>Màn hình chính 6.8 inch AMOLED với tần số quét 120Hz mang đến trải nghiệm hình ảnh sắc nét, sống động. Màn hình ngoài 3.26 inch giúp bạn xem thông báo và chụp ảnh selfie dễ dàng.</p><p>Camera chính 50MP và camera góc siêu rộng 8MP cho phép bạn ghi lại những khoảnh khắc đáng nhớ với chất lượng cao.</p>",
        specifications: [
            { name: "Màn hình chính", value: "6.8 inch, AMOLED, 120Hz" },
            { name: "Màn hình ngoài", value: "3.26 inch, AMOLED" },
            { name: "Chip", value: "MediaTek Dimensity 9000+" },
            { name: "RAM", value: "8GB/12GB" },
            { name: "Bộ nhớ trong", value: "256GB/512GB" },
            { name: "Camera sau", value: "50MP, 8MP" },
            { name: "Camera trước", value: "32MP" },
            { name: "Pin", value: "4300mAh" }
        ]
    },
    {
        id: 4,
        name: "Xiaomi 13 Pro",
        price: "21.990.000₫",
        oldPrice: "29.990.000₫",
        image: "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-thumb-1-600x600.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-thumb-1-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-xanh-thumb-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-trang-thumb-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-den-thumb-600x600.jpg"
        ],
        rating: 4.7,
        stock: "Còn hàng",
        description: "<p>Xiaomi 13 Pro là flagship cao cấp với camera Leica, màn hình AMOLED 2K và hiệu năng mạnh mẽ với chip Snapdragon 8 Gen 2.</p><p>Màn hình 6.73 inch AMOLED với tần số quét 120Hz và độ phân giải 2K mang đến trải nghiệm hình ảnh sắc nét, sống động.</p><p>Hệ thống camera Leica với camera chính 50MP, camera tele 50MP và camera góc siêu rộng 50MP cho phép bạn ghi lại những khoảnh khắc đáng nhớ với chất lượng cao.</p>",
        specifications: [
            { name: "Màn hình", value: "6.73 inch, AMOLED, 120Hz, 2K" },
            { name: "Chip", value: "Snapdragon 8 Gen 2" },
            { name: "RAM", value: "12GB" },
            { name: "Bộ nhớ trong", value: "256GB/512GB" },
            { name: "Camera sau", value: "50MP, 50MP, 50MP" },
            { name: "Camera trước", value: "32MP" },
            { name: "Pin", value: "4820mAh" }
        ]
    },
    {
        id: 5,
        name: "Bose QuietComfort Earbuds",
        price: "6.990.000₫",
        oldPrice: "8.990.000₫",
        image: "https://hdradio.vn/upload/hinhanh/tai-nghe/Bose/Quietcomfort-Earbuds/quietcomfort-earbuds-2024/bose-quietcomfort-earbuds-2024-18.jpg",
        images: [
            "https://hdradio.vn/upload/hinhanh/tai-nghe/Bose/Quietcomfort-Earbuds/quietcomfort-earbuds-2024/bose-quietcomfort-earbuds-2024-18.jpg",
            "https://hdradio.vn/upload/hinhanh/tai-nghe/Bose/Quietcomfort-Earbuds/quietcomfort-earbuds-2024/bose-quietcomfort-earbuds-2024-17.jpg",
            "https://hdradio.vn/upload/hinhanh/tai-nghe/Bose/Quietcomfort-Earbuds/quietcomfort-earbuds-2024/bose-quietcomfort-earbuds-2024-16.jpg",
            "https://hdradio.vn/upload/hinhanh/tai-nghe/Bose/Quietcomfort-Earbuds/quietcomfort-earbuds-2024/bose-quietcomfort-earbuds-2024-15.jpg"
        ],
        rating: 4.8,
        stock: "Còn hàng",
        description: "<p>Bose QuietComfort Earbuds là tai nghe true wireless cao cấp với khả năng chống ồn hàng đầu trong phân khúc.</p><p>Công nghệ chống ồn chủ động (ANC) giúp bạn tận hưởng âm nhạc mà không bị phân tâm bởi tiếng ồn xung quanh.</p><p>Chất lượng âm thanh đặc trưng của Bose với âm bass mạnh mẽ, âm mid rõ ràng và âm treble chi tiết mang đến trải nghiệm nghe nhạc tuyệt vời.</p>",
        specifications: [
            { name: "Loại tai nghe", value: "True Wireless" },
            { name: "Chống ồn", value: "Có (ANC)" },
            { name: "Kết nối", value: "Bluetooth 5.1" },
            { name: "Thời lượng pin", value: "6 giờ (18 giờ với hộp sạc)" },
            { name: "Chống nước", value: "IPX4" },
            { name: "Màu sắc", value: "Đen, Trắng" }
        ]
    },
    {
        id: 6,
        name: "Máy chiếu 4K LG HU715QW",
        price: "39.990.000₫",
        oldPrice: "45.990.000₫",
        image: "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-lg/lg-hu715qw/may-chieu-4k-sieu-gan-lg-hu715qw.jpg",
        images: [
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-lg/lg-hu715qw/may-chieu-4k-sieu-gan-lg-hu715qw.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-lg/lg-hu715qw/may-chieu-4k-sieu-gan-lg-hu715qw-1.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-lg/lg-hu715qw/may-chieu-4k-sieu-gan-lg-hu715qw-2.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-lg/lg-hu715qw/may-chieu-4k-sieu-gan-lg-hu715qw-3.jpg"
        ],
        rating: 4.9,
        stock: "Còn hàng",
        description: "<p>Máy chiếu 4K LG HU715QW là máy chiếu laser siêu gần cao cấp với độ phân giải 4K UHD và độ sáng 2500 ANSI lumens.</p><p>Công nghệ laser cho tuổi thọ lên đến 20.000 giờ và màu sắc chính xác, sống động.</p><p>Tỷ lệ chiếu siêu gần 0.22:1 cho phép đặt máy chiếu cách màn hình chỉ 9.8cm để có kích thước màn hình 100 inch.</p>",
        specifications: [
            { name: "Độ phân giải", value: "4K UHD (3840 x 2160)" },
            { name: "Độ sáng", value: "2500 ANSI lumens" },
            { name: "Nguồn sáng", value: "Laser" },
            { name: "Tuổi thọ nguồn sáng", value: "20.000 giờ" },
            { name: "Tỷ lệ chiếu", value: "0.22:1 (siêu gần)" },
            { name: "Kích thước màn hình", value: "80-120 inch" },
            { name: "Hệ điều hành", value: "webOS" }
        ]
    },
    {
        id: 7,
        name: "Máy chiếu ViewSonic PX701-4K",
        price: "19.990.000₫",
        oldPrice: "24.990.000₫",
        image: "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-3.jpg",
        images: [
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-3.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-2.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-1.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-viewsonic/PX701-4K/may-chieu-Viewsonic-PX701-4K-moi-4.jpg"
        ],
        rating: 4.7,
        stock: "Còn hàng",
        description: "<p>Máy chiếu ViewSonic PX701-4K là máy chiếu 4K giá rẻ với độ phân giải 4K UHD và độ sáng 3200 ANSI lumens.</p><p>Công nghệ XPR cho phép hiển thị hình ảnh 4K sắc nét với chi tiết cao.</p><p>Độ sáng cao 3200 ANSI lumens cho phép sử dụng trong điều kiện ánh sáng môi trường vừa phải.</p>",
        specifications: [
            { name: "Độ phân giải", value: "4K UHD (3840 x 2160)" },
            { name: "Độ sáng", value: "3200 ANSI lumens" },
            { name: "Nguồn sáng", value: "Bóng đèn" },
            { name: "Tuổi thọ bóng đèn", value: "4000-15000 giờ" },
            { name: "Tỷ lệ chiếu", value: "1.5-1.65:1" },
            { name: "Kích thước màn hình", value: "30-300 inch" },
            { name: "Cổng kết nối", value: "HDMI x2, USB, Audio in/out" }
        ]
    },
    {
        id: 8,
        name: "Máy chiếu Optoma HD30HDR",
        price: "21.990.000₫",
        oldPrice: "26.990.000₫",
        image: "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-Optoma/HD30HDR/may-chieu-optoma-HD30HDR-moi-1.jpg",
        images: [
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-Optoma/HD30HDR/may-chieu-optoma-HD30HDR-moi-1.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-Optoma/HD30HDR/may-chieu-optoma-HD30HDR-moi-2.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-Optoma/HD30HDR/may-chieu-optoma-HD30HDR-moi-3.jpg",
            "https://hdradio.vn/upload/hinhanh/may-chieu/may-chieu-Optoma/HD30HDR/may-chieu-optoma-HD30HDR-moi-4.jpg"
        ],
        rating: 4.6,
        stock: "Hết hàng",
        description: "<p>Máy chiếu Optoma HD30HDR là máy chiếu Full HD với hỗ trợ HDR và độ sáng 3800 ANSI lumens.</p><p>Công nghệ DLP cho hình ảnh sắc nét với độ tương phản cao 50.000:1.</p><p>Hỗ trợ HDR10 cho phép hiển thị dải động rộng với màu sắc phong phú và chi tiết trong vùng tối.</p>",
        specifications: [
            { name: "Độ phân giải", value: "Full HD (1920 x 1080)" },
            { name: "Độ sáng", value: "3800 ANSI lumens" },
            { name: "Nguồn sáng", value: "Bóng đèn" },
            { name: "Tuổi thọ bóng đèn", value: "4000-15000 giờ" },
            { name: "Tỷ lệ chiếu", value: "1.47-1.62:1" },
            { name: "Kích thước màn hình", value: "28-302 inch" },
            { name: "Cổng kết nối", value: "HDMI x2, USB, Audio out" }
        ]
    },
];

export default products;
