import {icons, images} from '../constants';

// Dummy data
export const initialCurrentLocation = {
  streetName: 'Phú Diễn, Hà Nội, Việt Nam',
  gps: {
    latitude: 21.0533134,
    longitude: 105.7632937,
  },
};

export const categoryData = [
  {
    id: 1,
    name: 'Đồ ăn vặt',
    icon: icons.do_an_vat,
  },
  {
    id: 2,
    name: 'Cơm',
    icon: icons.rice,
  },
  {
    id: 3,
    name: 'Bánh mỳ',
    icon: icons.banh_my,
  },
  {
    id: 4,
    name: 'Bún phở',
    icon: icons.noodle,
  },
  {
    id: 5,
    name: 'Bánh kem',
    icon: icons.banh_kem,
  },
  {
    id: 6,
    name: 'Trà sữa',
    icon: icons.tra_sua,
  },
  {
    id: 7,
    name: 'Đồ uống',
    icon: icons.drink,
  },
];

export const restaurantData = [
  {
    id: 1,
    name: 'Sữa Chua Trân Châu Hạ Long Healthy - Việt Hưng',
    rating: 4.8,
    address: 'Kiot 2, Toà K1, Khu Đô Thị Việt Hưng, Long Biên, Hà Nội',
    categories: [1, 5],
    photo: images.sua_chua_tran_chau_ha_long_healthy_viet_hung,
    duration: '30 - 45 min',
    location: {
      latitude: 21.011115,
      longitude: 105.814101,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Trần Văn Hải',
    },
    menu: [
      {
        menuId: 1,
        name: 'Sữa chua trân châu cốt dừa',
        photo: images.sua_chua_tran_chau_cot_dua,
        description: 'Sữa chua trân châu cốt dừa',
        price: 24,
      },
      {
        menuId: 2,
        name: 'Sữa chua trân châu đường đen',
        photo: images.sua_chua_tran_chau_duong_den,
        description: 'Sữa chua trân châu đường đen',
        price: 24,
      },
      {
        menuId: 3,
        name: 'Sữa chua trắng',
        photo: images.sua_chua_trang,
        description: 'Sữa chua trắng',
        price: 20,
      },
      {
        menuId: 4,
        name: 'Sữa chua việt quất',
        photo: images.sua_chua_viet_quat,
        description: 'Sự kết hợp tuyêt hảo giữa sữa chua và socola',
        price: 24,
      },
      {
        menuId: 5,
        name: 'Sữa chua socola',
        photo: images.sua_chua_socola,
        description: 'Sự kết hợp hoàn hảo giữa sữa chua và socola',
        price: 24,
      },
      {
        menuId: 6,
        name: 'Sữa chua nha đam',
        photo: images.sua_chua_nha_dam,
        description: 'Ngày hè mát mẻ với sữa chua nha dam',
        price: 28,
      },
      {
        menuId: 7,
        name: 'Sữa chua chanh leo',
        photo: images.sua_chua_chanh_leo,
        description: 'Sữa chua chanh leo',
        price: 28,
      },
    ],
  },

  {
    id: 2,
    name: 'Dồi Sụn Nướng & Ăn Vặt - Shop Online',
    rating: 4.5,
    address:
      'Bãi Xe Nhà Họp Tổ Dân Phố Khu C2 Nghĩa Tân, P. Nghĩa Tân, Cầu Giấy, Hà Nội',
    categories: [1],
    photo: images.doi_sun_nuong_an_vat,
    duration: '30 - 45 min',
    location: {
      latitude: 20.993363,
      longitude: 105.820664,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Nguyễn Hoàng Hải',
    },
    menu: [
      {
        menuId: 1,
        name: 'Bánh tráng nướng mắm ruốc - chà bông',
        photo: images.banh_trang_nuong_mam_ruoc_cha_bong,
        description: '3 chiếc đã nướng chín giòn rụm',
        price: 25,
      },
      {
        menuId: 2,
        name: 'Set lẩu tok 1-2 người ăn',
        photo: images.set_lau_tok_1_2_nguoi_an,
        description:
          'Set lẩu tok gồm topping mỳ và gói sốt cay đỏ Lưu ý: set chưa có rau và thịt bò',
        price: 102,
      },
      {
        menuId: 3,
        name: '5c bánh bao mini nhân thịt (chiên)',
        photo: images.nam_chiec_banh_bao_mini_nhan_thit,
        description: '5c bánh bao mini nhân thịt (chiên)',
        price: 32,
      },
      {
        menuId: 4,
        name: 'Set lẩu tok full topping 2-3 người ăn',
        photo: images.set_lau_tok_topping_2_3_nguoi,
        description:
          'Set lẩu đã bao gồm: topping+ rau+ thịt bò+2 gói mỳ+ gói sốt cay màu đỏ Set đủ no cho 2 người ăn',
        price: 170,
      },
      {
        menuId: 5,
        name: 'Nem kem bơ hải sản',
        photo: images.nem_kem_bo_hai_san,
        description: 'Nem kem bơ hải sản | 1 chiếc',
        price: 10,
      },
      {
        menuId: 6,
        name: 'Chim cút quay (3 con)',
        photo: images.chim_cut_quay,
        description: '3 con đã rán chín kèm nc châms',
        price: 28,
      },
      {
        menuId: 7,
        name: 'Chè dừa dầm',
        photo: images.che_dua_dam,
        description: 'Chè dừa dầm',
        price: 20,
      },
      {
        menuId: 8,
        name: 'Cafe sữa tươi sương sáo',
        photo: images.che_dua_dam,
        description: 'Cafe sữa tươi sương sáo | Cốc 500ml',
        price: 20,
      },
    ],
  },

  {
    id: 3,
    name: 'Cơm Hộp & Kimbap Hàn Quốc - Hyundai Hillstate Hà Đông',
    rating: 4.5,
    address:
      'CT2 - G2A - 02 Hyundai Hillstate Hà Đông, Hà Trì, Hà Đông, Hà Nội',
    categories: [2],
    photo: images.com_hop_kimbap_han_quoc_ha_dong,
    duration: '30 - 45 min',
    location: {
      latitude: 20.9940008,
      longitude: 105.7942165,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Lê Văn Hiếu',
    },
    menu: [
      {
        menuId: 1,
        name: 'Cơm Hộp Thịt Heo Chiên Xù Primium',
        photo: images.com_hop_thit_heo_chien_xu_primium,
        description:
          'Thịt heo chiên xù + Cơm + canh + Món chính 1 + Kimchi + Salad rau xà lách trộn + Trưngs',
        price: 139,
      },
      {
        menuId: 2,
        name: 'Cơm Heo Chiên Primium',
        photo: images.com_heo_chien_primium,
        description:
          'Thịt heo chiên + Cơm + canh+ Món chính 1 + Kimchi + Salad rau xà lách trộn + Trưngs',
        price: 147,
      },
      {
        menuId: 3,
        name: 'Cơm Cá Chiên Primium',
        photo: images.com_ca_chien_primium,
        description:
          'Cá chiên+ Cơm + canh + Kimchi + Salad rau xà lách trộn + Trưngs + sốt tartar',
        price: 147,
      },
      {
        menuId: 4,
        name: 'Cơm Hộp Bulgogi Bò Primium',
        photo: images.com_hop_bulgogi_bo_primium,
        description: 'Cơm Hộp Bulgogi Bò Primium',
        price: 130,
      },
      {
        menuId: 5,
        name: 'Cơm Hộp Mực Xào Cay Primium',
        photo: images.com_hop_muc_sao_cay_primium,
        description: 'Cơm Hộp Mực Xào Cay Primium',
        price: 132,
      },
      {
        menuId: 6,
        name: 'Cơm Trộn Gà Mayo',
        photo: images.com_tron_ga_mayo,
        description: 'Cơm Trộn Gà Mayo',
        price: 114,
      },
      {
        menuId: 7,
        name: 'Cơm Hải Sản Thịt Heo Chiên Xủ Omurice',
        photo: images.com_hai_san_thit_heo_chien_xu_omurice,
        description: 'Cơm Hải Sản Thịt Heo Chiên Xủ Omurice',
        price: 147,
      },
      {
        menuId: 8,
        name: 'Cơm trộn cá ngừ Mayo',
        photo: images.com_tron_ca_ngu_mayo,
        description: 'Cơm trộn cá ngừ Mayo',
        price: 114,
      },
    ],
  },
  {
    id: 4,
    name: 'Bếp Mẹ Sữa - Cơm Gà Hải Nam',
    rating: 4.5,
    address: '23 Ngõ 203/62 H5 Kim Ngưu, P. Thanh Lương, Hai Bà Trưng, Hà Nội',
    categories: [2],
    photo: images.com_ga_hai_nam,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0186009,
      longitude: 105.7541057,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Lê Văn Hiếu',
    },
    menu: [
      {
        menuId: 1,
        name: 'Cơm má đùi gà teryaky',
        photo: images.com_ma_dui_ga_teryaky,
        description:
          'Cơm trắng nấu bằng nước xương gà,chấm nước tương tỏi ớt,đặc trưng sinh thái',
        price: 55,
      },
      {
        menuId: 2,
        name: 'Cơm thịt heo xá xíu',
        photo: images.com_thit_heo_xa_xiu,
        description: 'Cơm thịt heo xá xíu không kèm nước canh',
        price: 55,
      },
      {
        menuId: 3,
        name: 'Cơm thịt heo viên sốt teryaky',
        photo: images.com_thit_heo_vien_sot_teryaky,
        description: 'Cơm thịt heo viên sốt teryaky',
        price: 55,
      },
      {
        menuId: 4,
        name: 'Củ quả dầm',
        photo: images.cu_qua_dam,
        description: 'Củ quả dầm',
        price: 5,
      },
      {
        menuId: 5,
        name: 'Má đùi teryaky',
        photo: images.ma_dui_teryaky,
        description: 'Má đùi teryaky',
        price: 35,
      },
      {
        menuId: 6,
        name: 'Cơm hải nam',
        photo: images.com_hai_nam,
        description: 'Cơm hải nam',
        price: 15,
      },
    ],
  },
  {
    id: 5,
    name: 'Cơm Ngon 100 - Rau Củ Quả',
    rating: 4.5,
    address: '2B Ngõ 44/21 Trần Thái Tông, P. Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
    categories: [2],
    photo: images.com_ngon_100,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0135462,
      longitude: 105.8443165,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Lê Văn Hiếu',
    },
    menu: [
      {
        menuId: 1,
        name: 'Cơm Bò Xào Nấm',
        photo: images.com_bo_xao_nam,
        description: 'Cơm Bò Xào Nấm',
        price: 35,
      },
      {
        menuId: 2,
        name: 'Cơm chả lá lốt',
        photo: images.com_cha_la_lot,
        description: 'Cơm chả lá lốt',
        price: 35,
      },
      {
        menuId: 3,
        name: 'Cơm thịt rang cháy cạnh',
        photo: images.com_thit_rang_chay_canh,
        description: 'Cơm thịt rang cháy cạnh',
        price: 35,
      },
      {
        menuId: 4,
        name: 'Nước Ép Dưa Hấu Chanh tươi',
        photo: images.nuoc_ep_dua_hau_chanh_tuoi,
        description: 'Nước Ép Dưa Hấu Chanh tươi',
        price: 15,
      },
      {
        menuId: 5,
        name: 'Sữa ngô tươi',
        photo: images.sua_ngo_tuoi,
        description: 'Sữa ngô tươi',
        price: 12,
      },
      {
        menuId: 6,
        name: 'Nước chanh leo tươi',
        photo: images.nuoc_chanh_leo_tuoi,
        description: 'Nước chanh leo tươi',
        price: 12,
      },
      {
        menuId: 7,
        name: 'Combo Cơm Trắng Đùi Gà Chua Ngọt + cocacola',
        photo: images.combo_com_trang_dui_ga_chua_ngot,
        description: 'Combo Cơm Trắng Đùi Gà Chua Ngọt + cocacola',
        price: 45,
      },
      {
        menuId: 8,
        name: 'Combo cơm cá kho + spite',
        photo: images.combo_com_ca_kho,
        description: 'Combo cơm cá kho + spite',
        price: 45,
      },
      {
        menuId: 9,
        name: 'Combo cơm chả lá lốt + spite',
        photo: images.combo_com_cha_la_lot,
        description: 'Combo cơm chả lá lốt + spite',
        price: 45,
      },
    ],
  },
  {
    id: 6,
    name: 'Bảo Lam - Bánh Mì Que Hải Phòng - Trương Định',
    rating: 4.5,
    address: '20A Ngõ 125 Trương Định, P Trương Định, Hai Bà Trưng, Hà Nội',
    categories: [3],
    photo: images.banh_my_que_hai_phong,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0367325,
      longitude: 105.8440537,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Lê Văn Hiếu',
    },
    menu: [
      {
        menuId: 1,
        name: 'Bánh mì que pate',
        photo: images.bm_que_pate,
        description: 'Bánh mì que pate',
        price: 35,
      },
      {
        menuId: 2,
        name: 'Bánh mỳ que bơ sữa',
        photo: images.bm_que_bo_sua,
        description: 'Bánh mỳ que bơ sữa',
        price: 6,
      },
      {
        menuId: 3,
        name: 'Combo 7 bmq bơ sữa + 1 trà quất',
        photo: images.combo_7bm_bo_sua,
        description: 'Combo 7 bmq bơ sữa + 1 trà quất',
        price: 50,
      },
      {
        menuId: 4,
        name: '5 nem chua',
        photo: images.nam_nem_chua,
        description: '5 nem chua',
        price: 28,
      },
    ],
  },
  {
    id: 7,
    name: 'Trà Sữa Sharetea - 47 Đào Tấn',
    rating: 4.5,
    address: '47 Đào Tấn, Ba Đình, P. Cống Vị, Ba Đình, Hà Nội',
    categories: [6],
    photo: images.sharetea,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0328332,
      longitude: 105.8049132,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Hoàng Hiểu Long',
    },
    menu: [
      {
        menuId: 1,
        name: 'Trà Sữa Trân Châu Hokkaido',
        photo: images.hokkaido,
        description: 'Trà Sữa Trân Châu Hokkaido',
        price: 55,
      },
      {
        menuId: 2,
        name: 'Trà sữa Trân Châu Okinawa',
        photo: images.okinawa,
        description: 'Trà sữa Trân Châu Okinawa',
        price: 55,
      },
      {
        menuId: 3,
        name: 'Trà Sữa Xoài',
        photo: images.xoai,
        description: 'Trà Sữa Xoài',
        price: 49,
      },
      {
        menuId: 4,
        name: 'Sữa tươi trân châu đường đen',
        photo: images.duong_den,
        description: 'Sữa tươi trân châu đường đen',
        price: 55,
      },
      {
        menuId: 5,
        name: 'Bánh kẹp Pháp vị Socola',
        photo: images.banh_kep_socola,
        description: 'Bánh kẹp Pháp vị Socola',
        price: 19,
      },
      {
        menuId: 6,
        name: 'Khoai tây xóc mắm ớt',
        photo: images.khoai_tay_xoc_mam_ot,
        description: 'Khoai tây xóc mắm ớt',
        price: 79,
      },
    ],
  },
  {
    id: 8,
    name: 'Trà Sữa - Trần Phú',
    rating: 4.5,
    address: 'Sảnh G, Tòa Westa, 102 Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội',
    categories: [6],
    photo: images.tra_sua_tran_phu,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0498188,
      longitude: 105.7090434,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Trần Văn Quân',
    },
    menu: [
      {
        menuId: 1,
        name: 'Cà phê nâu',
        photo: images.cafe_nau,
        description: 'Cà phê nâu',
        price: 54,
      },
      {
        menuId: 2,
        name: 'Cà phê cốt dừa',
        photo: images.cafe_cot_dua,
        description: 'Cà phê cốt dừa',
        price: 54,
      },
      {
        menuId: 3,
        name: 'Cà phê đen',
        photo: images.cafe_den,
        description: 'Cà phê đen',
        price: 49,
      },
      {
        menuId: 4,
        name: 'Trà xanh hoa quả royaltea ĐB',
        photo: images.hoa_qua,
        description: 'Trà xanh hoa quả royaltea ĐB',
        price: 55,
      },
      {
        menuId: 5,
        name: 'Trà dâu tây việt quất kem cheese',
        photo: images.dau_tay_viet_quat,
        description: 'Trà dâu tây việt quất kem cheese',
        price: 19,
      },
    ],
  },
  {
    id: 9,
    name: 'Bếp HOVI - Set Bún Bò Huế - Hoàng Cầu',
    rating: 4.5,
    address: '28 Hoàng Cầu, P. Ô Chợ Dừa, Đống Đa, Hà Nội',
    categories: [4],
    photo: images.bun_bo_hue,
    duration: '30 - 45 min',
    location: {
      latitude: 21.0162826,
      longitude: 105.8218673,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Trần Văn Hiếu',
    },
    menu: [
      {
        menuId: 1,
        name: 'Set Bún Bò Huế đầy đủ (cho 1 suất)',
        photo: images.day_du,
        description:
          '(Các món đựng trong package riêng ) Bắp bò, gân bò, móng giò, chả cua, mọc heo, huyết, giò gân, bún, nước dùng bún bò, rau tươi và đồ ăn kèm',
        price: 70,
      },
      {
        menuId: 2,
        name: 'Set Bún Bò Huế đầy đủ không móng (cho 1 suất)',
        photo: images.day_du_khong_mong,
        description:
          '(Các món đựng trong package riêng ) Bún, bắp bò chín, gân bò, chả cua, mọc heo, giò gân, huyết, nước dùng, rau tươi và đồ ăn kèm.',
        price: 70,
      },
      {
        menuId: 3,
        name: 'Set Bún Bò Huế đặc biệt (cho 1 suất)',
        photo: images.dac_biet,
        description:
          '(Các món đưng trong package riêng ) Bắp bò chín, bắp bò tái, gân bò, móng giò, chả cua, mọc heo, huyết, giò gân, bún, nước dùng bún bò, rau tươi và đồ ăn kèm',
        price: 80,
      },
      {
        menuId: 4,
        name: 'Set 1 Combo gồm 2 tô Bún Bò Huế đầy đủ',
        photo: images.combo_day_du,
        description:
          '(Các món đưng trong package riêng ) 2 phần bún + 2 phần bò chín + 2 phần gân bò + 2 chả cua + 2 mọc heo + 2 phần giò tai + 2 phần huyêts + 2 móng giò + nước dùng + rau tươi và đồ ăn kèm',
        price: 125,
      },
      {
        menuId: 5,
        name: 'Set 1 Combo gồm 2 tô Bún Bò Huế đặc biệt',
        photo: images.combo_dac_biet,
        description:
          '(Các món đựng trong package riêng ) 2 phần bún + 2 phần bò chín + 2 phần bò tái + 2 phần gân bò + 2 chả cua + 2 mọc heo + 2 phần giò gân + 2 phần huyêts + 2 móng giò + nước dùng + rau tươi và đồ ăn kèm.',
        price: 145,
      },
    ],
  },
];
