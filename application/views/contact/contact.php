<?php
       $config = $this->configm->getConfig();
    ?>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<ul id="breadcrumb">
                <li><?=$this->lang->line('bandango')?>:</li>
  				<li><a href="<?=base_url();?>"><?=$this->lang->line('menu_home');?></a></li>
                <li><a><?=$this->lang->line('text_29');?></a></li>
            </ul>
            <div class="contentGroup">
                <div id="contact-us" class="contact-us container">
                    <section id="map">
                    </section>
                    <script>
                    window.onload = function() {
                        var latlng = new google.maps.LatLng(10.77573,106.67558);

                        var styles = [{
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#444444"
                            }]
                        }, {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#f2f2f2"
                            }]
                        }, {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [{
                                "saturation": -100
                            }, {
                                "lightness": 45
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "simplified"
                            }]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#46bcec"
                            }, {
                                "visibility": "on"
                            }]
                        }]

                        var myOptions = {
                            zoom: 14,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            styles: styles
                        };

                        var map = new google.maps.Map(document.getElementById('map'), myOptions);

                        var contentString = "<?=$config['name_company']?>";
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });

                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });

                        infowindow.open(map, marker);
                    }
                    </script>
                    <section id="contact-us-in" class="contact-us-in clearfix">
                        <div class="contact-us-l">
                            <h2 class="contact-us-t"><?=$this->lang->line('text_29');?></h2>
                            <div class="contact-us-a">
                                <ul>
                                    <li><?=$config['address']?></li>
                                    <li><?=$config['phone']?></li>
                                    <li><?=$config['cell_phone']?></li>
                                    <li><?=$config['email']?></li>
                                </ul>
                            </div>
                        </div>
                        <div class="contact-us-r">
                            <h2 class="contact-us-t"><?=$this->lang->line('text_35');?></h2>
                            <div class="contact-us-f">
                                <div class="contact-us-f-w clearfix">
                                    <form id="form-contact">
<div class="contact-us-f-l">
                                        <input type="text" name="name" value="" placeholder="Your name *">
                                        <input type="text" name="email" value="" placeholder="Email *">
                                        <input type="text" name="address" value="" placeholder="Address">
                                        <input type="text" name="phone" value="" placeholder="Phone number ">
                                    </div>
                                    <div class="contact-us-f-r">
                                        <textarea name="message" placeholder="Messages"></textarea>
                                    </div>
</form>
                                </div>
                                <div class="contact-us-f-b">
                                    <span id="ajax-contact"></span><input type="button" onClick="martreal.add_lienhe();" name="" value="Send">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>