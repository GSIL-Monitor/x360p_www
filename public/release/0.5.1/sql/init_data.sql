-- 数据初始化
-- 银行账号信息 创建一个初始银行账号
-- INSERT INTO `x360p_accounting_account` VALUES (1,0,'前台收费【现金】',0,'',1,1,0,1.00,0.00,'现金【人民币】',0,NULL,0,1511489346,NULL,NULL);

-- 校区信息，创建一个默认校区
-- INSERT INTO `x360p_branch` VALUES (1,0,'默认校区','默认','1','0755-82602960',0,19,291,3062,3062,'学校地址',0,0,'',1498124456,0,0,0,0,NULL,NULL);
-- 部门信息，创建一个默认部门校区部门
-- INSERT INTO `x360p_department` VALUES ('1', '0', '0', '1', '默认校区', '1', '1511578454', '1', '1511578454', '0', NULL, '0');
-- 校区员工中间表
-- INSERT INTO `x360p_branch_employee` VALUES (1,0,1,1,0,0,NULL,0,0,NULL);


-- 默认字典数据

INSERT INTO `x360p_dictionary` VALUES 
(1,0,0,'sale_role','销售角色','销售角色','',0,1,0,0,NULL,0,0,NULL),
(2,0,0,'jobtitle','部门职位','部门职位','',0,1,0,0,NULL,0,0,NULL),
(3,0,0,'joblevel','职位级别','职位级别','',0,1,0,0,NULL,0,0,NULL),
(4,0,0,'product_level','课程等级','产品等级','',0,1,0,0,NULL,0,0,NULL),
(5,0,0,'from','招生来源','招生来源','',0,1,0,0,NULL,0,0,NULL),
(6,0,0,'followup','跟进方式','跟进方式','',0,1,0,0,NULL,0,0,NULL),
(7,0,0,'promise','诺到类型','诺到类型','',0,1,0,0,NULL,0,0,NULL),
(8,0,0,'customer_status','客户跟进状态','客户跟进状态','',0,1,0,0,NULL,0,0,NULL),
(9,0,0,'leave_reason','请假原因','请假原因','',0,1,0,0,NULL,0,0,NULL),
(10,0,0,'comm_type','沟通方式','沟通方式','',0,1,0,0,NULL,0,0,NULL),
(11,0,0,'grade','年级','课程所属年级','',0,1,0,0,NULL,0,0,NULL),
(12,0,0,'season','期段','班级课程所属期段','',0,1,0,0,NULL,0,0,NULL),
(13,0,0,'timelong','课时长','课时长(分钟)','',0,1,0,0,NULL,0,0,NULL),
(14,0,0,'cutamount','结转退费扣款项','结转退费扣款项','',0,1,0,0,NULL,0,0,NULL),
(101,0,1,'签单人','签单人','系统内置','',0,1,1508255015,18,1508929710,0,0,NULL),
(102,0,1,'电话招生员','电话招生员','','',0,1,1508255053,18,1509007388,0,0,NULL),
(103,0,1,'传单宣传员','传单宣传员','','',0,1,0,0,NULL,0,0,NULL),
(104,0,1,'客户接待员','客户接待员','','',0,1,0,0,1508920532,0,0,NULL),
(105,0,4,'常规课','常规课','常规课','',0,1,1508917664,18,1508917664,0,0,NULL),
(106,0,4,'体验课','体验课','体验课','',0,1,1508917709,18,1508917709,0,0,NULL),
(107,0,5,'主动上门','主动上门','主动上门','',0,1,1508918008,18,1508918008,0,0,NULL),
(108,0,5,'户外广告','户外广告','户外广告','',0,1,1508918340,18,1508918340,0,0,NULL),
(109,0,5,'招生活动','招生活动','招生活动','',0,1,1508918360,18,1508918360,0,0,NULL),
(110,0,5,'转介绍','转介绍','转介绍','',0,1,1508918385,18,1508918385,0,0,NULL),
(111,0,7,'参访校区','参访校区','参访校区','',0,1,1508918581,18,1508918581,0,0,NULL),
(112,0,7,'了解课程','了解课程','了解课程','',0,1,1508918591,18,1508918591,0,0,NULL),
(113,0,8,'转化成功','转化成功','转化成功','',0,1,1508918674,18,1508918674,0,0,NULL),
(114,0,8,'未上门','未上门','未上门','',0,1,1508918739,18,1508918739,0,0,NULL),
(115,0,8,'已试听','已试听','已试听','',0,1,1508918752,18,1508918752,0,0,NULL),
(116,0,9,'病假','病假','病假','',0,1,1508918772,18,1508918772,0,0,NULL),
(117,0,9,'事假','事假','事假','',0,1,1508918781,18,1508918781,0,0,NULL),
(118,0,10,'电话','电话','','',0,1,1508918809,18,1508918809,0,0,NULL),
(119,0,10,'微信','微信','','',0,1,1508918815,18,1508918815,0,0,NULL),
(120,0,10,'QQ','QQ','','',0,1,1508918829,18,1508918829,0,0,NULL),
(121,0,10,'面谈','面谈','','',0,1,1508918837,18,1508918837,0,0,NULL),
(122,0,6,'电话','电话','','',0,1,1508918934,18,1508918934,0,0,NULL),
(123,0,6,'微信','微信','','',0,1,1508918940,18,1508918940,0,0,NULL),
(124,0,6,'短信','短信','','',0,1,1508918947,18,1508918947,0,0,NULL),
(125,0,6,'QQ','QQ','','',0,1,1508918960,18,1508918960,0,0,NULL),
(126,0,2,'课程顾问','课程顾问','','',0,1,1508919046,18,1508919046,0,0,NULL),
(127,0,2,'学管师','学管师','','',0,1,1508919056,18,1508919056,0,0,NULL),
(128,0,2,'部门主管','部门主管','','',0,1,1508919077,18,1508919077,0,0,NULL),
(129,0,11,'1','小1','','',0,1,1508919282,18,1508919282,0,0,NULL),
(130,0,11,'2','小2','','',0,1,1508919288,18,1508919288,0,0,NULL),
(131,0,11,'3','小3','','',0,1,1508919294,18,1508919294,0,0,NULL),
(134,0,11,'4','小4','','',0,1,1508919299,18,1508919299,0,0,NULL),
(135,0,11,'5','小5','','',0,1,1508919305,18,1508919305,0,0,NULL),
(136,0,11,'6','小6','','',0,1,1508919312,18,1508919312,0,0,NULL),
(137,0,11,'7','初一','','',0,1,1508919318,18,1508919331,0,0,NULL),
(138,0,11,'8','初二','','',0,1,1508919342,18,1508919342,0,0,NULL),
(139,0,11,'9','初三','','',0,1,1508919352,18,1508919352,0,0,NULL),
(140,0,11,'10','高一','','',0,1,1508919361,18,1508919361,0,0,NULL),
(141,0,11,'11','高二','','',0,1,1508919369,18,1508919369,0,0,NULL),
(142,0,11,'12','高三','','',0,1,1508919377,18,1508919377,0,0,NULL),
(143,0,12,'H','寒假','H','',0,1,1508919920,18,1508919920,0,0,NULL),
(144,0,12,'C','春季','C','',0,1,1508919930,18,1508919938,0,0,NULL),
(145,0,12,'S','暑假','S','',0,1,1508919946,18,1508919946,0,0,NULL),
(146,0,12,'Q','秋季','Q','',0,1,1508919955,18,1508919955,0,0,NULL),
(147,0,13,'30','30分钟','半小时','',0,1,0,0,NULL,0,0,NULL),
(148,0,13,'45','45分钟','45分钟','',0,1,0,0,NULL,0,0,NULL),
(149,0,13,'60','60分钟','1小时','',0,1,0,0,NULL,0,0,NULL),
(150,0,13,'90','90分钟','1个半小时','',0,1,0,0,NULL,0,0,NULL),
(151,0,13,'120','120分钟','2个小时','',0,1,0,0,NULL,0,0,NULL),
(152,0,13,'150','150分钟','2个半小时','',0,1,0,0,NULL,0,0,NULL),
(153,0,13,'180','180分钟','3个小时','',0,1,0,0,NULL,0,0,NULL),
(154,0,3,'','初级','初级','',0,1,0,0,NULL,0,0,NULL),
(155,0,3,'','中级','中级','',0,1,0,0,NULL,0,0,NULL),
(156,0,3,'','高级','高级','',0,1,0,0,NULL,0,0,NULL);

