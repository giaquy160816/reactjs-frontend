export const topBarConfig = {
    isEnabled: true,
    showBanner: true, // true để hiện banner, false để hiện content bình thường
    banner: {
        imageUrl: "https://hdradio.vn/upload/banner/thang-4-2025/chuong-trinh-km-thang-4-2025-anh-2.jpg",
        link: "/khuyen-mai",
        alt: "Khuyến mãi tháng 4"
    },
    content: {
        leftText: "Chào mừng đến với Shop Camera!",
        rightLinks: [
            { text: "Đăng ký", href: "/register" },
            { text: "Đăng nhập", href: "/login" }
        ]
    }
};