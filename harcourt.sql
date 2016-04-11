-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2016 at 12:32 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `harcourt`
--

-- --------------------------------------------------------

--
-- Table structure for table `lt_aboutus`
--

CREATE TABLE IF NOT EXISTS `lt_aboutus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `lang` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `lt_aboutus`
--

INSERT INTO `lt_aboutus` (`id`, `title`, `detail`, `lang`, `status`, `ordering`) VALUES
(1, 'Giới thiệu', '<p><strong>1. MartReal là doanh nghiệp đáng tin cậy đang hoạt động trong lĩnh vực tư vấn, hỗ trợ khách hàng về tất cả các lĩnh vực có liên quan đến địa ốc như:</strong></p>\r\n\r\n<p>- Mua bất động sản</p>\r\n\r\n<p>- Bán bất động sản</p>\r\n\r\n<p>- Cho thuê bất động sản</p>\r\n\r\n<p>- Quản lý Bất động sản</p>\r\n\r\n<p><span style="line-height:1.6">- Kết nối các dịch vụ: Định giá, tư vấn,pháp lý, sửa chữa…</span></p>\r\n\r\n<p><span style="line-height:1.6">&nbsp;Chúng tôi cung cấp dịch vụ hoàn hảo vượt xa mong đợi của khách hàng tạo nên sự khác biệt bằng sự chuyên nghiệp, trách nhiệm, tận tâm, nhờ đội ngũ nhân viên thấu hiểu những giá trị cốt lõi mà MartReal mang lại cho cộng đồng</span><br />\r\n<span style="line-height:1.6">&nbsp;Chúng tôi đề cao vai trò đạo đức trong kinh doanh và đó là tiêu chí hàng đầu của công ty chúng tôi.</span></p>\r\n\r\n<p><strong>2. Tầm nhìn:</strong><br />\r\n<span style="line-height:1.6">MartReal sẽ xuất hiện trong suy nghĩ của khách hàng trong nước cũng như khách quốc tế đặt chân đến Việt Nam khi có nhu cầu về Bất Động Sản như một phần không thể thiếu. Mỗi nhân viên của MartReal là một sứ giả truyền tải đến khách hàng những giá trị cốt lõi mà công ty mang lại cho cộng đồng bằng sự chuyên nghiệp, tận tâm, trách nhiệm của người hành nghề tư vấn, kinh doanh bất động sản đúng nghĩa</span></p>\r\n\r\n<p><strong>3. Sứ mệnh:</strong><br />\r\n<span style="line-height:1.6">Mang lại cho khách hàng chất lượng dịch vụ hài lòng nhất trong lĩnh vực liên quan đến Bất Động Sản bằng tinh thần trách nhiệm và sự phục vụ tử tế của đội ngũ nhân viên được đào tạo bài bản, chuyên nghiệp.</span></p>\r\n\r\n<p>&nbsp;</p>\r\n', 'vi', 1, 1),
(2, 'Giới thiệu', '<p style="text-align:justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\r\n\r\n<p style="text-align:justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n', 'en', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lt_adv`
--

CREATE TABLE IF NOT EXISTS `lt_adv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `lang` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `lt_adv`
--

INSERT INTO `lt_adv` (`id`, `title`, `images`, `link`, `lang`, `status`, `ordering`) VALUES
(3, 'Leaderreal', 'dataweb/images/banner-help-compare.jpg', 'http://leaderreal.com/', 'vi', 1, 1),
(4, 'Leaderreal', 'dataweb/images/banner-insurance.jpg', 'http://leaderreal.com/', 'vi', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lt_category`
--

CREATE TABLE IF NOT EXISTS `lt_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `lang` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `lt_category`
--

INSERT INTO `lt_category` (`id`, `title`, `tag`, `lang`, `status`, `ordering`) VALUES
(3, 'Cho Thuê', 'cho-thue', 'vi', 1, 3),
(4, 'Mua bán', 'mua-ban', 'vi', 1, 2),
(5, 'BDS Doanh Nghiệp', 'bds-doanh-nghiep', 'vi', 1, 1),
(6, 'Business', 'business', 'en', 1, 4),
(7, 'for rent', 'for-rent', 'en', 1, 5),
(8, 'purchase and sale', 'purchase-and-sale', 'en', 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `lt_config`
--

CREATE TABLE IF NOT EXISTS `lt_config` (
  `smtp_user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `smtp_pass` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_company` varchar(255) CHARACTER SET utf8 NOT NULL,
  `nick_yahoo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hotline` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `facebook` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `g_plus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `youtube` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cell_phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `support_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `support_phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_web` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `meta_keywords` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `twitter` varchar(255) CHARACTER SET utf8 NOT NULL,
  `zing` varchar(255) CHARACTER SET utf8 NOT NULL,
  `skype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tiendiem` int(11) NOT NULL,
  `tienvanchuyen` int(11) NOT NULL,
  `phi` int(11) NOT NULL,
  PRIMARY KEY (`smtp_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lt_config`
--

INSERT INTO `lt_config` (`smtp_user`, `smtp_pass`, `name_company`, `nick_yahoo`, `phone`, `hotline`, `facebook`, `g_plus`, `youtube`, `cell_phone`, `email`, `support_email`, `support_phone`, `title_web`, `meta_keywords`, `meta_description`, `address`, `twitter`, `zing`, `skype`, `tiendiem`, `tienvanchuyen`, `phi`) VALUES
('support@saigondomain.com', '888saigondomain', 'Công ty TNHH MARTREAL', 'https://www.linkedin.com/home?trk=nav_responsive_tab_home', '0903068802', 'Hotline', 'http:/facebook.com', 'g+', '12, Hai Bà Trưng, p12, quận 1, tp. Hồ Chí Minh', '0903068802', 'support@martreal.com', 'Email (hỗ trợ)', 'Số điện thoại (hỗ trợ)', 'Công ty TNHH MARTREAL', 'Công ty TNHH MARTREAL', 'Công ty TNHH MARTREAL', '285/37 Cách Mạng Tháng 8  P.12, Q.10, TP.HCM', 'twitter', 'zing', 'gevi.cosmetics', 100000, 1000000, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `lt_contact`
--

CREATE TABLE IF NOT EXISTS `lt_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(55) NOT NULL,
  `add_date` datetime NOT NULL,
  `message` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `lt_contact`
--

INSERT INTO `lt_contact` (`id`, `name`, `email`, `address`, `phone`, `add_date`, `message`, `status`) VALUES
(1, 'ád', 'support@saigondomain.com', 'ád', 'ád', '2015-12-18 00:00:00', 'ád', 0);

-- --------------------------------------------------------

--
-- Table structure for table `lt_district`
--

CREATE TABLE IF NOT EXISTS `lt_district` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1374 ;

--
-- Dumping data for table `lt_district`
--