-- 默认员工表
--
-- Dumping data for table `x360p_employee`
--


-- INSERT INTO `x360p_employee_profile` VALUES (1,0,1,'',NULL,NULL,NULL,1507286229,0,1507286229,0,NULL,0);

-- 默认仓库表
-- INSERT INTO `x360p_material_store` VALUES (1,0,1,'默认仓库','',1510362612,18,1510362612,0,0,NULL);

-- 默认角色表

INSERT INTO `x360p_role` VALUES 
(1,0,'老师','教师老师','','',1,1498095552,1,1504668175,NULL,0,0,NULL,NULL),
(2,0,'助教','助教','','',1,1498095552,1,1504668175,NULL,0,0,NULL,NULL),
(3,0,'校长','校长','','',1,1498098725,1,1504668445,NULL,0,0,NULL,NULL),
(4,0,'学管师','学管师','',NULL,1,1498290947,1,1498290947,NULL,0,0,NULL,NULL),
(5,0,'前台','前台','',NULL,0,1498290965,1,1498290965,NULL,0,0,NULL,NULL),
(6,0,'财务','财务','',NULL,0,1498290995,1,1498290995,NULL,0,0,NULL,NULL),
(7,0,'招生','招生专员','',NULL,0,1498291022,1,1498291022,NULL,0,0,NULL,NULL),
(8,0,'市场','市场专员','',NULL,0,1498291051,1,1498291051,NULL,0,0,NULL,NULL),
(10,0,'系统管理员','系统管理员拥有最高权限','',NULL,0,1498291051,1,1498291051,NULL,0,0,NULL,NULL)
;

-- 默认期段日期表
INSERT INTO `x360p_season_date` VALUES 
(1,0,0,0,'H',99990121,99990219,0,0,NULL,0,0,0),
(2,0,0,0,'C',99990225,99990706,0,0,NULL,0,0,0),
(3,0,0,0,'S',99990713,99990831,0,0,NULL,0,0,0),
(4,0,0,0,'Q',99990901,99990110,0,0,NULL,0,0,0);






