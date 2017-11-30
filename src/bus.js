import Vue from 'vue';

export default new Vue({
    data() {
        return {
            menuOpenFlag: false,
            navshopList: [{
                shoproute: '/',
                shopname: '锤子科技商城'
            },{
                shoproute: 'index',
                shopname: '坚果 Pro 2'
            },{
                shoproute: 'indexindex',
                shopname: '坚果 Pro'
            },{
                shoproute: 'index',
                shopname: 'Smartisan OS'
            },{
                shoproute: 'index',
                shopname: '应用下载'
            },{
                shoproute: 'index',
                shopname: '锤子科技论坛'
            }],
            bottomTabLists: [{
                base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc5QTc0ODZBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc5QTc0ODVBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Yzc4Y2EzZWMtZTFkNC00MTNlLTgyYzAtM2RjM2VhZmVkN2Y1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',
                name: '首页',
                route: '/'
            },{
                base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc5NTczQUZBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc5NTczQUVBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Yzc4Y2EzZWMtZTFkNC00MTNlLTgyYzAtM2RjM2VhZmVkN2Y1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+esfI9wAABIdJREFUeNrsm0tO21AUhp0QHg6JEyHx2EDFFjquCgsoM0YdNoOKQalUtXPUSoxZQCvBHmgX0CU06h5w4jiB8Oz/G1+TOLaxDajk+hzJJIR7jc7Hudxz7u9Turm5McTyW1kQCEABKAAFoJgAFIACsJBW4ZeDgwPDsqwXzWbz68LCwuuZmRmrVCqNDWTCfXV15Zydnf3qdDqfHMf5e3l5aRQ5Ed/Z2bkFCHjrq6urv/HarFQqRrkcHZjX19cWoL2Zn59/hW9fdrvdNiFOhDXmz83NeVf4DzHtxoA5Pz/3riACEXl7hEeHE9e7D4Zjh8Ph3mAw2AoD5JharVbFPffr9fo2ormhC0R/FXZ7vd4RVuEHfDTwAHLZMvJSr3uMxZzN2dlZ4/T0dOxnBAx435aXl1umacZG87QaVmEDvr/DW0bOe887/s/L4ijHYk4tKrIIEJH3Vkd4ynf6Rh+DJcwPsy6zuDn8HBFaA2BtNw/6Rh+fLI3RbeNI8lHywOeYSBchN1Q+lvM6HDcHuxS3epevupryMQDICiOLw0mQLi4uDORJP5je6AiRPtE3+Pg92IVZnvkVRqqbMHnGnGNAnNgwCBBJ5i4+LyGh3sZuZemUSMN3x3XdQ/j4MQCIkuwLkkOWZ00mxwmlnIqwDueocmbUCLXf7w8wrmXbdkvDRNpjMFbKAcgf1raIqj0kiRvIc+oxhwk9hO9PwPuMOW3CijJ+zjAPVynansaQJkKyzdr2nsMEb/lyPCGJJOoD9Ne2EXWyIpYCYBEqh6lKpAWgmACU/4ESgQJQLO0S9t4ggWYZxytuSTNfZBnDS3LGEYC+0pZZFybIolcjE7rwPYcJFqAFujDLv6hIpGbAP0rSvbQ6TFC68H3HWYTBMUm6MOEtLi5Wl5aW9nmcpaMu7Lru0cnJybguzGhJaxxrmuZmlJbMyAM8rXVh+BXowhV/A7GyyJAcS12Yr+HoUrpwtVrVUhemz/TN14VvhfU8SyxujhLddYQX9vHJ8kDRhcWy18JZo0bNCc9T3xelvhZdOGcu+GBdGJfowsaILuxXGKluQki4yXFUFYIE27Bte5er2H/A0tIskXYA7xA+TurCcDSTLsz3UWOoCwNuC6VeS8dHfOk3AyUA6DhOoAsjSdwAwEhdGHB6KN88XRhz2nEnMpQ8Ma44u7DShRE5W1mOs0QXHjkPVLpwlqcJRAqQRFoACkABKJuIbAYSgQJw+pewUtLkAcscAFl9NBoNTxc2TTNRF0ai7enCKOdEF1YAAW99bW0ttS7sP5Du6cJRBwoqmnnpqAvH9gtn0YV58EBdOAyQ8NgvTF1Y537hMV2Yy/axdeGVlZVC6MIP6heOmiP9whluFJWES7/wI5jowmL/txKRfuEHQPK7nrTXheljAJAtnHn6haMgMi90XVd7XRg+3unCw+EwV78wX8MbBuU+JJna9wvDxztd2LZtTxdOUcp5EeY4TodzovqFOQa/wOsXxr207Rce04Wz9gsDXmK/sArzIvQLl+RI6hmmMQJQTAAKQAEoAMUEoAB89vZPgAEAP8WGoOSbiD4AAAAASUVORK5CYII=',
                name: '分类',
                route: '/2'
            },{
                base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc5NTczQjNBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc5NTczQjJBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Yzc4Y2EzZWMtZTFkNC00MTNlLTgyYzAtM2RjM2VhZmVkN2Y1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',
                name: '购物车',
                route: '/3'
            },{
                base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc5QTc0N0VBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc5QTc0N0RBQ0ZDMTFFNzk2OERBQzVDNkRDREU0OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNzhjYTNlYy1lMWQ0LTQxM2UtODJjMC0zZGMzZWFmZWQ3ZjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Yzc4Y2EzZWMtZTFkNC00MTNlLTgyYzAtM2RjM2VhZmVkN2Y1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',
                name: '个人中心',
                route: '/4'
            }],
            countrynamelist: [   
                ["AO", "安哥拉"],   
                ["AF", "阿富汗"],   
                ["AL", "阿尔巴尼亚"],   
                ["DZ", "阿尔及利亚"],   
                ["AD", "安道尔共和国"],   
                ["AI", "安圭拉岛"],   
                ["AG", "安提瓜和巴布达"],   
                ["AR", "阿根廷"],   
                ["AM", "亚美尼亚"],   
                ["AU", "澳大利亚"],   
                ["AT", "奥地利"],   
                ["AZ", "阿塞拜疆"],   
                ["BS", "巴哈马"],   
                ["BH", "巴林"],   
                ["BD", "孟加拉国"],   
                ["BB", "巴巴多斯"],   
                ["BY", "白俄罗斯"],   
                ["BE", "比利时"],   
                ["BZ", "伯利兹"],   
                ["BJ", "贝宁"],   
                ["BM", "百慕大群岛"],   
                ["BO", "玻利维亚"],   
                ["BW", "博茨瓦纳"],   
                ["BR", "巴西"],   
                ["BN", "文莱"],   
                ["BG", "保加利亚"],   
                ["BF", "布基纳法索"],   
                ["MM", "缅甸"],   
                ["BI", "布隆迪"],   
                ["CM", "喀麦隆"],   
                ["CA", "加拿大"],   
                ["CF", "中非共和国"],   
                ["TD", "乍得"],   
                ["CL", "智利"],   
                ["CN", "中国"],   
                ["CO", "哥伦比亚"],   
                ["CG", "刚果"],   
                ["CK", "库克群岛"],   
                ["CR", "哥斯达黎加"],   
                ["CU", "古巴"],   
                ["CY", "塞浦路斯"],   
                ["CZ", "捷克"],   
                ["DK", "丹麦"],   
                ["DJ", "吉布提"],   
                ["DO", "多米尼加共和国"],   
                ["EC", "厄瓜多尔"],   
                ["EG", "埃及"],   
                ["SV", "萨尔瓦多"],   
                ["EE", "爱沙尼亚"],   
                ["ET", "埃塞俄比亚"],   
                ["FJ", "斐济"],   
                ["FI", "芬兰"],   
                ["FR", "法国"],   
                ["GF", "法属圭亚那"],   
                ["GA", "加蓬"],   
                ["GM", "冈比亚"],   
                ["GE", "格鲁吉亚"],   
                ["DE", "德国"],   
                ["GH", "加纳"],   
                ["GI", "直布罗陀"],   
                ["GR", "希腊"],   
                ["GD", "格林纳达"],   
                ["GU", "关岛"],   
                ["GT", "危地马拉"],   
                ["GN", "几内亚"],   
                ["GY", "圭亚那"],   
                ["HT", "海地"],   
                ["HN", "洪都拉斯"],   
                ["HK", "香港"],   
                ["HU", "匈牙利"],   
                ["IS", "冰岛"],   
                ["IN", "印度"],   
                ["ID", "印度尼西亚"],   
                ["IR", "伊朗"],   
                ["IQ", "伊拉克"],   
                ["IE", "爱尔兰"],   
                ["IL", "以色列"],   
                ["IT", "意大利"],   
                ["JM", "牙买加"],   
                ["JP", "日本"],   
                ["JO", "约旦"],   
                ["KH", "柬埔寨"],   
                ["KZ", "哈萨克斯坦"],   
                ["KE", "肯尼亚"],   
                ["KR", "韩国"],   
                ["KW", "科威特"],   
                ["KG", "吉尔吉斯坦"],   
                ["LA", "老挝"],   
                ["LV", "拉脱维亚"],   
                ["LB", "黎巴嫩"],   
                ["LS", "莱索托"],   
                ["LR", "利比里亚"],   
                ["LY", "利比亚"],   
                ["LI", "列支敦士登"],   
                ["LT", "立陶宛"],   
                ["LU", "卢森堡"],   
                ["MO", "澳门"],   
                ["MG", "马达加斯加"],   
                ["MW", "马拉维"],   
                ["MY", "马来西亚"],   
                ["MV", "马尔代夫"],   
                ["ML", "马里"],   
                ["MT", "马耳他"],   
                ["MU", "毛里求斯"],   
                ["MX", "墨西哥"],   
                ["MD", "摩尔多瓦"],   
                ["MC", "摩纳哥"],   
                ["MN", "蒙古"],   
                ["MS", "蒙特塞拉特岛"],   
                ["MA", "摩洛哥"],   
                ["MZ", "莫桑比克"],   
                ["NA", "纳米比亚"],   
                ["NR", "瑙鲁"],   
                ["NP", "尼泊尔"],   
                ["NL", "荷兰"],   
                ["NZ", "新西兰"],   
                ["NI", "尼加拉瓜"],   
                ["NE", "尼日尔"],   
                ["NG", "尼日利亚"],   
                ["KP", "朝鲜"],   
                ["NO", "挪威"],   
                ["OM", "阿曼"],   
                ["PK", "巴基斯坦"],   
                ["PA", "巴拿马"],   
                ["PG", "巴布亚新几内亚"],   
                ["PY", "巴拉圭"],   
                ["PE", "秘鲁"],   
                ["PH", "菲律宾"],   
                ["PL", "波兰"],   
                ["PF", "法属玻利尼西亚"],   
                ["PT", "葡萄牙"],   
                ["PR", "波多黎各"],   
                ["QA", "卡塔尔"],   
                ["RO", "罗马尼亚"],   
                ["RU", "俄罗斯"],   
                ["LC", "圣卢西亚"],   
                ["VC", "圣文森特岛"],   
                ["SM", "圣马力诺"],   
                ["ST", "圣多美和普林西比"],   
                ["SA", "沙特阿拉伯"],   
                ["SN", "塞内加尔"],   
                ["SC", "塞舌尔"],   
                ["SL", "塞拉利昂"],   
                ["SG", "新加坡"],   
                ["SK", "斯洛伐克"],   
                ["SI", "斯洛文尼亚"],   
                ["SB", "所罗门群岛"],   
                ["SO", "索马里"],   
                ["ZA", "南非"],   
                ["ES", "西班牙"],   
                ["LK", "斯里兰卡"],   
                ["SD", "苏丹"],   
                ["SR", "苏里南"],   
                ["SZ", "斯威士兰"],   
                ["SE", "瑞典"],   
                ["CH", "瑞士"],   
                ["SY", "叙利亚"],   
                ["TW", "台湾省"],   
                ["TJ", "塔吉克斯坦"],   
                ["TZ", "坦桑尼亚"],   
                ["TH", "泰国"],   
                ["TG", "多哥"],   
                ["TO", "汤加"],   
                ["TT", "特立尼达和多巴哥"],   
                ["TN", "突尼斯"],   
                ["TR", "土耳其"],   
                ["TM", "土库曼斯坦"],   
                ["UG", "乌干达"],   
                ["UA", "乌克兰"],   
                ["AE", "阿拉伯联合酋长国"],   
                ["GB", "英国"],   
                ["US", "美国"],   
                ["UY", "乌拉圭"],   
                ["UZ", "乌兹别克斯坦"],   
                ["VE", "委内瑞拉"],   
                ["VN", "越南"],   
                ["YE", "也门"],   
                ["YU", "南斯拉夫"],   
                ["ZW", "津巴布韦"],   
                ["ZR", "扎伊尔"],   
                ["ZM", "赞比亚"]   
                ]
        }
    }
})