<?php  
if (!defined('BASEPATH')) exit('No direct script access allowed');
//$config['paypal_email']           = "duoc.huynh-facilitator@dpassion.com"; //your paypal email
$config['paypal_email']             = "luchoa85@yahoo.com"; //your paypal email

/* currency: nok, usd, gbp... https://cms.paypal.com/us/cgi-bin/?cmd=_render-content&content_ID=developer/e_howto_api_nvp_currency_codes*/
$config['paypal_currency_code']     = 'USD';

/* bool: paypal live? or sandbox */
$config['paypal_live']              = TRUE;

/* bool: log active? requires database */
$config['ipn_log']                  = TRUE;