INSERT INTO `lt_district` (`id`, `name`, `status`, `ordering`) VALUES
(687, 'Q.1', 1, 1),
(688, 'Q.2', 1, 2),
(689, 'Q.3', 1, 3),
(690, 'Q.4', 1, 4),
(691, 'Q.5', 1, 5),
(692, 'Q. 6', 1, 6),
(693, 'Q.7', 1, 7),
(694, 'Q.8', 1, 8),
(695, 'Q. 9', 1, 9),
(696, 'Q. 10', 1, 10),
(697, 'Q. 11', 1, 11),
(698, 'Q.12', 1, 12),
(699, 'Q. Gò Vấp', 1, 13),
(700, 'Q.Tân Bình', 1, 14),
(701, 'Q.Tân Phú', 1, 15),
(702, 'Q. Bình Thạnh', 1, 16),
(703, 'Q.Phú Nhuận', 1, 17),
(704, 'Q.Thủ Đức', 1, 18),
(705, 'Q. Bình Tân', 1, 19),
(706, ' Bình Chánh', 1, 20),
(707, ' Củ Chi', 1, 21),
(708, ' Hóc Môn', 1, 22),
(709, ' Nhà Bè', 1, 23),
(710, ' Cần Giờ', 1, 24),
(712, 'Quận Lê Chân', 0, 0),
(713, 'Quận Ngô Quyền', 0, 0),
(714, 'Quận Kiến An', 0, 0),
(715, 'Quận Hải An', 0, 0),
(716, 'Quận Đồ Sơn', 0, 0),
(717, ' An Lão', 0, 0),
(718, ' Kiến Thuỵ', 0, 0),
(719, ' Thủy Nguyên', 0, 0),
(720, ' An Dương', 0, 0),
(721, ' Tiên Lãng', 0, 0),
(722, ' Vĩnh Bảo', 0, 0),
(723, ' Cát Hải', 0, 0),
(724, ' Bạch Long Vĩ', 0, 0),
(725, 'Quận Dương Kinh', 0, 0),
(726, 'Quận Hải Châu', 0, 0),
(727, 'Quận Thanh Khê', 0, 0),
(728, 'Quận Sơn Trà', 0, 0),
(729, 'Quận Ngũ Hành Sơn', 0, 0),
(730, 'Quận Liên Chiểu', 0, 0),
(731, ' Hoà Vang', 0, 0),
(732, 'Quận Cẩm Lệ', 0, 0),
(733, 'Thành phố Hà Giang', 0, 0),
(734, ' Đồng Văn', 0, 0),
(735, ' Mèo Vạc', 0, 0),
(736, ' Yên Minh', 0, 0),
(737, ' Quản Bạ', 0, 0),
(738, ' Vị Xuyên', 0, 0),
(739, ' Bắc Mê', 0, 0),
(740, ' Hoàng Su Phì', 0, 0),
(741, ' Xín Mần', 0, 0),
(742, ' Bắc Quang', 0, 0),
(743, ' Quang Bình', 0, 0),
(744, 'Thị xã Cao Bằng', 0, 0),
(745, ' Bảo Lạc', 0, 0),
(746, ' Thông Nông', 0, 0),
(747, ' Hà Quảng', 0, 0),
(748, ' Trà Lĩnh', 0, 0),
(749, ' Trùng Khánh', 0, 0),
(750, ' Nguyên Bình', 0, 0),
(751, ' Hoà An', 0, 0),
(752, ' Quảng Uyên', 0, 0),
(753, ' Thạch An', 0, 0),
(754, ' Hạ Lang', 0, 0),
(755, ' Bảo Lâm', 0, 0),
(756, ' Phục Hoà', 0, 0),
(757, 'Thị xã Lai Châu', 0, 0),
(758, ' Tam Đường', 0, 0),
(759, ' Phong Thổ', 0, 0),
(760, ' Sìn Hồ', 0, 0),
(761, ' Mường Tè', 0, 0),
(762, ' Than Uyên', 0, 0),
(763, 'Thành phố Lào Cai', 0, 0),
(764, ' Xi Ma Cai', 0, 0),
(765, ' Bát Xát', 0, 0),
(766, ' Bảo Thắng', 0, 0),
(767, ' Sa Pa', 0, 0),
(768, ' Văn Bàn', 0, 0),
(769, ' Bảo Yên', 0, 0),
(770, ' Bắc Hà', 0, 0),
(771, ' Mường Khương', 0, 0),
(772, 'Thành phố Tuyên Quang', 0, 0),
(773, ' Na Hang', 0, 0),
(774, ' Chiêm Hoá', 0, 0),
(775, ' Hàm Yên', 0, 0),
(776, ' Yên Sơn', 0, 0),
(777, ' Sơn Dương', 0, 0),
(778, 'Thành phố Lạng Sơn', 0, 0),
(779, ' Tràng Định', 0, 0),
(780, ' Bình Gia', 0, 0),
(781, ' Văn Lãng', 0, 0),
(782, ' Bắc Sơn', 0, 0),
(783, ' Văn Quan', 0, 0),
(784, ' Cao Lộc', 0, 0),
(785, ' Lộc Bình', 0, 0),
(786, ' Chi Lăng', 0, 0),
(787, ' Đình Lập', 0, 0),
(788, ' Hữu Lũng', 0, 0),
(789, 'Thị xã Bắc Kạn', 0, 0),
(790, ' Chợ Đồn', 0, 0),
(791, ' Bạch Thông', 0, 0),
(792, ' Na Rì', 0, 0),
(793, ' Ngân Sơn', 0, 0),
(794, ' Ba Bể', 0, 0),
(795, ' Chợ Mới', 0, 0),
(796, ' Pác Nặm', 0, 0),
(797, 'TP.Thái Nguyên', 0, 0),
(798, 'Thị xã Sông Công', 0, 0),
(799, ' Định Hoá', 0, 0),
(800, ' Phú Lương', 0, 0),
(801, ' Võ Nhai', 0, 0),
(802, ' Đại Từ', 0, 0),
(803, ' Đồng Hỷ', 0, 0),
(804, ' Phú Bình', 0, 0),
(805, ' Phổ Yên', 0, 0),
(806, 'Thành phố Yên Bái', 0, 0),
(807, 'Thị xã Nghĩa Lộ', 0, 0),
(808, ' Văn Yên', 0, 0),
(809, ' Yên Bình', 0, 0),
(810, ' Mù Cang Chải', 0, 0),
(811, ' Văn Chấn', 0, 0),
(812, ' Trấn Yên', 0, 0),
(813, ' Trạm Tấu', 0, 0),
(814, ' Lục Yên', 0, 0),
(815, 'Thị xã Sơn La', 0, 0),
(816, ' Quỳnh Nhai', 0, 0),
(817, ' Mường La', 0, 0),
(818, ' Thuận Châu', 0, 0),
(819, ' Bắc Yên', 0, 0),
(820, ' Phù Yên', 0, 0),
(821, ' Mai Sơn', 0, 0),
(822, ' Yên Châu', 0, 0),
(823, ' Sông Mã', 0, 0),
(824, ' Mộc Châu', 0, 0),
(825, ' Sốp Cộp', 0, 0),
(826, 'TP. Việt Trì', 0, 0),
(827, 'Thị xã Phú Thọ', 0, 0),
(828, ' Đoan Hùng', 0, 0),
(829, ' Thanh Ba', 0, 0),
(830, ' Hạ Hoà', 0, 0),
(831, ' Cẩm Khê', 0, 0),
(832, ' Yên Lập', 0, 0),
(833, ' Thanh Sơn', 0, 0),
(834, ' Phù Ninh', 0, 0),
(835, ' Lâm Thao', 0, 0),
(836, ' Tam Nông', 0, 0),
(837, ' Thanh Thủy', 0, 0),
(838, ' Tân Sơn', 0, 0),
(839, 'Thành phố Vĩnh Yên', 0, 0),
(840, ' Tam Dương', 0, 0),
(841, ' Lập Thạch', 0, 0),
(842, ' Vĩnh Tường', 0, 0),
(843, ' Yên Lạc', 0, 0),
(844, ' Bình Xuyên', 0, 0),
(845, ' Mê Linh', 0, 0),
(846, 'Thị xã Phúc Yên', 0, 0),
(847, ' Tam Đảo', 0, 0),
(848, 'TP. Hạ Long', 0, 0),
(849, 'Thị xã Cẩm Phả', 0, 0),
(850, 'Thị xã Uông Bí', 0, 0),
(851, 'Thị xã Móng Cái', 0, 0),
(852, ' Bình Liêu', 0, 0),
(853, ' Đầm Hà', 0, 0),
(854, ' Hải Hà', 0, 0),
(855, ' Tiên Yên', 0, 0),
(856, ' Ba Chẽ', 0, 0),
(857, ' Đông Triều', 0, 0),
(858, ' Yên Hưng', 0, 0),
(859, ' Hoành Bồ', 0, 0),
(860, ' Vân Đồn', 0, 0),
(861, ' Cô Tô', 0, 0),
(862, 'Thành phố Bắc Giang', 0, 0),
(863, ' Yên Thế', 0, 0),
(864, ' Lục Ngạn', 0, 0),
(865, ' Sơn Động', 0, 0),
(866, ' Lục Nam', 0, 0),
(867, ' Tân Yên', 0, 0),
(868, ' Hiệp Hoà', 0, 0),
(869, ' Lạng Giang', 0, 0),
(870, ' Việt Yên', 0, 0),
(871, ' Yên Dũng', 0, 0),
(872, 'Thành phố Bắc Ninh', 0, 0),
(873, ' Yên Phong', 0, 0),
(874, ' Quế Võ.', 0, 0),
(875, ' Tiên Du', 0, 0),
(876, ' Từ Sơn', 0, 0),
(877, ' Thuận Thành', 0, 0),
(878, ' Gia Bình', 0, 0),
(879, ' Lương Tài', 0, 0),
(880, 'Quận Hoàn Kiếm', 0, 0),
(881, 'Quận Hai Bà Trưng', 0, 0),
(882, 'Quận Đống Đa', 0, 0),
(883, 'Quận Tây Hồ', 0, 0),
(884, 'Quận Cầu Giấy', 0, 0),
(885, 'Quận Thanh Xuân', 0, 0),
(886, 'Quận Hoàng Mai', 0, 0),
(887, 'Quận Long Biên', 0, 0),
(888, ' Từ Liêm', 0, 0),
(889, ' Thanh Trì', 0, 0),
(890, ' Gia Lâm', 0, 0),
(891, ' Đông Anh', 0, 0),
(892, ' Sóc Sơn', 0, 0),
(893, 'Thị xã Sơn Tây', 0, 0),
(894, ' Ba Vì', 0, 0),
(895, ' Phúc Thọ', 0, 0),
(896, ' Thạch Thất', 0, 0),
(897, ' Quốc Oai', 0, 0),
(898, ' Chương Mỹ', 0, 0),
(899, ' Đan Phượng', 0, 0),
(900, ' Hoài Đức', 0, 0),
(901, ' Thanh Oai', 0, 0),
(902, ' Mỹ Đức', 0, 0),
(903, ' Ứng Hoà', 0, 0),
(904, ' Thường Tín', 0, 0),
(905, ' Phú Xuyên', 0, 0),
(906, ' Mê Linh', 0, 0),
(907, 'Thành phố Hải Dương', 0, 0),
(908, ' Chí Linh', 0, 0),
(909, ' Nam Sách', 0, 0),
(910, ' Kinh Môn', 0, 0),
(911, ' Gia Lộc', 0, 0),
(912, ' Tứ Kỳ', 0, 0),
(913, ' Thanh Miện', 0, 0),
(914, ' Ninh Giang', 0, 0),
(915, ' Cẩm Giàng', 0, 0),
(916, ' Thanh Hà', 0, 0),
(917, ' Kim Thành', 0, 0),
(918, ' Bình Giang', 0, 0),
(919, 'Thị xã Hưng Yên', 0, 0),
(920, ' Kim Động', 0, 0),
(921, ' Ân Thi', 0, 0),
(922, ' Khoái Châu', 0, 0),
(923, ' Yên Mỹ', 0, 0),
(924, ' Tiên Lữ', 0, 0),
(925, ' Phù Cừ', 0, 0),
(926, ' Mỹ Hào', 0, 0),
(927, ' Văn Lâm', 0, 0),
(928, ' Văn Giang', 0, 0),
(929, 'Thành phố Hoà Bình', 0, 0),
(930, ' Đà Bắc', 0, 0),
(931, ' Mai Châu', 0, 0),
(932, ' Tân Lạc', 0, 0),
(933, ' Lạc Sơn', 0, 0),
(934, ' Kỳ Sơn', 0, 0),
(935, ' Lưương Sơn', 0, 0),
(936, ' Kim Bôi', 0, 0),
(937, ' Lạc Thuỷ', 0, 0),
(938, ' Yên Thuỷ', 0, 0),
(939, ' Cao Phong', 0, 0),
(940, 'Thị xã Phủ Lý', 0, 0),
(941, ' Duy Tiên', 0, 0),
(942, ' Kim Bảng', 0, 0),
(943, ' Lý Nhân', 0, 0),
(944, 'Huỵện Thanh Liêm', 0, 0),
(945, ' Bình Lục', 0, 0),
(946, 'TP. Nam Định', 0, 0),
(947, ' Mỹ Lộc', 0, 0),
(948, ' Xuân Trường', 0, 0),
(949, ' Giao Thủy', 0, 0),
(950, ' ý Yên', 0, 0),
(951, ' Vụ Bản', 0, 0),
(952, ' Nam Trực', 0, 0),
(953, ' Trực Ninh', 0, 0),
(954, ' Nghĩa Hưng', 0, 0),
(955, ' Hải Hậu', 0, 0),
(956, 'Thành phố Thái Bình', 0, 0),
(957, ' Quỳnh Phụ', 0, 0),
(958, ' Hưng Hà', 0, 0),
(959, ' Đông Hưng', 0, 0),
(960, ' Vũ Thư', 0, 0),
(961, ' Kiến Xương', 0, 0),
(962, ' Tiền Hải', 0, 0),
(963, ' Thái Thuỵ', 0, 0),
(964, 'Thành phố Ninh Bình', 0, 0),
(965, 'Thị xã Tam Điệp', 0, 0),
(966, ' Nho Quan', 0, 0),
(967, ' Gia Viễn', 0, 0),
(968, ' Hoa Lư', 0, 0),
(969, ' Yên Mô', 0, 0),
(970, ' Kim Sơn', 0, 0),
(971, ' Yên Khánh', 0, 0),
(972, 'Thành phố Thanh Hoá', 0, 0),
(973, 'Thị xã Bỉm Sơn', 0, 0),
(974, 'Thị xã Sầm Sơn', 0, 0),
(975, ' Quan Hoá', 0, 0),
(976, ' Quan Sơn', 0, 0),
(977, ' Mường Lát', 0, 0),
(978, ' Bá Thước', 0, 0),
(979, ' Thường Xuân', 0, 0),
(980, ' Như Xuân', 0, 0),
(981, ' Như Thanh', 0, 0),
(982, ' Lang Chánh', 0, 0),
(983, ' Ngọc Lặc', 0, 0),
(984, ' Thạch Thành', 0, 0),
(985, ' Cẩm Thủy', 0, 0),
(986, ' Thọ Xuân', 0, 0),
(987, ' Vĩnh Lộc', 0, 0),
(988, ' Thiệu Hoá', 0, 0),
(989, ' Triệu Sơn', 0, 0),
(990, ' Nông Cống', 0, 0),
(991, ' Đông Sơn', 0, 0),
(992, ' Hà Trung', 0, 0),
(993, ' Hoằng Hoá', 0, 0),
(994, ' Nga Sơn', 0, 0),
(995, ' Hậu Lộc', 0, 0),
(996, ' Quảng Xương', 0, 0),
(997, ' Tĩnh Gia', 0, 0),
(998, ' Yên Định', 0, 0),
(999, 'Thành phố Vinh', 0, 0),
(1000, 'Thị xã Cửa Lò', 0, 0),
(1001, ' Quỳ Châu', 0, 0),
(1002, ' Quỳ Hợp', 0, 0),
(1003, ' Nghĩa Đàn', 0, 0),
(1004, ' Quỳnh Lưu', 0, 0),
(1005, ' Kỳ Sơn', 0, 0),
(1006, ' Tương Dương', 0, 0),
(1007, ' Con Cuông', 0, 0),
(1008, ' Tân Kỳ', 0, 0),
(1009, ' Yên Thành', 0, 0),
(1010, ' Diễn Châu', 0, 0),
(1011, ' Anh Sơn', 0, 0),
(1012, ' Đô Lương', 0, 0),
(1013, ' Thanh Chương', 0, 0),
(1014, ' Nghi Lộc', 0, 0),
(1015, ' Nam Đàn', 0, 0),
(1016, ' Hưng Nguyên', 0, 0),
(1017, ' Quế Phong', 0, 0),
(1018, 'Thành phố Hà Tĩnh', 0, 0),
(1019, 'Thị xã Hồng Lĩnh', 0, 0),
(1020, ' Hương Sơn', 0, 0),
(1021, ' Đức Thọ', 0, 0),
(1022, ' Nghi Xuân', 0, 0),
(1023, ' Can Lộc', 0, 0),
(1024, ' Hương Khê', 0, 0),
(1025, ' Thạch Hà', 0, 0),
(1026, ' Cẩm Xuyên', 0, 0),
(1027, ' Kỳ Anh', 0, 0),
(1028, ' Vũ Quang', 0, 0),
(1029, ' Lộc Hà', 0, 0),
(1030, 'Thành phố Đồng Hới', 0, 0),
(1031, ' Tuyên Hoá', 0, 0),
(1032, ' Minh Hoá', 0, 0),
(1033, ' Quảng Trạch', 0, 0),
(1034, ' Bố Trạch', 0, 0),
(1035, ' Quảng Ninh', 0, 0),
(1036, ' Lệ Thuỷ', 0, 0),
(1037, 'Thị xã Đông Hà', 0, 0),
(1038, 'Thị xã Quảng Trị', 0, 0),
(1039, ' Vĩnh Linh', 0, 0),
(1040, ' Gio Linh', 0, 0),
(1041, ' Cam Lộ', 0, 0),
(1042, ' Triệu Phong', 0, 0),
(1043, ' Hải Lăng', 0, 0),
(1044, ' Hướng Hoá', 0, 0),
(1045, ' Đăk Rông', 0, 0),
(1046, ' đảo Cồn cỏ', 0, 0),
(1047, 'TP. Huế', 0, 0),
(1048, ' Phong Điền', 0, 0),
(1049, ' Quảng Điền', 0, 0),
(1050, ' Hương Trà', 0, 0),
(1051, ' Phú Vang', 0, 0),
(1052, ' Hương Thuỷ', 0, 0),
(1053, ' Phú Lộc', 0, 0),
(1054, ' Nam Đông', 0, 0),
(1055, ' A Lưới', 0, 0),
(1056, 'Thành phố Tam Kỳ', 0, 0),
(1057, 'Thị xã Hội An', 0, 0),
(1058, ' Duy Xuyên', 0, 0),
(1059, ' Điện Bàn', 0, 0),
(1060, ' Đại Lộc', 0, 0),
(1061, ' Quế Sơn', 0, 0),
(1062, ' Hiệp Đức', 0, 0),
(1063, ' Thăng Bình', 0, 0),
(1064, ' Núi Thành', 0, 0),
(1065, ' Tiên Phước', 0, 0),
(1066, ' Bắc Trà My', 0, 0),
(1067, ' Đông Giang', 0, 0),
(1068, ' Nam Giang', 0, 0),
(1069, ' Phước Sơn', 0, 0),
(1070, ' Nam Trà My', 0, 0),
(1071, ' Tây Giang', 0, 0),
(1072, ' Phú Ninh', 0, 0),
(1073, 'Thành phố Quảng Ngãi', 0, 0),
(1074, ' Lý Sơn', 0, 0),
(1075, ' Bình Sơn', 0, 0),
(1076, ' Trà Bồng', 0, 0),
(1077, ' Sơn Tịnh', 0, 0),
(1078, ' Sơn Hà', 0, 0),
(1079, ' Tư Nghĩa', 0, 0),
(1080, ' Nghĩa Hành', 0, 0),
(1081, ' Minh Long', 0, 0),
(1082, ' Mộ Đức', 0, 0),
(1083, ' Đức Phổ', 0, 0),
(1084, ' Ba Tơ', 0, 0),
(1085, ' Sơn Tây', 0, 0),
(1086, ' Tây Trà', 0, 0),
(1087, 'Thị xã KonTum', 0, 0),
(1088, ' Đăk Glei', 0, 0),
(1089, ' Ngọc Hồi', 0, 0),
(1090, ' Đăk Tô', 0, 0),
(1091, ' Sa Thầy', 0, 0),
(1092, ' Kon Plong', 0, 0),
(1093, ' Đăk Hà', 0, 0),
(1094, ' Kon Rộy', 0, 0),
(1095, ' Tu Mơ Rông', 0, 0),
(1096, 'Thành phố Quy Nhơn', 0, 0),
(1097, ' An Lão', 0, 0),
(1098, ' Hoài Ân', 0, 0),
(1099, ' Hoài Nhơn', 0, 0),
(1100, ' Phù Mỹ', 0, 0),
(1101, ' Phù Cát', 0, 0),
(1102, ' Vĩnh Thạnh', 0, 0),
(1103, ' Tây Sơn', 0, 0),
(1104, ' Vân Canh', 0, 0),
(1105, ' An Nhơn', 0, 0),
(1106, ' Tuy Phước', 0, 0),
(1107, 'Thành phố Pleiku', 0, 0),
(1108, ' Chư Păh', 0, 0),
(1109, ' Mang Yang', 0, 0),
(1110, ' Kbang', 0, 0),
(1111, 'Thị xã An Khê', 0, 0),
(1112, ' Kông Chro', 0, 0),
(1113, ' Đức Cơ', 0, 0),
(1114, ' Chưprông', 0, 0),
(1115, ' Chư Sê', 0, 0),
(1116, ' Ayunpa', 0, 0),
(1117, ' Krông Pa', 0, 0),
(1118, ' Ia Grai', 0, 0),
(1119, ' Đăk Đoa', 0, 0),
(1120, ' Ia Pa', 0, 0),
(1121, ' Đăk Pơ', 0, 0),
(1122, ' Phú Thiện', 0, 0),
(1123, 'Thị xã Tuy Hoà', 0, 0),
(1124, ' Đồng Xuân', 0, 0),
(1125, ' Sông Cầu', 0, 0),
(1126, ' Tuy An', 0, 0),
(1127, ' Sơn Hoà', 0, 0),
(1128, ' Sông Hinh', 0, 0),
(1129, ' Đông Hoà', 0, 0),
(1130, ' Phú Hoà', 0, 0),
(1131, ' Tây Hoà', 0, 0),
(1132, 'Thành phố Buôn Ma Thuột', 0, 0),
(1133, ' Ea H Leo', 0, 0),
(1134, ' Krông Buk', 0, 0),
(1135, ' Krông Năng', 0, 0),
(1136, ' Ea Súp', 0, 0),
(1137, ' Cư M gar', 0, 0),
(1138, ' Krông Pắc', 0, 0),
(1139, ' Ea Kar', 0, 0),
(1140, ' M`Đrăk', 0, 0),
(1141, ' Krông Ana', 0, 0),
(1142, ' Krông Bông', 0, 0),
(1143, ' Lăk', 0, 0),
(1144, ' Buôn Đôn', 0, 0),
(1145, ' Cư Kuin', 0, 0),
(1146, 'Thành phố Nha Trang', 0, 0),
(1147, ' Vạn Ninh', 0, 0),
(1148, ' Ninh Hoà', 0, 0),
(1149, ' Diên Khánh', 0, 0),
(1150, ' Khánh Vĩnh', 0, 0),
(1151, 'Thị xã Cam Ranh', 0, 0),
(1152, ' Khánh Sơn', 0, 0),
(1153, ' Trường Sa', 0, 0),
(1154, ' Cam Lâm', 0, 0),
(1155, 'Thành phố Đà Lạt', 0, 0),
(1156, 'Thị xã. Bảo Lộc', 0, 0),
(1157, ' Đức Trọng', 0, 0),
(1158, ' Di Linh', 0, 0),
(1159, ' Đơn Dương', 0, 0),
(1160, ' Lạc Dương', 0, 0),
(1161, ' Đạ Huoai', 0, 0),
(1162, ' Đạ Tẻh', 0, 0),
(1163, ' Cát Tiên', 0, 0),
(1164, ' Lâm Hà', 0, 0),
(1165, ' Bảo Lâm', 0, 0),
(1166, ' Đam Rông', 0, 0),
(1167, 'Thị xã Đồng Xoài', 0, 0),
(1168, ' Đồng Phú', 0, 0),
(1169, ' Chơn Thành', 0, 0),
(1170, ' Bình Long', 0, 0),
(1171, ' Lộc Ninh', 0, 0),
(1172, ' Bù Đốp', 0, 0),
(1173, ' Phước Long', 0, 0),
(1174, ' Bù Đăng', 0, 0),
(1175, 'Thị xã Thủ Dầu Một', 0, 0),
(1176, ' Bến Cát', 0, 0),
(1177, ' Tân Uyên', 0, 0),
(1178, ' Thuận An', 0, 0),
(1179, ' Dĩ An', 0, 0),
(1180, ' Phú Giáo', 0, 0),
(1181, ' Dầu Tiếng', 0, 0),
(1182, 'Thành phố Phan Rang-Tháp Chàm', 0, 0),
(1183, ' Ninh Sơn', 0, 0),
(1184, ' Ninh Phước', 0, 0),
(1185, ' Bác Ái', 0, 0),
(1186, ' Thuận Bắc', 0, 0),
(1187, ' Ninh Hải', 0, 0),
(1188, 'Thị xã Tây Ninh', 0, 0),
(1189, ' Tân Biên', 0, 0),
(1190, ' Tân Châu', 0, 0),
(1191, ' Dương Minh Châu', 0, 0),
(1192, ' Châu Thành', 0, 0),
(1193, ' Hoà Thành', 0, 0),
(1194, ' Bến Cầu', 0, 0),
(1195, ' Gò Dầu', 0, 0),
(1196, ' Trảng Bàng', 0, 0),
(1197, 'Thành phố Phan Thiết', 0, 0),
(1198, ' Tuy Phong', 0, 0),
(1199, ' Bắc Bình', 0, 0),
(1200, ' Hàm Thuận Bắc', 0, 0),
(1201, ' Hàm Thuận Nam', 0, 0),
(1202, ' Hàm Tân', 0, 0),
(1203, ' Đức Linh', 0, 0),
(1204, ' Tánh Linh', 0, 0),
(1205, ' đảo Phú Quý', 0, 0),
(1206, 'Thị xã LaGi', 0, 0),
(1207, 'Thành phố Biên Hoà', 0, 0),
(1208, ' Vĩnh Cửu', 0, 0),
(1209, ' Tân Phú', 0, 0),
(1210, ' Định Quán', 0, 0),
(1211, ' Thống Nhất', 0, 0),
(1212, 'Thị xã Long Khánh', 0, 0),
(1213, ' Xuân Lộc', 0, 0),
(1214, ' Long Thành', 0, 0),
(1215, ' Nhơn Trạch', 0, 0),
(1216, ' Trảng Bom', 0, 0),
(1217, ' Cẩm Mỹ', 0, 0),
(1218, 'Thị xã Tân An', 0, 0),
(1219, ' Vĩnh Hưng', 0, 0),
(1220, ' Mộc Hoá', 0, 0),
(1221, ' Tân Thạnh', 0, 0),
(1222, ' Thạnh Hoá', 0, 0),
(1223, ' Đức Huệ', 0, 0),
(1224, ' Đức Hoà', 0, 0),
(1225, ' Bến Lức', 0, 0),
(1226, ' Thủ Thừa', 0, 0),
(1227, ' Châu Thành', 0, 0),
(1228, ' Tân Trụ', 0, 0),
(1229, ' Cần Đước', 0, 0),
(1230, ' Cần Giuộc', 0, 0),
(1231, ' Tân Hưng', 0, 0),
(1232, 'Thành phố Cao Lãnh', 0, 0),
(1233, 'Thị xã Sa Đéc', 0, 0),
(1234, ' Tân Hồng', 0, 0),
(1235, ' Hồng Ngự', 0, 0),
(1236, ' Tam Nông', 0, 0),
(1237, ' Thanh Bình', 0, 0),
(1238, ' Cao Lãnh', 0, 0),
(1239, ' Lấp Vò', 0, 0),
(1240, ' Tháp Mười', 0, 0),
(1241, ' Lai Vung', 0, 0),
(1242, ' Châu Thành', 0, 0),
(1243, 'Thành phố Long Xuyên', 0, 0),
(1245, ' An Phú', 0, 0),
(1246, ' Tân Châu', 0, 0),
(1247, ' Phú Tân', 0, 0),
(1248, ' Tịnh Biên', 0, 0),
(1249, ' Tri Tôn', 0, 0),
(1250, ' Châu Phú', 0, 0),
(1251, ' Chợ Mới', 0, 0),
(1252, ' Châu Thành', 0, 0),
(1253, ' Thoại Sơn', 0, 0),
(1254, 'Thành phố Vũng Tàu', 0, 0),
(1255, 'Thị xã Bà Rịa', 0, 0),
(1256, ' Xuyên Mộc', 0, 0),
(1257, ' Long Điền', 0, 0),
(1258, ' Côn Đảo', 0, 0),
(1259, ' Tân Thành', 0, 0),
(1260, ' Châu Đức', 0, 0),
(1261, ' Đất Đỏ', 0, 0),
(1262, 'Thành phố Mỹ Tho', 0, 0),
(1263, 'Thị xã Gò Công', 0, 0),
(1264, ' Cái Bè', 0, 0),
(1265, ' Cai Lậy', 0, 0),
(1266, ' Châu Thành', 0, 0),
(1267, ' Chợ Gạo', 0, 0),
(1268, ' Gò Công Tây', 0, 0),
(1269, ' Gò Công Đông', 0, 0),
(1270, ' Tân Phước', 0, 0),
(1271, 'Thành phố Rạch Giá', 0, 0),
(1272, 'Thị xã Hà Tiên', 0, 0),
(1273, ' Kiên Lương', 0, 0),
(1274, ' Hòn Đất', 0, 0),
(1275, ' Tân Hiệp', 0, 0),
(1276, ' Châu Thành', 0, 0),
(1277, ' Giồng Riềng', 0, 0),
(1278, ' Gò Quao', 0, 0),
(1279, ' An Biên', 0, 0),
(1280, ' An Minh', 0, 0),
(1281, ' Vĩnh Thuận', 0, 0),
(1282, ' Phú Quốc', 0, 0),
(1283, ' Kiên Hải', 0, 0),
(1284, ' U minh Thượng', 0, 0),
(1285, 'Quận Ninh Kiều', 0, 0),
(1286, 'Quận Bình Thuỷ', 0, 0),
(1287, 'Quận Cái Răng', 0, 0),
(1288, 'Quận Ô Môn', 0, 0),
(1289, ' Phong Điền', 0, 0),
(1290, ' Cờ Đỏ', 0, 0),
(1291, ' Vĩnh Thạnh', 0, 0),
(1292, ' Thốt Nốt', 0, 0),
(1293, 'Thị xã Bến Tre', 0, 0),
(1294, ' Châu Thành', 0, 0),
(1295, ' Chợ Lách', 0, 0),
(1296, ' Mỏ Cày', 0, 0),
(1297, ' Giồng Trôm', 0, 0),
(1298, ' Bình Đại', 0, 0),
(1299, ' Ba Tri', 0, 0),
(1300, ' Thạnh Phú', 0, 0),
(1301, 'Thị xã Vĩnh Long', 0, 0),
(1302, ' Long Hồ', 0, 0),
(1303, ' Mang Thít', 0, 0),
(1304, ' Bình Minh', 0, 0),
(1305, ' Tam Bình', 0, 0),
(1306, ' Trà Ôn', 0, 0),
(1307, ' Vũng Liêm', 0, 0),
(1308, ' Bình Tân', 0, 0),
(1309, 'Thị xã Trà Vinh', 0, 0),
(1310, ' Càng Long', 0, 0),
(1311, ' Cầu Kè', 0, 0),
(1312, ' Tiểu Cần', 0, 0),
(1313, ' Châu Thành', 0, 0),
(1314, ' Trà Cú', 0, 0),
(1315, ' Cầu Ngang', 0, 0),
(1316, ' Duyên Hải', 0, 0),
(1317, 'Thành phố Sóc Trăng', 0, 0),
(1318, ' Kế Sách', 0, 0),
(1319, ' Mỹ Tú', 0, 0),
(1320, ' Mỹ Xuyên', 0, 0),
(1321, ' Thạnh Trị', 0, 0),
(1322, ' Long Phú', 0, 0),
(1323, ' Vĩnh Châu', 0, 0),
(1324, ' Cù Lao Dung', 0, 0),
(1325, ' Ngã Năm', 0, 0),
(1326, ' Châu Thành', 0, 0),
(1327, ' Trần Đề', 0, 0),
(1328, 'Thị xã Bạc Liêu', 0, 0),
(1329, ' Vĩnh Lợi', 0, 0),
(1330, ' Hồng Dân', 0, 0),
(1331, ' Giá Rai', 0, 0),
(1332, ' Phước Long', 0, 0),
(1333, ' Đông Hải', 0, 0),
(1334, ' Hoà Bình', 0, 0),
(1335, 'Thành phố Cà Mau', 0, 0),
(1336, ' Thới Bình', 0, 0),
(1337, ' U Minh', 0, 0),
(1338, ' Trần Văn Thời', 0, 0),
(1339, ' Cái Nước', 0, 0),
(1340, ' Đầm Dơi', 0, 0),
(1341, ' Ngọc Hiển', 0, 0),
(1342, ' Năm Căn', 0, 0),
(1343, ' Phú Tân', 0, 0),
(1344, 'TP. Điện Biên Phủ', 0, 0),
(1345, 'Thị xã Mường Lay', 0, 0),
(1346, ' Điện Biên', 0, 0),
(1347, ' Tuần Giáo', 0, 0),
(1348, ' Mường Chà', 0, 0),
(1349, ' Tủa Chùa', 0, 0),
(1350, ' Điện Biên Đông', 0, 0),
(1351, ' Mường Nhé', 0, 0),
(1352, ' Mường Ảng', 0, 0),
(1353, 'Thị xã Gia Nghĩa', 0, 0),
(1354, ' Dăk RLấp', 0, 0),
(1355, ' Dăk Mil', 0, 0),
(1356, ' Cư Jút', 0, 0),
(1357, ' Dăk Song', 0, 0),
(1358, ' Krông Nô', 0, 0),
(1359, ' Dăk GLong', 0, 0),
(1360, ' Tuy Đức', 0, 0),
(1361, 'Thành phố Vị Thanh', 0, 0),
(1362, ' Vị Thuỷ', 0, 0),
(1363, ' Long Mỹ', 0, 0),
(1364, ' Phụng Hiệp', 0, 0),
(1365, ' Châu Thành', 0, 0),
(1366, ' Châu Thành A', 0, 0),
(1367, 'Thị xã Ngã Bảy', 0, 0),
(1373, 'Quận Ba Đình', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lt_doitac`
--

CREATE TABLE IF NOT EXISTS `lt_doitac` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `lt_doitac`
--

INSERT INTO `lt_doitac` (`id`, `title`, `images`, `link`, `status`, `ordering`) VALUES
(2, 'Leaderreal', 'Leaderreal2.png', 'http://leaderreal.com/', 1, 1),
(3, 'vnrealtor', 'realtor.png', 'vnrealtor.vn', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lt_duan`
--

CREATE TABLE IF NOT EXISTS `lt_duan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sumary` text NOT NULL,
  `tag` varchar(255) NOT NULL,
  `sonhatam` int(11) NOT NULL,
  `sophongngu` int(11) NOT NULL,
  `sonhadexe` int(11) NOT NULL,
  `kichthuoc` int(11) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `chitiet` text NOT NULL,
  `gia` varchar(255) NOT NULL,
  `donvi` varchar(255) NOT NULL,
  `add_date` datetime NOT NULL,
  `quan` int(11) NOT NULL,
  `id_loai` int(11) NOT NULL,
  `id_cate` int(11) NOT NULL,
  `is_hot` int(11) NOT NULL,
  `id_gia` int(11) NOT NULL,
  `lang` varchar(20) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `keyword` text NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `lt_duan`
--

INSERT INTO `lt_duan` (`id`, `title`, `sumary`, `tag`, `sonhatam`, `sophongngu`, `sonhadexe`, `kichthuoc`, `diachi`, `chitiet`, `gia`, `donvi`, `add_date`, `quan`, `id_loai`, `id_cate`, `is_hot`, `id_gia`, `lang`, `hoten`, `email`, `phone`, `address`, `avatar`, `description`, `keyword`, `status`, `ordering`) VALUES
(3, 'CĂN HỘ CAO CẤP NGAY TRUNG TÂM TP.HCM', 'Là nơi hội tụ các điểm kinh tế nóng tại TPHCM, các trung tâm thương mại, khu đô thị lớn như Vinhome Tân Cảng, TTTM - DV sau khi di dời bến xe Miền Đông năm 2017.... - Các trục đường giao thông được thực hiện theo hình thức (BT) do Vingro', 'can-ho-cao-cap-ngay-trung-tam-tp-hcm', 3, 2, 1, 64, 'Quận 1, Hồ Chí Minh', '<p><span style="color:rgb(0, 0, 0); font-family:tahoma">* Vị trí:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Là nơi hội tụ các điểm kinh tế nóng tại TPHCM, các trung tâm thương mại, khu đô thị lớn như Vinhome Tân Cảng, TTTM - DV sau khi di dời bến xe Miền Đông năm 2017...</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Các trục đường giao thông được thực hiện theo hình thức (BT) do Vingroup đầu tư như Đường Nguyễn Xí - Ung Văn KHiêm (30m), hiện trạng 17m...</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Tiện ích siêu cao cấp với 5 tầng thương mại và dịch vụ:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Cụm rạp chiếu phim hiện đại nhất tại Việt Nam CGV chiều cao 11,2m.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Khu ẩm thực đa dạng vùng lãnh thổ.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Phòng gym, spa.....</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ TTTM, khu mua sắm tổng hợp lớn nhất nhì Sài Gòn</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Khu vui chơi giải trí....</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Diện tích đa dạng từ 65m2 đến 86m2, nhà hoàn thiện cơ bản từ 2 PN - 3PN, giá công bố 1.6 tỷ/căn&nbsp;</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Ưu đãi vay vốn và nhiều quà tặng hấp dẫn.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cần thông tin cụ thể vui lòng liên hệ hotline PKD: 090.468.2139</span></p>\r\n', '1.6 tỷ', '', '2015-12-28 13:10:42', 687, 1, 3, 1, 6, 'vi', '', '', '', '', '', '', '', 1, 1),
(4, 'CĂN HỘ 5* LK PHỐ ĐI BỘ NGUYỄN HUỆ Q1', ' Thuộc lõi trung tâm 23.000m2 của thành phố HCM.. Cách phố đi bộ Nguyễn Huệ chỉ 3 phút... Cạnh công viên, bờ sông Bến Nghé trong xanh.. Cách Hầm Thủ Thiêm chỉ 2 phút... Cách Bến Bạch đằng bến Nhà Rồng chỉ 5 phút.. .', 'can-ho-5-lk-pho-di-bo-nguyen-hue-q1', 2, 3, 1, 20, 'Quận 1, Hồ Chí Minh', '<p><span style="color:rgb(0, 0, 0); font-family:tahoma">Vị trí vàng:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Thuộc lõi trung tâm 23.000m2 của thành phố HCM.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cách phố đi bộ&nbsp;</span><a href="http://batdongsan.com.vn/ban-can-ho-chung-cu-duong-nguyen-hue-53" style="font-family: Tahoma; font-size: 12px; margin: 0px; text-decoration: none; padding: 0px; color: rgb(5, 86, 153); line-height: 18px;">Nguyễn Huệ</a><span style="color:rgb(0, 0, 0); font-family:tahoma">&nbsp;chỉ 3 phút..</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cạnh công viên, bờ sông Bến Nghé trong xanh.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cách Hầm Thủ Thiêm chỉ 2 phút..</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cách Bến Bạch đằng bến Nhà Rồng chỉ 5 phút.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Đầu tư lý tưởng với lựa chọn sau:</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Maritime Bank cho vay lãi suất 0% năm đầu tiên.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Miễn 5 năm phí quản lý hoặc giảm 2% trên giá bán.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Tiện ích cao cấp bậc nhất.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- 3 hồ bơi. (hồ bơi Tràn).</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Trung tâm thương mại với khu cafe, nhà hàng, khu ẩm thực, khu trò chơi, rạp chiếu phim CGV.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Vườn treo trên cao và đài phun nước.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Gym, yoga, thư viện...</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Đơn vị uy tín hàng đầu:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Xây dựng Coteccons.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Giám sát Artelia (Pháp).</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Thiết kế Korn Architects (Đức).</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Quản lý CBRE (Mỹ).</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Ngân hàng Maritime Bank bảo lãnh.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Liên hệ để xem nhà và nhận báo giá chi tiết:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Hotline: 0934 574 175.</span></p>\r\n', '1.9 tỷ', '', '2015-12-28 13:10:23', 687, 1, 3, 1, 6, 'vi', '', '', '', '', '', '', '', 1, 2),
(6, 'Nhà ở khu Giảng Võ - 3.2 tỷ. Tìm đâu ra', 'Cơ đầu tư cũng như khu vực sống với một căn nhà 3 tỷ ở khu giảng võ thật không thể tìm ra đâu hơn, nhà nằm ở đường Vũ Thạnh là con phố có vị trí lại vô cùng đắc địa: Nối giữa phố Hào Nam và Giảng Võ, nhà xây với 5 tầng, mặt tiền 3m, diện tích 25m2 và với mức giá rất rẻ chỉ với 3,2 tỷ không thể tìm đâu ra hơn với căn nhà như vậy – LH: Trịnh Cường 0979358293 (Miễn trung gian)', 'nha-o-khu-giang-vo-3-2-ty-tim-dau-ra', 2, 1, 1, 56, 'Quận 1, Hồ Chí Minh', '<p><span style="color:rgb(0, 0, 0); font-family:tahoma">Cơ đầu tư cũng như khu vực sống với một căn nhà 3 tỷ ở khu giảng võ thật không thể tìm ra đâu hơn, nhà nằm ở đường Vũ Thạnh là con phố có vị trí lại vô cùng đắc địa: Nối giữa phố Hào Nam và Giảng Võ, nhà xây với 5 tầng, mặt tiền 3m, diện tích 25m2 và với mức giá rất rẻ chỉ với 3,2 tỷ không thể tìm đâu ra hơn với căn nhà như vậy – LH: Trịnh Cường 0979358293 (Miễn trung gian)</span></p>\r\n', '2 tỷ', '', '2015-12-28 13:10:07', 688, 1, 4, 1, 6, 'vi', 'Đinh thị thúy', 'support@martreal.com', '0903068802', '285/37 Cách Mạng Tháng 8  P.12, Q.10, TP.HCM', '', '', '', 1, 3),
(7, 'MỞ BÁN 12 CĂN SHOPHOUSE KHU ĐÔ THỊ BÊN SÔNG SÀI GÒN TẶNG NGAY 01 LƯỢNG VÀNG SJC ĐẾN 30/12', 'Mở bán 12 căn shophouse đẹp nhất của thành phố sinh thái Vạn Phúc Riverside City, khu dân cư đông đúc tại quốc lộ 13 cách cầu Bình Triệu 1 km. Thiết kế đồng bộ, hạ tầng hoàn thiện, môi trường sống xanh lý tưởng không có dự án nào tại TP. HCM có được.\r\nĐặc biệt khách hàng sẽ được tặng ngay 1 lượng vàng SJC khi mua đến hết ngày 30/12.', 'mo-ba-n-12-can-shophouse-khu-do-thi-ben-song-sa-i-go-n-ta-ng-ngay-01-luo-ng-va-ng-sjc-de-n-30-12', 2, 2, 2, 123, 'Quận 1, Hồ Chí Minh', '<p><span style="color:rgb(0, 0, 0); font-family:tahoma">Mở bán 12 căn shophouse đẹp nhất của thành phố sinh thái Vạn Phúc Riverside City, khu dân cư đông đúc tại quốc lộ 13 cách cầu Bình Triệu 1 km. Thiết kế đồng bộ, hạ tầng hoàn thiện, môi trường sống xanh lý tưởng không có dự án nào tại TP. HCM có được.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Đặc biệt khách hàng sẽ được tặng ngay 1 lượng vàng SJC khi mua đến hết ngày 30/12.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Vị trí:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Phường Hiệp Bình Phước, Quận Thủ Đức.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Mặt tiền giáp quốc lộ 13, ba mặt còn lại giáp sông Sài Gòn.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- 1 km đến đường&nbsp;</span><a href="http://batdongsan.com.vn/ban-nha-mat-pho-duong-pham-van-dong-71" style="font-family: Tahoma; font-size: 12px; margin: 0px; text-decoration: none; padding: 0px; color: rgb(5, 86, 153); line-height: 18px;">Phạm Văn Đồng</a><span style="color:rgb(0, 0, 0); font-family:tahoma">.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- 10 phút đến sân bay Tân Sơn Nhất.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- 15 phút di chuyển vào trung tâm Quận 1.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">** Tiện ích hiện đại và vượt trội bậc nhất TP. HCM:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Hồ sinh thái 16 ha cùng công viên bờ sông dài 3.4 km – lá phổi gạn lọc không khí trong lành cho toàn khu đô thị.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Công viên giải trí “khổng lồ” và hiện đại, quy mô 21.5ha phục vụ cư dân Vạn Phúc Riverside City:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Công trình nhạc nước hiện đại dựa trên ý tưởng từ khu nhạc nước nổi tiếng Bellagio Fountains (Las Vegas).</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Công viên nước với các trò chơi cảm giác mạnh.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Sân trượt băng nghệ thuật.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Quảng trường trung tâm, khu trung tâm thương mại và ẩm thực độc đáo.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Leo núi nhân tạo.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Khu chiếu phim 4D.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Bể bơi tràn hồ.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">• Đua thuyền kayak, chèo thuyền dạo quanh hồ.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Bệnh viện đa khoa và hệ thống trường học (mẫu giáo, cấp 1, 2, 3) chuẩn quốc tế.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Bến du thuyền đẳng cấp.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">*** Diện tích: 1 trệt+1 lửng+ 3 lầu+ 1 ST. Gía bán 4,87 tỷ/căn.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Thanh toán linh hoạt dài hạn, Ngân hàng hỗ trợ 70%. Trả 10 năm đến 15 năm. Tặng ngay vàng SCJ khi sở hữu nhà.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Giá bán thấp nhất từ sàn GD BĐS Đại Phúc.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Liên hệ: Phòng KD Đại Phúc 0934.02.4848.</span></p>\r\n', '2 tỷ', '', '2015-12-28 13:09:07', 687, 1, 4, 1, 6, 'vi', 'Đinh thị thúy', 'support@martreal.com', '0903068802', '285/37 Cách Mạng Tháng 8  P.12, Q.10, TP.HCM', '', '', '', 1, 4),
(8, 'CĂN HỘ CAO CẤP NGAY TRUNG TÂM TP.HCM', 'Là nơi hội tụ các điểm kinh tế nóng tại TPHCM, các trung tâm thương mại, khu đô thị lớn như Vinhome Tân Cảng, TTTM - DV sau khi di dời bến xe Miền Đông năm 2017.... - Các trục đường giao thông được thực hiện theo hình thức (BT) do Vingro', 'can-ho-cao-cap-ngay-trung-tam-tp-hcm', 3, 2, 1, 64, 'Quận 1, Hồ Chí Minh', '<p><span style="color:rgb(0, 0, 0); font-family:tahoma">* Vị trí:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Là nơi hội tụ các điểm kinh tế nóng tại TPHCM, các trung tâm thương mại, khu đô thị lớn như Vinhome Tân Cảng, TTTM - DV sau khi di dời bến xe Miền Đông năm 2017...</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">- Các trục đường giao thông được thực hiện theo hình thức (BT) do Vingroup đầu tư như Đường Nguyễn Xí - Ung Văn KHiêm (30m), hiện trạng 17m...</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Tiện ích siêu cao cấp với 5 tầng thương mại và dịch vụ:</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Cụm rạp chiếu phim hiện đại nhất tại Việt Nam CGV chiều cao 11,2m.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Khu ẩm thực đa dạng vùng lãnh thổ.</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Phòng gym, spa.....</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ TTTM, khu mua sắm tổng hợp lớn nhất nhì Sài Gòn</span><br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">+ Khu vui chơi giải trí....</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Diện tích đa dạng từ 65m2 đến 86m2, nhà hoàn thiện cơ bản từ 2 PN - 3PN, giá công bố 1.6 tỷ/căn&nbsp;</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">* Ưu đãi vay vốn và nhiều quà tặng hấp dẫn.</span><br />\r\n<br />\r\n<span style="color:rgb(0, 0, 0); font-family:tahoma">Cần thông tin cụ thể vui lòng liên hệ hotline PKD: 090.468.2139</span></p>\r\n', '1.6 tỷ', '', '2015-12-28 13:10:58', 687, 1, 3, 1, 6, 'vi', '', '', '', '', '', '', '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lt_gia`
--

CREATE TABLE IF NOT EXISTS `lt_gia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gia` varchar(255) NOT NULL,
  `lang` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `lt_gia`
--

INSERT INTO `lt_gia` (`id`, `gia`, `lang`, `status`, `ordering`) VALUES
(3, 'Thỏa Thuận', 'vi', 1, 1),
(4, '< 500 triệu', 'vi', 1, 2),
(5, '500 triệu - 1 tỷ', 'vi', 1, 3),
(6, '1 Tỷ - 10 Tỷ', 'vi', 1, 4),
(7, '> 10 Tỷ', 'vi', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `lt_lang`
--

CREATE TABLE IF NOT EXISTS `lt_lang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `lang` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `lt_lang`
--

INSERT INTO `lt_lang` (`id`, `title`, `lang`, `status`, `ordering`) VALUES
(1, 'Tiếng việt', 'vi', 1, 1),
(2, 'Tiếng anh', 'en', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `lt_loai`
--

CREATE TABLE IF NOT EXISTS `lt_loai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  `lang` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `lt_loai`
--

INSERT INTO `lt_loai` (`id`, `title`, `tag`, `status`, `ordering`, `lang`) VALUES
(1, 'Nhà ở', 'nha-o', 1, 1, 'vi'),
(2, 'House', 'house', 1, 2, 'en');

-- --------------------------------------------------------

--
-- Table structure for table `lt_photo_duan`
--

CREATE TABLE IF NOT EXISTS `lt_photo_duan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_duan` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=78 ;

--
-- Dumping data for table `lt_photo_duan`
--

INSERT INTO `lt_photo_duan` (`id`, `id_duan`, `images`, `ordering`) VALUES
(62, 7, '777-NDP7959-Wollongong-Illawarra3.jpg', 0),
(63, 7, '804-NDP7959-Wollongong-Illawarra2.jpg', 1),
(64, 7, '822-NDP7959-Wollongong-Illawarra1.jpg', 2),
(65, 7, '831-NDP7959-Wollongong-Illawarra2.jpg', 3),
(66, 7, '840-NDP7959-Wollongong-Illawarra3.jpg', 4),
(67, 6, '20151114140651-3b1f4.jpg', 0),
(68, 6, '777-NDP7959-Wollongong-Illawarra5.jpg', 1),
(69, 4, '822-NDP7959-Wollongong-Illawarra3.jpg', 0),
(70, 4, '804-NDP7959-Wollongong-Illawarra4.jpg', 1),
(71, 4, '840-NDP7959-Wollongong-Illawarra4.jpg', 2),
(72, 3, '840-NDP7959-Wollongong-Illawarra5.jpg', 0),
(73, 3, '20151114140648-01263.jpg', 1),
(74, 3, '804-NDP7959-Wollongong-Illawarra5.jpg', 2),
(75, 8, '804-NDP7959-Wollongong-Illawarra6.jpg', 0),
(76, 8, '822-NDP7959-Wollongong-Illawarra4.jpg', 1),
(77, 8, '831-NDP7959-Wollongong-Illawarra4.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lt_tuvan`
--

CREATE TABLE IF NOT EXISTS `lt_tuvan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `lang` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `ordering` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `lt_tuvan`
--

INSERT INTO `lt_tuvan` (`id`, `title`, `detail`, `lang`, `status`, `ordering`) VALUES
(1, 'Tư vấn', '<p>Thị trường bất động sản đang tốt dần lên, kèm theo đó là sự cạnh tranh trong anh em sale ngày càng cao. Để khai thác được một khách hàng “tiềm năng” thường chúng ta phải đổ khá nhiều mô hôi công sức và tiền bạc. Tuy nhiên, có khách hàng là một chuyện nhưng bán được cho khách hàng đó hay không là một chuyện khác. Mấu chốt ở đây là kĩ năng tư vấn của bạn, nếu bạn tư vấn tốt thì dù có ít khách bạn vẫn có thể sống ổn.</p>\r\n\r\n<blockquote>\r\n<h3 style="color:rgb(51, 51, 51); font-style:inherit"><strong>Có thể bạn quan tâm</strong></h3>\r\n\r\n<p>Bài viết để có nhiều khách hàng quan tâm và gọi khi nội dung có chiều sâu cũng như được phân tích kĩ lưỡng . Bạn có thể xem ngày bài viết về dự án Melosa Garden của Khang Điền để nắm được thông tin –&nbsp;<em><a href="http://www.nhatpham.net/ban-du-an-dat-nen/du-an-melosa-garden-quan-9-nen-mua-o-hay-dau-tu-tot.html" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;" target="_blank"><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>MELOSA GARDEN</strong></span></a></em></p>\r\n\r\n<p>Hoặc mô típ viết bài theo chia sẻ cảm xúc về một dự án ví dụ như&nbsp;<strong>biệt thự Lucasta Khang Điền</strong>&nbsp;–&nbsp;<em><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><a href="http://www.nhatpham.net/ban-du-an-dat-nen/du-an-biet-thu-lucasta-quan-9-dem-lai-dieu-gi-cho-ban.html" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;" target="_blank"><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>BIET THU LUCASTA</strong></span></a></span></em></p>\r\n\r\n<p>&nbsp;</p>\r\n</blockquote>\r\n\r\n<div class="wp-caption aligncenter" id="attachment_2146" style="margin: auto; padding: 8px; border: 0px; font-stretch: inherit; line-height: 21px; font-family: Helvetica, Arial, sans-serif; vertical-align: baseline; max-width: 100%; text-align: center; color: rgb(84, 84, 84); width: 510px; background-image: url(&quot;img/dot.png&quot;); background-attachment: scroll; background-size: initial; background-origin: initial; background-clip: initial; background-position: 0px 0px; background-repeat: repeat;"><a href="http://www.nhatpham.net/wp-content/uploads/2015/08/5-cach-tang-doanh-thu-nam-toi.jpg" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;"><img alt="Tư vấn đúng cách kiếm tiền nhiều hơn" class="size-full wp-image-2146" src="http://www.nhatpham.net/wp-content/uploads/2015/08/5-cach-tang-doanh-thu-nam-toi.jpg" style="border:0px; font-family:inherit; font-size:inherit; font-stretch:inherit; font-style:inherit; font-variant:inherit; font-weight:inherit; height:auto; line-height:inherit; margin:0px; max-width:100%; padding:0px; vertical-align:baseline; width:500px" /></a>\r\n\r\n<p>Tư vấn đúng cách kiếm tiền nhiều hơn</p>\r\n</div>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Cách tư vấn thì có khá nhiều, nhưng trong nội dung bài viết này Nhật Phạm sẽ chia sẽ lại cách mà Nhật Phạm đã và đang thực hiện, đó là “bán hàng mà không bán hàng”.Bán hàng mà không bán hàng, nghe có vẻ không logic nhưng thật ra rất logic. Trong kinh doanh bất động sản có 3 level sale Nhật Phạm thường thấy :</p>\r\n\r\n<p>1./ Bán hàng : Nhiều nhất<br />\r\n2./ Bán tư vấn : Có nhưng không nhiều<br />\r\n3./ Bán giải pháp : Khá ít, dành cho các PRO</p>\r\n\r\n<p>Theo Nhật Phạm “bán hàng mà không bán hàng” là level giữa của bán tư vấn và bán giải pháp. Bán hàng mà không bán hàng phải đảm bảo được yếu tố bán được hàng và giải quyết được nhu cầu của khách.<br />\r\nDưới đây là qui trình để bạn có thể nâng cấp mình lên trong giới sale bất động sản. Nhật Phạm đã trải nghiệm và rất ưa thích cách tư vấn này.</p>\r\n\r\n<p><em><strong>1./ Chuẩn bị cho bán hàng mà không bán hàng</strong></em></p>\r\n\r\n<p>_ Chuẩn bị lượng kiến thức thị trường, qui hoạch cần thiết của khu vực và khu giáp ranh.</p>\r\n\r\n<p>_ Chuẩn bị kịch bản tư vấn kĩ lưỡng dành riêng cho 2 đối tượng khách hàng khác nhau : Mua để ở và để đầu tư. Kịch bản này cần linh hoạt cho phù hợp với nhu cầu và tài chính của khách hàng mà bạn đang tư vấn.</p>\r\n\r\n<p><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>_ Xây dựng độ tin cậy ngay từ đầu qua các kênh khai thác khách hàng như : Website, email…</strong></span></p>\r\n\r\n<p><em><strong>2./ Tư vấn khách hàng</strong></em></p>\r\n\r\n<p>Khi tiếp xúc ban đầu với khách hàng thường các bạn sale của ta tập trung vào tư vấn sản phẩm và hướng ngay nhu cầu của khách phù hợp với sản phẩm mình đang bán. Điều này khiến cho vai trò của bạn trong mắt khách hàng ngay lập tức bị hạ xuống, chỉ là một nhân viên bán hàng. Điều này khiến cho các công đoạn chăm sóc bán hàng sau của bạn gặp khá nhiều khó khăn, như hẹn khách, chốt cọc…</p>\r\n', 'en', 1, 0),
(2, 'Tư vấn', '<p>Thị trường bất động sản đang tốt dần lên, kèm theo đó là sự cạnh tranh trong anh em sale ngày càng cao. Để khai thác được một khách hàng “tiềm năng” thường chúng ta phải đổ khá nhiều mô hôi công sức và tiền bạc. Tuy nhiên, có khách hàng là một chuyện nhưng bán được cho khách hàng đó hay không là một chuyện khác. Mấu chốt ở đây là kĩ năng tư vấn của bạn, nếu bạn tư vấn tốt thì dù có ít khách bạn vẫn có thể sống ổn.</p>\r\n\r\n<blockquote>\r\n<h3 style="color:rgb(51, 51, 51); font-style:inherit"><strong>Có thể bạn quan tâm</strong></h3>\r\n\r\n<p>Bài viết để có nhiều khách hàng quan tâm và gọi khi nội dung có chiều sâu cũng như được phân tích kĩ lưỡng . Bạn có thể xem ngày bài viết về dự án Melosa Garden của Khang Điền để nắm được thông tin –&nbsp;<em><a href="http://www.nhatpham.net/ban-du-an-dat-nen/du-an-melosa-garden-quan-9-nen-mua-o-hay-dau-tu-tot.html" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;" target="_blank"><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>MELOSA GARDEN</strong></span></a></em></p>\r\n\r\n<p>Hoặc mô típ viết bài theo chia sẻ cảm xúc về một dự án ví dụ như&nbsp;<strong>biệt thự Lucasta Khang Điền</strong>&nbsp;–&nbsp;<em><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><a href="http://www.nhatpham.net/ban-du-an-dat-nen/du-an-biet-thu-lucasta-quan-9-dem-lai-dieu-gi-cho-ban.html" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;" target="_blank"><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>BIET THU LUCASTA</strong></span></a></span></em></p>\r\n\r\n<p>&nbsp;</p>\r\n</blockquote>\r\n\r\n<div class="wp-caption aligncenter" id="attachment_2146" style="margin: auto; padding: 8px; border: 0px; font-stretch: inherit; line-height: 21px; font-family: Helvetica, Arial, sans-serif; vertical-align: baseline; max-width: 100%; text-align: center; color: rgb(84, 84, 84); width: 510px; background-image: url(&quot;img/dot.png&quot;); background-attachment: scroll; background-size: initial; background-origin: initial; background-clip: initial; background-position: 0px 0px; background-repeat: repeat;"><a href="http://www.nhatpham.net/wp-content/uploads/2015/08/5-cach-tang-doanh-thu-nam-toi.jpg" style="margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline; color: rgb(0, 0, 0); text-decoration: none; outline: 0px;"><img alt="Tư vấn đúng cách kiếm tiền nhiều hơn" class="size-full wp-image-2146" src="http://www.nhatpham.net/wp-content/uploads/2015/08/5-cach-tang-doanh-thu-nam-toi.jpg" style="border:0px; font-family:inherit; font-size:inherit; font-stretch:inherit; font-style:inherit; font-variant:inherit; font-weight:inherit; height:auto; line-height:inherit; margin:0px; max-width:100%; padding:0px; vertical-align:baseline; width:500px" /></a>\r\n\r\n<p>Tư vấn đúng cách kiếm tiền nhiều hơn</p>\r\n</div>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Cách tư vấn thì có khá nhiều, nhưng trong nội dung bài viết này Nhật Phạm sẽ chia sẽ lại cách mà Nhật Phạm đã và đang thực hiện, đó là “bán hàng mà không bán hàng”.Bán hàng mà không bán hàng, nghe có vẻ không logic nhưng thật ra rất logic. Trong kinh doanh bất động sản có 3 level sale Nhật Phạm thường thấy :</p>\r\n\r\n<p>1./ Bán hàng : Nhiều nhất<br />\r\n2./ Bán tư vấn : Có nhưng không nhiều<br />\r\n3./ Bán giải pháp : Khá ít, dành cho các PRO</p>\r\n\r\n<p>Theo Nhật Phạm “bán hàng mà không bán hàng” là level giữa của bán tư vấn và bán giải pháp. Bán hàng mà không bán hàng phải đảm bảo được yếu tố bán được hàng và giải quyết được nhu cầu của khách.<br />\r\nDưới đây là qui trình để bạn có thể nâng cấp mình lên trong giới sale bất động sản. Nhật Phạm đã trải nghiệm và rất ưa thích cách tư vấn này.</p>\r\n\r\n<p><em><strong>1./ Chuẩn bị cho bán hàng mà không bán hàng</strong></em></p>\r\n\r\n<p>_ Chuẩn bị lượng kiến thức thị trường, qui hoạch cần thiết của khu vực và khu giáp ranh.</p>\r\n\r\n<p>_ Chuẩn bị kịch bản tư vấn kĩ lưỡng dành riêng cho 2 đối tượng khách hàng khác nhau : Mua để ở và để đầu tư. Kịch bản này cần linh hoạt cho phù hợp với nhu cầu và tài chính của khách hàng mà bạn đang tư vấn.</p>\r\n\r\n<p><span style="color:rgb(0, 128, 0); font-family:inherit; font-size:inherit"><strong>_ Xây dựng độ tin cậy ngay từ đầu qua các kênh khai thác khách hàng như : Website, email…</strong></span></p>\r\n\r\n<p><em><strong>2./ Tư vấn khách hàng</strong></em></p>\r\n\r\n<p>Khi tiếp xúc ban đầu với khách hàng thường các bạn sale của ta tập trung vào tư vấn sản phẩm và hướng ngay nhu cầu của khách phù hợp với sản phẩm mình đang bán. Điều này khiến cho vai trò của bạn trong mắt khách hàng ngay lập tức bị hạ xuống, chỉ là một nhân viên bán hàng. Điều này khiến cho các công đoạn chăm sóc bán hàng sau của bạn gặp khá nhiều khó khăn, như hẹn khách, chốt cọc…</p>\r\n', 'vi', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lt_user`
--

CREATE TABLE IF NOT EXISTS `lt_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `yahoo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` int(11) NOT NULL,
  `add_date` datetime NOT NULL,
  `status` tinyint(4) NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `level` tinyint(4) NOT NULL,
  `ordering` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=97 ;

--
-- Dumping data for table `lt_user`
--

INSERT INTO `lt_user` (`id`, `email`, `username`, `password`, `name`, `avatar`, `sex`, `phone`, `yahoo`, `birthday`, `add_date`, `status`, `is_admin`, `level`, `ordering`) VALUES
(91, 'linhtinh.it.92@gmail.com', 'linhtinh', 'e042f11a6889c81bf5e743c5a0cb482b', 'saigondomain', '1503248_597590827020674_6424897997762626480_n.jpg', 0, '', '', 0, '2015-07-10 10:49:40', 1, 1, 0, 0),
(95, '', 'seo', '20abaf9d15742fcaca2a79b389919b8c', 'seo', '3174.jpg', 0, '', '', 0, '0000-00-00 00:00:00', 1, 1, 0, 0),
(96, '', 'saigondomain', 'e9bc7ba1b982c1e941ecb309a44b140f', 'saigondomain', 'logo.png', 0, '', '', 0, '0000-00-00 00:00:00', 1, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lt_yeucau`
--

CREATE TABLE IF NOT EXISTS `lt_yeucau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `add_date` datetime NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `lt_yeucau`
--

INSERT INTO `lt_yeucau` (`id`, `name`, `email`, `phone`, `message`, `add_date`, `status`) VALUES
(2, 'Nguyễn Vũ Linh', 'support@saigondomain.com', '0933910461', 'sssss', '0000-00-00 00:00:00', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
