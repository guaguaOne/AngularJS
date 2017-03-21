 <?php
    header("Content-Type:text/html;charset=UTF-8");
    date_default_timezone_set("PRC");
    $showapi_appid = '33970';  
    $showapi_secret = 'a728d5b5e6e64d94a5065dda45f23e94'; 
    $paramArr = array(
         'showapi_appid'=> $showapi_appid,
         'type'=>"/category/weimanhua/gushimanhua",
         'page'=>$_POST['page']
         //添加其他参数
    );
     
    //创建参数(包括签名的处理)
    function createParam ($paramArr,$showapi_secret) {
         $paraStr = "";
         $signStr = "";
         ksort($paramArr);
         foreach ($paramArr as $key => $val) {
             if ($key != '' && $val != '') {
                 $signStr .= $key.$val;
                 $paraStr .= $key.'='.urlencode($val).'&';
             }
         }
         $signStr .= $showapi_secret;//排好序的参数加上secret,进行md5
         $sign = strtolower(md5($signStr));
         $paraStr .= 'showapi_sign='.$sign;//将md5后的值作为参数,便于服务器的效验
         return $paraStr;
    }
     
    $param = createParam($paramArr,$showapi_secret);
    $url = 'http://route.showapi.com/958-1?'.$param; 
    $result = file_get_contents($url);
    // print $result.'<br>\r\n';
    // $result = json_decode($result);
    echo $result;
    ?>