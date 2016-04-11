var _resources = {
    "bedrooms": "Bedrooms",
    "blockedImageCopyrightMessage": "Harcourts ",
    "cancel": "Cancel",
    "close": "Close",
    "error": "Error",
    "favouriteSearchAllProperties": "All properties",
    "favouriteSearchEmail": "Email",
    "favouriteSearchesAddAnAlert": "Add an alert",
    "favouriteSearchOpenHomes": "Open homes",
    "favouriteSearchRemove": "Remove",
    "favouriteSearchSms": "SMS",
    "jwysiwygLanguage": "en",
    "loadingDotDotDot": "Loading...",
    "more": "more",
    "ok": "Ok",
    "property": "Property",
    "publicSiteContentNotLoaded": "The requested content cannot be loaded.",
    "publicSiteKeywordSearchHelper": "tiêu đề, vị trí, #",
    "publicSiteTryAgainLater": "Please try again later.",
    "savingDotDotDot": "Saving...",
    "searchingDotDotDot": "Searching...",
    "shareThisLanguage": "en",
    "shortListAddTo": "add to my shortlist",
    "shortListRemoveFrom": "remove ...",
    "shortListRemoveFromWide": "remove from my shortlist",
    "toLowercase": "to",
    "update": "Update",
    "wcChangeTemplateMessage": "Your form has been modified. Changes will be lost. Are you sure you wish to continue?",
    "wcChangeTemplateTitle": "Confirm template change",
    "wcConfirmMessageUpdateInProgress": "You are in the middle of updating. Do you wish to continue?",
    "wcContentEditorDefaultText": "Please add your content here.",
    "wcDeleteWidgetMessage": "Are you sure you wish to delete this widget?",
    "wcDeleteWidgetTitle": "Delete widget",
    "wcDeletePageMessage": "Are you sure you want to delete this page?",
    "wcDeletePageTitle": "Delete page",
    "wcErrorMessageH1SessionOutOfTime": "Sorry, you have been signed out of harcourts one, please sign in to continue.",
    "wcErrorMessageUnknownError": "Sorry an unknown error has occured.",
    "wcErrorMessageUnknownErrorWithRetry": "An error has occurred. Please try again later.",
    "wcFeatureBannerWidgetHelpTextDragAndDrop": "Drag & Drop Item on form to edit, or re-order",
    "wcFeatureBannerWidgetHelpTextUpdateOrCancel": "Update or Cancel your current changes",
    "wcRemoveListingQuestionMark": "Remove Listing?",
    "wcTextEditorInsert": "Insert",
    "wcSettingsSearchDeleteConfirmationMessage": "All search widgets and search pages will be removed from your site. Are you sure you wish to continue?",
    "wcSettingsSearchDeleteConfirmationTitle": "All searches will be removed",
    "wcSitemapDeleting": "Deleting",
    "wcSitemapMovingPage": "Moving page",
    "wcSitemapReloading": "Reloading",
    "wcSitemapRestoring": "Restoring",
    "webMobileAgentAdding": "Adding",
    "webMobileAgentAnyBedrooms": "Any Bedrooms",
    "webMobileAgentAnyFloorArea": "Any Floor Area",
    "webMobileAgentAnyLandArea": "Any Land Area",
    "webMobileAgentAnyPrice": "Any Price",
    "webMobileAgentAtLeast": "At least",
    "webMobileAgentAtMost": "At most",
    "webMobileAgentLoggedInSuccessfully": "Logged In Successfully!",
    "webMobileAgentRemoving": "Removing",
    "webMobileAgentWelcomeBack": "Welcome back ",
    "webSiteRootUrl": "http://10.32.10.82",
    "googleApiKey": "AIzaSyCPIoE5hhJfc_kaMjcMXpgVzqb4oWUR_Bc",
    "googleMapLanguage": "en-AU",
    "googleMapsApiUrl": "https://maps.googleapis.com",
    "isNewTheme": "false",
    "listingType_4": "CommercialForLease",
    "listingType_3": "CommercialForSale",
    "listingType_7": "Businesses",
    "listingType_5": "Rural",
    "listingType_2": "Rentals",
    "listingType_1": "Residential",
    "lat": -24.60706913770968,
    "lng": 133.505859375,
    "zoom": 5
}; + function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.VERSION = '3.2.0'
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $this.trigger('focus')
            $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget)
        }
        return false
    }
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode)) return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled')) return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }
        var desc = ' li:not(.divider):visible a'
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)
        if (!$items.length) return
        var index = $items.index($items.filter(':focus'))
        if (e.keyCode == 38 && index > 0) index--
            if (e.keyCode == 40 && index < $items.length - 1) index++
                if (!~index) index = 0
        $items.eq(index).trigger('focus')
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $parent = getParent($(this))
            var relatedTarget = {
                relatedTarget: this
            }
            if (!$parent.hasClass('open')) return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented()) return
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }
    var old = $.fn.dropdown
    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)
}(jQuery);;
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        z = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        A = "tap",
        j = "doubletap",
        b = "longtap",
        y = "hold",
        D = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    f.fn.swipe = function(G) {
        var F = f(this),
            E = F.data(B);
        if (E && typeof G === "string") {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe")
            }
        } else {
            if (!E && (typeof G === "object" || !G)) {
                return w.apply(this, arguments)
            }
        }
        return F
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: z
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: D,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(E) {
        if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
            E.allowPageScroll = m
        }
        if (E.click !== undefined && E.tap === undefined) {
            E.tap = E.click
        }
        if (!E) {
            E = {}
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function() {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F)
            }
        })
    }

    function C(a4, av) {
        var az = (a || d || !av.fallbackToMouseEvents),
            J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            S = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            ab = 0,
            a1 = 0,
            aZ = 0,
            G = 1,
            aq = 0,
            aJ = 0,
            M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0,
            a2 = 0,
            a5 = 0,
            ad = 0,
            N = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9)
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe")
        }
        this.enable = function() {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function() {
            aK();
            return aR
        };
        this.destroy = function() {
            aK();
            aR.data(B, null);
            return aR
        };
        this.option = function(bc, bb) {
            if (av[bc] !== undefined) {
                if (bb === undefined) {
                    return av[bc]
                } else {
                    av[bc] = bb
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length
            } else {
                bd.preventDefault()
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || (W === av.fingers || av.fingers === i) || aX()) {
                ai(0, bb);
                T = at();
                if (W == 2) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z)
                }
            } else {
                bc = false
            }
            if (bc === false) {
                Z = q;
                O(be, Z);
                return bc
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [be.target]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target)
                        }
                    }, this), av.longTapThreshold)
                }
                ao(true)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length
            }
            if (av.hold) {
                clearTimeout(af)
            }
            Z = k;
            if (W == 2) {
                if (a1 == 0) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end)
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ)
            }
            if ((W === av.fingers || av.fingers === i) || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z)
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = true;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg)
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k)
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h)
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z)
                    }
                }
            } else {
                Z = q;
                O(bh, Z)
            }
            if (bd === false) {
                Z = q;
                O(bh, Z)
            }
        }

        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return true
                }
            }
            if (am()) {
                W = ad
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z)
            } else {
                if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == false && Z === k)) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z)
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A)
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z)
                        }
                    }
                }
            }
            ao(false);
            return null
        }

        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(false)
        }

        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z)
            }
        }

        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K)
            }
            ao(false)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function O(bd, bb) {
            var bc = undefined;
            if (I() || V()) {
                bc = aF(bd, bb, l)
            } else {
                if ((P() || aX()) && bc !== false) {
                    bc = aF(bd, bb, t)
                }
            }
            if (aG() && bc !== false) {
                bc = aF(bd, bb, j)
            } else {
                if (ap() && bc !== false) {
                    bc = aF(bd, bb, b)
                } else {
                    if (ah() && bc !== false) {
                        bc = aF(bd, bb, A)
                    }
                }
            }
            if (bb === q) {
                a9(bd)
            }
            if (bb === h) {
                if (a) {
                    if (bd.touches.length == 0) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc = undefined;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ab, W, aQ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (bc === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
                            if (av.swipeLeft) {
                                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
                            if (av.swipeRight) {
                                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
                            if (av.swipeUp) {
                                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
                            if (av.swipeDown) {
                                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchIn) {
                                bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break;
                        case z:
                            aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchOut) {
                                bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function() {
                            N = null;
                            aR.trigger("tap", [be.target]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target)
                            }
                        }, this), av.doubleTapThreshold)
                    } else {
                        N = null;
                        aR.trigger("tap", [be.target]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [be.target]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [be.target]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function an() {
            var bb = true;
            if (av.threshold !== null) {
                bb = ag >= av.threshold
            }
            return bb
        }

        function ba() {
            var bb = false;
            if (av.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= av.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (av.pinchThreshold !== null) {
                return aq >= av.pinchThreshold
            }
            return true
        }

        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = false
                } else {
                    bb = true
                }
            } else {
                bb = true
            }
            return bb
        }

        function al(bb, bc) {
            if (av.allowPageScroll === m || aX()) {
                bb.preventDefault()
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut)
        }

        function P() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown)
        }

        function I() {
            return !!(aV() && V())
        }

        function aO() {
            return ((W === av.fingers || av.fingers === i) || !a)
        }

        function X() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(av.tap)
        }

        function Y() {
            return !!(av.doubleTap)
        }

        function aU() {
            return !!(av.longTap)
        }

        function Q() {
            if (N == null) {
                return false
            }
            var bb = at();
            return (Y() && ((bb - N) <= av.doubleTapThreshold))
        }

        function H() {
            return Q()
        }

        function ax() {
            return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold))
        }

        function a0() {
            return ((ab > av.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(ax() && a6())
        }

        function aG() {
            return !!(Q() && Y())
        }

        function ap() {
            return !!(a0() && aU())
        }

        function F() {
            a5 = at();
            ad = event.touches.length + 1
        }

        function R() {
            a5 = 0;
            ad = 0
        }

        function am() {
            var bb = false;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = true
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(B + "_intouch") === true)
        }

        function ao(bb) {
            if (bb === true) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K)
                }
            } else {
                aR.unbind(ay, a3, false);
                aR.unbind(U, L, false);
                if (S) {
                    aR.unbind(S, K, false)
                }
            }
            aR.data(B + "_intouch", bb === true)
        }

        function ai(bc, bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc]
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb]
                }
            }
        }

        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bb
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc
        }

        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance
            }
            return undefined
        }

        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb
        }

        function aw(bb) {
            return {
                direction: bb,
                distance: 0
            }
        }

        function aM() {
            return a2 - T
        }

        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function ar() {
            if (G < 1) {
                return z
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function at() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc
        }

        function E(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));;
(function($) {
    if ($.browser.msie === undefined) {
        var isIe = (/Trident\/7\./).test(navigator.userAgent);
        if (isIe) {
            $.browser.msie = isIe;
        }
    }
})(jQuery);;
var hasFlash = function() {
    var a = 6;
    if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.indexOf("Windows") > -1) {
        document.write('<script language="VBScript"\> \non error resume next \nhasFlash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & ' + a + '))) \n</script\> \n');
        if (window.hasFlash != null) return window.hasFlash
    }
    if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
        var b = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description;
        return parseInt(b.substr(b.indexOf(".") - 2, 2), 10) >= a
    }
    return false
}();
String.prototype.normalize = function() {
    return this.replace(/\s+/g, " ")
};
if (Array.prototype.push == null) {
    Array.prototype.push = function() {
        var i = 0,
            a = this.length,
            b = arguments.length;
        while (i < b) {
            this[a++] = arguments[i++]
        }
        return this.length
    }
}
if (!Function.prototype.apply) {
    Function.prototype.apply = function(a, b) {
        var c = [];
        var d, e;
        if (!a) a = window;
        if (!b) b = [];
        for (var i = 0; i < b.length; i++) {
            c[i] = "b[" + i + "]"
        }
        e = "a.__applyTemp__(" + c.join(",") + ");";
        a.__applyTemp__ = this;
        d = eval(e);
        a.__applyTemp__ = null;
        return d
    }
}

function named(a) {
    return new named.Arguments(a)
}
named.Arguments = function(a) {
    this.oArgs = a
};
named.Arguments.prototype.constructor = named.Arguments;
named.extract = function(a, b) {
    var c, d;
    var i = a.length;
    while (i--) {
        d = a[i];
        if (d != null && d.constructor != null && d.constructor == named.Arguments) {
            c = a[i].oArgs;
            break
        }
    }
    if (c == null) return;
    for (e in c)
        if (b[e] != null) b[e](c[e]);
    return
};
var parseSelector = function() {
    var a = /^([^#.>`]*)(#|\.|\>|\`)(.+)$/;

    function r(s, t) {
        var u = s.split(/\s*\,\s*/);
        var v = [];
        for (var i = 0; i < u.length; i++) v = v.concat(b(u[i], t));
        return v
    }

    function b(c, d, e) {
        c = c.normalize().replace(" ", "`");
        var f = c.match(a);
        var g, h, i, j, k, n;
        var l = [];
        if (f == null) f = [c, c];
        if (f[1] == "") f[1] = "*";
        if (e == null) e = "`";
        if (d == null) d = document;
        switch (f[2]) {
            case "#":
                k = f[3].match(a);
                if (k == null) k = [null, f[3]];
                g = document.getElementById(k[1]);
                if (g == null || (f[1] != "*" && !o(g, f[1]))) return l;
                if (k.length == 2) {
                    l.push(g);
                    return l
                }
                return b(k[3], g, k[2]);
            case ".":
                if (e != ">") h = m(d, f[1]);
                else h = d.childNodes;
                for (i = 0, n = h.length; i < n; i++) {
                    g = h[i];
                    if (g.nodeType != 1) continue;
                    k = f[3].match(a);
                    if (k != null) {
                        if (g.className == null || typeof(g.className) != "String" || g.className.match("(\\s|^)" + k[1] + "(\\s|$)") == null) continue;
                        j = b(k[3], g, k[2]);
                        l = l.concat(j)
                    } else if (g.className != null && g.className.match("(\\s|^)" + f[3] + "(\\s|$)") != null) l.push(g)
                }
                return l;
            case ">":
                if (e != ">") h = m(d, f[1]);
                else h = d.childNodes;
                for (i = 0, n = h.length; i < n; i++) {
                    g = h[i];
                    if (g.nodeType != 1) continue;
                    if (!o(g, f[1])) continue;
                    j = b(f[3], g, ">");
                    l = l.concat(j)
                }
                return l;
            case "`":
                h = m(d, f[1]);
                for (i = 0, n = h.length; i < n; i++) {
                    g = h[i];
                    j = b(f[3], g, "`");
                    l = l.concat(j)
                }
                return l;
            default:
                if (e != ">") h = m(d, f[1]);
                else h = d.childNodes;
                for (i = 0, n = h.length; i < n; i++) {
                    g = h[i];
                    if (g.nodeType != 1) continue;
                    if (!o(g, f[1])) continue;
                    l.push(g)
                }
                return l
        }
    }

    function m(d, o) {
        if (o == "*" && d.all != null) return d.all;
        return d.getElementsByTagName(o)
    }

    function o(p, q) {
        return q == "*" ? true : p.nodeName.toLowerCase().replace("html:", "") == q.toLowerCase()
    }
    return r
}();
var sIFR = function() {
    var a = "http://www.w3.org/1999/xhtml";
    var b = false;
    var c = false;
    var d;
    var ah = [];
    var al = document;
    var ak = al.documentElement;
    var am = window;
    var au = al.addEventListener;
    var av = am.addEventListener;
    var f = function() {
        var g = navigator.userAgent.toLowerCase();
        var f = {
            a: g.indexOf("applewebkit") > -1,
            b: g.indexOf("safari") > -1,
            c: navigator.product != null && navigator.product.toLowerCase().indexOf("konqueror") > -1,
            d: g.indexOf("opera") > -1,
            e: al.contentType != null && al.contentType.indexOf("xml") > -1,
            f: true,
            g: true,
            h: null,
            i: null,
            j: null,
            k: null
        };
        f.l = f.a || f.c;
        f.m = !f.a && navigator.product != null && navigator.product.toLowerCase() == "gecko";
        if (f.m && g.match(/.*gecko\/(\d{8}).*/)) f.j = new Number(g.match(/.*gecko\/(\d{8}).*/)[1]);
        f.n = g.indexOf("msie") > -1 && !f.d && !f.l && !f.m;
        f.o = f.n && g.match(/.*mac.*/) != null;
        if (f.d && g.match(/.*opera(\s|\/)(\d+\.\d+)/)) f.i = new Number(g.match(/.*opera(\s|\/)(\d+\.\d+)/)[2]);
        if (f.n || (f.d && f.i < 7.6)) f.g = false;
        if (f.a && g.match(/.*applewebkit\/(\d+).*/)) f.k = new Number(g.match(/.*applewebkit\/(\d+).*/)[1]);
        if (am.hasFlash && (!f.n || f.o)) {
            var aj = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description;
            f.h = parseInt(aj.substr(aj.indexOf(".") - 2, 2), 10)
        }
        if (g.match(/.*(windows|mac).*/) == null || f.o || f.c || (f.d && (g.match(/.*mac.*/) != null || f.i < 7.6)) || (f.b && f.h < 7) || (!f.b && f.a && f.k < 312) || (f.m && f.j < 20020523)) f.f = false;
        if (!f.o && !f.m && al.createElementNS) try {
            al.createElementNS(a, "i").innerHTML = ""
        } catch (e) {
            f.e = true
        }
        f.p = f.c || (f.a && f.k < 312);
        return f
    }();

    function at() {
        return {
            bIsWebKit: f.a,
            bIsSafari: f.b,
            bIsKonq: f.c,
            bIsOpera: f.d,
            bIsXML: f.e,
            bHasTransparencySupport: f.f,
            bUseDOM: f.g,
            nFlashVersion: f.h,
            nOperaVersion: f.i,
            nGeckoBuildDate: f.j,
            nWebKitVersion: f.k,
            bIsKHTML: f.l,
            bIsGecko: f.m,
            bIsIE: f.n,
            bIsIEMac: f.o,
            bUseInnerHTMLHack: f.p
        }
    }
    if (am.hasFlash == false || !al.getElementsByTagName || !al.getElementById || (f.e && (f.p || f.n))) return {
        UA: at()
    };

    function af(e) {
        if ((!k.bAutoInit && (am.event || e) != null) || !l(e)) return;
        b = true;
        for (var i = 0, h = ah.length; i < h; i++) j.apply(null, ah[i]);
        ah = []
    }
    var k = af;

    function l(e) {
        if (c == false || k.bIsDisabled == true || ((f.e && f.m || f.l) && e == null && b == false) || al.getElementsByTagName("body").length == 0) return false;
        return true
    }

    function m(n) {
        if (f.n) return n.replace(new RegExp("%\d{0}", "g"), "%25");
        return n.replace(new RegExp("%(?!\d)", "g"), "%25")
    }

    function as(p, q) {
        return q == "*" ? true : p.nodeName.toLowerCase().replace("html:", "") == q.toLowerCase()
    }

    function o(p, q, r, s, t) {
        var u = "";
        var v = p.firstChild;
        var w, x, y, z;
        if (s == null) s = 0;
        if (t == null) t = "";
        while (v) {
            if (v.nodeType == 3) {
                z = v.nodeValue.replace("<", "&lt;");
                switch (r) {
                    case "lower":
                        u += z.toLowerCase();
                        break;
                    case "upper":
                        u += z.toUpperCase();
                        break;
                    default:
                        u += z
                }
            } else if (v.nodeType == 1) {
                if (as(v, "a") && !v.getAttribute("href") == false) {
                    if (v.getAttribute("target")) t += "&sifr_url_" + s + "_target=" + v.getAttribute("target");
                    t += "&sifr_url_" + s + "=" + m(v.getAttribute("href")).replace(/&/g, "%26");
                    u += '<a href="asfunction:_root.launchURL,' + s + '">';
                    s++
                } else if (as(v, "br")) u += "<br/>";
                if (v.hasChildNodes()) {
                    y = o(v, null, r, s, t);
                    u += y.u;
                    s = y.s;
                    t = y.t
                }
                if (as(v, "a")) u += "</a>"
            }
            w = v;
            v = v.nextSibling;
            if (q != null) {
                x = w.parentNode.removeChild(w);
                q.appendChild(x)
            }
        }
        return {
            "u": u,
            "s": s,
            "t": t
        }
    }

    function A(B) {
        if (al.createElementNS && f.g) return al.createElementNS(a, B);
        return al.createElement(B)
    }

    function C(D, E, z) {
        var p = A("param");
        p.setAttribute("name", E);
        p.setAttribute("value", z);
        D.appendChild(p)
    }

    function F(p, G) {
        var H = p.className;
        if (H == null) H = G;
        else H = H.normalize() + (H == "" ? "" : " ") + G;
        p.className = H
    }

    function aq(ar) {
        var a = ak;
        if (k.bHideBrowserText == false) a = al.getElementsByTagName("body")[0];
        if ((k.bHideBrowserText == false || ar) && a)
            if (a.className == null || a.className.match(/\bsIFR\-hasFlash\b/) == null) F(a, "sIFR-hasFlash")
    }

    function j(I, J, K, L, M, N, O, P, Q, R, S, r, T) {
        if (!l()) return ah.push(arguments);
        aq();
        named.extract(arguments, {
            sSelector: function(ap) {
                I = ap
            },
            sFlashSrc: function(ap) {
                J = ap
            },
            sColor: function(ap) {
                K = ap
            },
            sLinkColor: function(ap) {
                L = ap
            },
            sHoverColor: function(ap) {
                M = ap
            },
            sBgColor: function(ap) {
                N = ap
            },
            nPaddingTop: function(ap) {
                O = ap
            },
            nPaddingRight: function(ap) {
                P = ap
            },
            nPaddingBottom: function(ap) {
                Q = ap
            },
            nPaddingLeft: function(ap) {
                R = ap
            },
            sFlashVars: function(ap) {
                S = ap
            },
            sCase: function(ap) {
                r = ap
            },
            sWmode: function(ap) {
                T = ap
            }
        });
        var U = parseSelector(I);
        if (U.length == 0) return false;
        if (S != null) S = "&" + S.normalize();
        else S = "";
        if (K != null) S += "&textcolor=" + K;
        if (M != null) S += "&hovercolor=" + M;
        if (M != null || L != null) S += "&linkcolor=" + (L || K);
        if (O == null) O = 0;
        if (P == null) P = 0;
        if (Q == null) Q = 0;
        if (R == null) R = 0;
        if (N == null) N = "#FFFFFF";
        if (T == "transparent")
            if (!f.f) T = "opaque";
            else N = "transparent";
        if (T == null) T = "";
        var p, V, W, X, Y, Z, aa, ab, ac;
        var ad = null;
        for (var i = 0, h = U.length; i < h; i++) {
            p = U[i];
            if (p.className != null && p.className.match(/\bsIFR\-replaced\b/) != null) continue;
            V = p.offsetWidth - R - P;
            W = p.offsetHeight - O - Q;
            aa = A("span");
            aa.className = "sIFR-alternate";
            ac = o(p, aa, r);
            Z = "txt=" + m(ac.u).replace(/\+/g, "%2B").replace(/&/g, "%26").replace(/\"/g, "%22").normalize() + S + "&w=" + V + "&h=" + W + ac.t;
            F(p, "sIFR-replaced");
            if (ad == null || !f.g) {
                if (!f.g) {
                    if (!f.n) p.innerHTML = ['<embed class="sIFR-flash" type="application/x-shockwave-flash" src="', J, '" quality="best" wmode="', T, '" bgcolor="', N, '" flashvars="', Z, '" width="', V, '" height="', W, '" sifr="true"></embed>'].join("");
                    else p.innerHTML = ['<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" sifr="true" width="', V, '" height="', W, '" class="sIFR-flash"><param name="movie" value="', J, '"></param><param name="flashvars" value="', Z, '"></param><param name="quality" value="best"></param><param name="wmode" value="', T, '"></param><param name="bgcolor" value="', N, '"></param> </object>'].join('')
                } else {
                    if (f.d) {
                        ab = A("object");
                        ab.setAttribute("data", J);
                        C(ab, "quality", "best");
                        C(ab, "wmode", T);
                        C(ab, "bgcolor", N)
                    } else {
                        ab = A("embed");
                        ab.setAttribute("src", J);
                        ab.setAttribute("quality", "best");
                        ab.setAttribute("flashvars", Z);
                        ab.setAttribute("wmode", T);
                        ab.setAttribute("bgcolor", N)
                    }
                    ab.setAttribute("sifr", "true");
                    ab.setAttribute("type", "application/x-shockwave-flash");
                    ab.className = "sIFR-flash";
                    if (!f.l || !f.e) ad = ab.cloneNode(true)
                }
            } else ab = ad.cloneNode(true);
            if (f.g) {
                if (f.d) C(ab, "flashvars", Z);
                else ab.setAttribute("flashvars", Z);
                ab.setAttribute("width", V);
                ab.setAttribute("height", W);
                ab.style.width = V + "px";
                ab.style.height = W + "px";
                p.appendChild(ab)
            }
            p.appendChild(aa);
            if (f.p) p.innerHTML += ""
        }
        if (f.n && k.bFixFragIdBug) setTimeout(function() {
            al.title = d
        }, 0)
    }

    function ai() {
        d = al.title
    }

    function ae() {
        if (k.bIsDisabled == true) return;
        c = true;
        if (k.bHideBrowserText) aq(true);
        if (am.attachEvent) am.attachEvent("onload", af);
        else if (!f.c && (al.addEventListener || am.addEventListener)) {
            if (f.a && f.k >= 132 && am.addEventListener) am.addEventListener("load", function() {
                setTimeout("sIFR({})", 1)
            }, false);
            else {
                if (al.addEventListener) al.addEventListener("load", af, false);
                if (am.addEventListener) am.addEventListener("load", af, false)
            }
        } else if (typeof am.onload == "function") {
            var ag = am.onload;
            am.onload = function() {
                ag();
                af()
            }
        } else am.onload = af;
        if (!f.n || am.location.hash == "") k.bFixFragIdBug = false;
        else ai()
    }
    k.UA = at();
    k.bAutoInit = true;
    k.bFixFragIdBug = true;
    k.replaceElement = j;
    k.updateDocumentTitle = ai;
    k.appendToClassName = F;
    k.setup = ae;
    k.debug = function() {
        aq(true)
    };
    k.debug.replaceNow = function() {
        ae();
        k()
    };
    k.bIsDisabled = false;
    k.bHideBrowserText = true;
    return k
}();
if (typeof sIFR == "function" && !sIFR.UA.bIsIEMac && (!sIFR.UA.bIsWebKit || sIFR.UA.nWebKitVersion >= 100)) {
    sIFR.setup();
};;
if (typeof sIFR == "function") {
    sIFR.replaceElement(".introBanner .introTitle h1", named({
        sFlashSrc: "/Flash/flash.type.swf",
        sColor: "#FFFFFF",
        sWmode: "transparent",
        sCase: "upper"
    }));
    sIFR.replaceElement(".mediaFeatures ul li h2", named({
        sFlashSrc: "/Flash/flash.type.swf",
        sColor: "#0c0c0c",
        sWmode: "transparent",
        sCase: "upper",
        sHoverColor: "3270ad"
    }));
    sIFR.replaceElement(".officeTitle h2", named({
        sFlashSrc: "/Flash/flash.type.swf",
        sColor: "#3d3d3d",
        sWmode: "transparent",
        sCase: "upper",
        sHoverColor: "3270ad"
    }));
};;
if (typeof sIFR == "function")(function() {
    var j = document;
    var h = j.documentElement;
    sIFR.removeDecoyClasses = function() {
        function a(b) {
            if (b && b.className != null) b.className = b.className.replace(/\bsIFR-hasFlash\b/, "")
        }
        return function() {
            a(h);
            a(j.getElementsByTagName("body")[0])
        }
    }();
    sIFR.preferenceManager = {
        storage: {
            sCookieId: "sifr",
            set: function(a) {
                var b = new Date();
                b.setFullYear(b.getFullYear() + 3);
                j.cookie = [this.sCookieId, "=", a, ";expires=", b.toGMTString(), ";path=/"].join("")
            },
            get: function() {
                var a = j.cookie.match(new RegExp(";?" + this.sCookieId + "=([^;]+);?"));
                if (a != null && a[1] == "false") return false;
                else return true
            },
            reset: function() {
                var a = new Date();
                a.setFullYear(a.getFullYear() - 1);
                j.cookie = [this.sCookieId, "=true;expires=", a.toGMTString(), ";path=/"].join("")
            }
        },
        disable: function() {
            this.storage.set(false)
        },
        enable: function() {
            this.storage.set(true)
        },
        test: function() {
            return this.storage.get()
        }
    };
    if (sIFR.preferenceManager.test() == false) {
        sIFR.bIsDisabled = true;
        sIFR.removeDecoyClasses()
    }
    sIFR.rollback = function() {
        function a(b) {
            var c, d, e, f, g, h;
            var l = parseSelector(b);
            var i = l.length - 1;
            var m = false;
            while (i >= 0) {
                c = l[i];
                l.length--;
                d = c.parentNode;
                if (c.getAttribute("sifr") == "true") {
                    h = 0;
                    while (h < d.childNodes.length) {
                        c = d.childNodes[h];
                        if (c.className == "sIFR-alternate") {
                            e = c;
                            h++;
                            continue
                        }
                        d.removeChild(c)
                    }
                    if (e != null) {
                        f = e.firstChild;
                        while (f != null) {
                            g = f.nextSibling;
                            d.appendChild(e.removeChild(f));
                            f = g
                        }
                        d.removeChild(e)
                    }
                    if (!sIFR.UA.bIsXML && sIFR.UA.bUseInnerHTMLHack) d.innerHTML += "";
                    d.className = d.className.replace(/\bsIFR\-replaced\b/, "")
                };
                m = true;
                i--
            }
            return m
        }
        return function(k) {
            named.extract(arguments, {
                sSelector: function(a) {
                    k = a
                }
            });
            if (k == null) k = "";
            else k += ">";
            sIFR.removeDecoyClasses();
            sIFR.bHideBrowserText = false;
            if (a(k + "embed") == false) a(k + "object")
        }
    }()
})();
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, g, h, e = this;
            if (e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(a, b) {
                        return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, g && g.length > -1) {
                e.respondTo = e.options.respondTo || "window";
                for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
                e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst === !0 ? a - b : b - a
                })
            }
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
        null !== d && d.slideHandler(b, !0)
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().width(100 / a.options.slidesPerRow + "%").css({
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b) {
        var d, e, f, c = this,
            g = c.$slider.width(),
            h = window.innerWidth || a(window).width();
        if ("window" === c.respondTo ? f = h : "slider" === c.respondTo ? f = g : "min" === c.respondTo && (f = Math.min(h, g)), c.originalSettings.responsive && c.originalSettings.responsive.length > -1 && null !== c.originalSettings.responsive) {
            e = null;
            for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? f < c.breakpoints[d] && (e = c.breakpoints[d]) : f > c.breakpoints[d] && (e = c.breakpoints[d]));
            null !== e ? null !== c.activeBreakpoint ? e !== c.activeBreakpoint && (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, c.options = c.originalSettings, b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c);
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).off("click.slick", b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", b.setPaused.bind(b, !0)).off("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), b.options.autoplay === !0 && a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", b.setPaused.bind(b, !0)), b.$list.off("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, b.cleanUpEvents(), a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides && (b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), b.$slider.html(b.$slides)), b.cleanUpRows(), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized")
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: 1e3
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: 1e3
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll);
        else if (a.options.centerMode === !0) d = a.slideCount;
        else
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? (e = a.slideCount - a.options.slidesToShow + 1, a.options.centerMode === !0 && (e = a.slideCount)) : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function() {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildRows(), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", b.setPaused.bind(b, !0)).on("mouseleave.slick", b.setPaused.bind(b, !1))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && a(document).on(b.visibilityChange, b.visibility.bind(b)), b.$list.on("mouseenter.slick", b.setPaused.bind(b, !0)), b.$list.on("mouseleave.slick", b.setPaused.bind(b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange.bind(b)), a(window).on("resize.slick.slick-" + b.instanceUid, b.resize.bind(b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 1
                    }, 200)
                }, d.src = c, b.css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function() {
        var b = this,
            c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !1)
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(a, b, c) {
        var d = this;
        d.options[a] = b, c === !0 && (d.unload(), d.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, b.autoPlayClear())
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), c.$slides.eq(e).addClass("slick-active").attr("aria-hidden", "false"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(e).addClass("slick-center")), c.asNavFor(e), void 0) : (c.slideHandler(e), void 0)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function() {
            i.postSlide(e)
        }) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e), void 0)))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function() {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function() {
        var a = this;
        a.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
    }, a.fn.slick = function() {
        var g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length,
            f = 0;
        for (f; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});;
$.ui.dialog.prototype.options.clickOut = true;
$.ui.dialog.prototype.options.responsive = true;
$.ui.dialog.prototype.options.scaleH = 0.8;
$.ui.dialog.prototype.options.scaleW = 0.8;
$.ui.dialog.prototype.options.showTitleBar = true;
$.ui.dialog.prototype.options.showCloseButton = true;
var _init = $.ui.dialog.prototype._init;
$.ui.dialog.prototype._init = function() {
    var self = this;
    _init.apply(this, arguments);
    if ($.ui && $.ui.dialog && $.ui.dialog.overlay) {
        $.ui.dialog.overlay.events = $.map('focus,keydown,keypress'.split(','), function(event) {
            return event + '.dialog-overlay';
        }).join(' ');
    }
};
var _open = $.ui.dialog.prototype.open;
$.ui.dialog.prototype.open = function() {
    var self = this;
    _open.apply(this, arguments);
    var oHeight = self.element.parent().outerHeight(),
        oWidth = self.element.parent().outerWidth(),
        isTouch = $("html").hasClass("touch");
    var resize = function() {
        if (self.options.responsive === true || (self.options.responsive === "touch" && isTouch)) {
            var elem = self.element,
                wHeight = $(window).height(),
                wWidth = $(window).width(),
                dHeight = elem.closest(".ui-dialog").outerHeight(),
                dWidth = elem.closest(".ui-dialog").outerWidth(),
                setHeight = Math.min(wHeight * self.options.scaleH, oHeight),
                setWidth = Math.min(wWidth * self.options.scaleW, oWidth);
            if (elem.hasClass("ui-dialog-content")) {
                if ((oHeight + 100) > wHeight || elem.hasClass("resizedH")) {
                    elem.dialog("option", "height", setHeight).closest(".ui-dialog").css("max-height", setHeight);
                    elem.addClass("resizedH");
                }
                if ((oWidth + 100) > wWidth || elem.hasClass("resizedW")) {
                    elem.dialog("option", "width", setWidth).closest(".ui-dialog").css("max-width", setWidth);
                    elem.addClass("resizedW");
                }
                elem.dialog("option", "position", "center");
                elem.css("overflow", "auto");
            }
        }
        if (isTouch) {
            elem.css("-webkit-overflow-scrolling", "touch");
        }
    };
    resize();
    $(window).on("resize", function() {
        resize();
    });
    if (window.addEventListener) {
        window.addEventListener("orientationchange", function() {
            resize();
        });
    }
    if (!self.options.showTitleBar) {
        self.uiDialogTitlebar.css({
            "height": 0,
            "padding": 0,
            "background": "none",
            "border": 0
        });
        self.uiDialogTitlebar.find(".ui-dialog-title").css("display", "none");
    }
    if (!self.options.showCloseButton) {
        self.uiDialogTitlebar.find(".ui-dialog-titlebar-close").css("display", "none");
    }
    if (self.options.clickOut && !self.options.modal) {
        $('<div id="dialog-overlay"></div>').insertBefore(self.element.parent());
        $('#dialog-overlay').css({
            "position": "fixed",
            "top": 0,
            "right": 0,
            "bottom": 0,
            "left": 0,
            "background-color": "transparent"
        });
        $('#dialog-overlay').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.close();
        });
    } else if (self.options.clickOut && self.options.modal) {
        $('.ui-widget-overlay').click(function(e) {
            self.close();
        });
    }
    if (self.options.dialogClass) {
        $('.ui-widget-overlay').addClass(self.options.dialogClass);
    }
};
var _close = $.ui.dialog.prototype.close;
$.ui.dialog.prototype.close = function() {
    var self = this;
    _close.apply(this, arguments);
    if (self.options.dialogClass) {
        $('.ui-widget-overlay').removeClass(self.options.dialogClass);
    }
    if ($("#dialog-overlay").length) {
        $("#dialog-overlay").remove();
    }
};;
var JSON;
if (!JSON) {
    JSON = {};
}
(function() {
    'use strict';

    function f(n) {
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate()) + 'T' +
                f(this.getUTCHours()) + ':' +
                f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case 'string':
                return quote(value);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
                if (!value) {
                    return 'null';
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        };
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function' ? walk({
                    '': j
                }, '') : j;
            }
            throw new SyntaxError('JSON.parse');
        };
    }
}());;;
(function($) {
    var tmp, loading, overlay, wrap, outer, inner, content, close, nav_left, nav_right;
    var selectedIndex = 0,
        selectedOpts = {},
        selectedArray = [],
        currentIndex = 0,
        currentOpts = {},
        currentArray = [];
    var ajaxLoader = null,
        imgPreloader = new Image,
        imageRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        swfRegExp = /[^\.]\.(swf)\s*$/i;
    var loadingTimer, loadingFrame = 1;
    var start_pos, final_pos, busy = false,
        shadow = 20,
        fx = $.extend($('<div/>')[0], {
            prop: 0
        }),
        titleh = 0,
        isIE6 = !$.support.opacity && !window.XMLHttpRequest;
    $.fn.fixPNG = function() {
        return this.each(function() {
            var image = $(this).css('backgroundImage');
            if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
                image = RegExp.$1;
                $(this).css({
                    'backgroundImage': 'none',
                    'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=" + ($(this).css('backgroundRepeat') == 'no-repeat' ? 'crop' : 'scale') + ", src='" + image + "')"
                }).each(function() {
                    var position = $(this).css('position');
                    if (position != 'absolute' && position != 'relative')
                        $(this).css('position', 'relative');
                }).css('zoom', 1);
            }
        });
    };
    $.fn.fancybox = function(options) {
        $(this).data('fancybox', $.extend({}, options));
        $(this).unbind('click.fb').bind('click.fb', function(e) {
            e.preventDefault();
            if (busy) return;
            busy = true;
            $(this).blur();
            selectedArray = [];
            selectedIndex = 0;
            var rel = $(this).attr('rel') || '';
            if (!rel || rel == '' || rel === 'nofollow') {
                selectedArray.push(this);
            } else {
                selectedArray = $("a[rel='" + rel + "'], area[rel='" + rel + "']");
                selectedIndex = selectedArray.index(this);
            }
            fancybox_start();
            return false;
        });
        return this;
    };
    $.fancybox = function(obj, opts) {
        if (busy) return;
        busy = true;
        selectedArray = [];
        selectedIndex = 0;
        if ($.isArray(obj)) {
            for (var i = 0, j = obj.length; i < j; i++) {
                if (typeof obj[i] == 'object') {
                    $(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
                } else {
                    obj[i] = $({}).data('fancybox', $.extend({
                        content: obj[i]
                    }, opts));
                }
            }
            selectedArray = jQuery.merge(selectedArray, obj);
        } else {
            if (typeof obj == 'object') {
                $(obj).data('fancybox', $.extend({}, opts, obj));
            } else {
                obj = $({}).data('fancybox', $.extend({
                    content: obj
                }, opts));
            }
            selectedArray.push(obj);
        }
        fancybox_start();
    };
    $.fancybox.showActivity = function() {
        clearInterval(loadingTimer);
        loading.show();
        loadingTimer = setInterval(fancybox_animate_loading, 66);
    };
    $.fancybox.hideActivity = function() {
        loading.hide();
    };
    $.fancybox.next = function() {
        return $.fancybox.pos(currentIndex + 1);
    };
    $.fancybox.prev = function() {
        return $.fancybox.pos(currentIndex - 1);
    };
    $.fancybox.pos = function(pos) {
        if (busy) return;
        pos = parseInt(pos);
        if (pos > -1 && currentArray.length > pos) {
            selectedIndex = pos;
            fancybox_start();
        }
        if (currentOpts.cyclic && currentArray.length > 1 && pos < 0) {
            selectedIndex = currentArray.length - 1;
            fancybox_start();
        }
        if (currentOpts.cyclic && currentArray.length > 1 && pos >= currentArray.length) {
            selectedIndex = 0;
            fancybox_start();
        }
        return;
    };
    $.fancybox.cancel = function() {
        if (busy) return;
        busy = true;
        $.event.trigger('fancybox-cancel');
        fancybox_abort();
        if (selectedOpts && $.isFunction(selectedOpts.onCancel)) {
            selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
        };
        busy = false;
    };
    $.fancybox.close = function() {
        if (busy || wrap.is(':hidden')) return;
        busy = true;
        if (currentOpts && $.isFunction(currentOpts.onCleanup)) {
            if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
                busy = false;
                return;
            }
        };
        fancybox_abort();
        $(close.add(nav_left).add(nav_right)).hide();
        $('#fancybox-title').remove();
        wrap.add(inner).add(overlay).unbind();
        $(window).unbind("resize.fb scroll.fb");
        $(document).unbind('keydown.fb');

        function _cleanup() {
            overlay.fadeOut('fast');
            wrap.hide();
            $.event.trigger('fancybox-cleanup');
            inner.empty();
            if ($.isFunction(currentOpts.onClosed)) {
                currentOpts.onClosed(currentArray, currentIndex, currentOpts);
            }
            currentArray = selectedOpts = [];
            currentIndex = selectedIndex = 0;
            currentOpts = selectedOpts = {};
            busy = false;
        }
        inner.css('overflow', 'hidden');
        if (currentOpts.transitionOut == 'elastic') {
            start_pos = fancybox_get_zoom_from();
            var pos = wrap.position();
            final_pos = {
                top: pos.top,
                left: pos.left,
                width: wrap.width(),
                height: wrap.height()
            };
            if (currentOpts.opacity) {
                final_pos.opacity = 1;
            }
            fx.prop = 1;
            $(fx).animate({
                prop: 0
            }, {
                duration: currentOpts.speedOut,
                easing: currentOpts.easingOut,
                step: fancybox_draw,
                complete: _cleanup
            });
        } else {
            wrap.fadeOut(currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
        }
    };
    $.fancybox.resize = function() {
        if (busy || wrap.is(':hidden')) return;
        busy = true;
        var c = inner.wrapInner("<div style='overflow:auto'></div>").children();
        var h = c.height();
        wrap.css({
            height: h + (currentOpts.padding * 2) + titleh
        });
        inner.css({
            height: h
        });
        c.replaceWith(c.children());
        $.fancybox.center();
    };
    $.fancybox.center = function() {
        busy = true;
        var view = fancybox_get_viewport();
        var margin = currentOpts.margin;
        var to = {};
        to.top = view[3] + ((view[1] - ((wrap.height() - titleh) + (shadow * 2))) * 0.5);
        to.left = view[2] + ((view[0] - (wrap.width() + (shadow * 2))) * 0.5);
        to.top = Math.max(view[3] + margin, to.top);
        to.left = Math.max(view[2] + margin, to.left);
        wrap.css(to);
        busy = false;
    };

    function fancybox_abort() {
        loading.hide();
        imgPreloader.onerror = imgPreloader.onload = null;
        if (ajaxLoader) ajaxLoader.abort();
        tmp.empty();
    };

    function fancybox_error() {
        $.fancybox('<p id="fancybox_error">' + _resources.publicSiteContentNotLoaded + '<br />' + _resources.publicSiteTryAgainLater + '</p>', {
            'scrolling': 'no',
            'padding': 20,
            'transitionIn': 'none',
            'transitionOut': 'none'
        });
    };

    function fancybox_start() {
        fancybox_abort();
        var obj = selectedArray[selectedIndex];
        selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));
        var href, type, title = obj.title || $(obj).title || selectedOpts.title || '';
        if (obj.nodeName && !selectedOpts.orig) {
            selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
        }
        if (title == '' && selectedOpts.orig) title = selectedOpts.orig.attr('alt');
        if (obj.nodeName && (/^(?:javascript|#)/i).test(obj.href)) {
            href = selectedOpts.href || null;
        } else {
            href = selectedOpts.href || obj.href || null;
        }
        if (selectedOpts.type) {
            type = selectedOpts.type;
            if (!href) href = selectedOpts.content;
        } else if (selectedOpts.content) {
            type = 'html';
        } else if (href) {
            if (href.match(imageRegExp)) {
                type = 'image';
            } else if (href.match(swfRegExp)) {
                type = 'swf';
            } else if ($(obj).hasClass("iframe")) {
                type = 'iframe';
            } else if (href.match(/#/)) {
                obj = href.substr(href.indexOf("#"));
                type = $(obj).length > 0 ? 'inline' : 'ajax';
            } else {
                type = 'ajax';
            }
        } else {
            type = 'inline';
        }
        selectedOpts.type = type;
        selectedOpts.href = href;
        selectedOpts.title = title;
        if (selectedOpts.autoDimensions && selectedOpts.type !== 'iframe' && selectedOpts.type !== 'swf') {
            selectedOpts.width = 'auto';
            selectedOpts.height = 'auto';
        }
        if (selectedOpts.modal) {
            selectedOpts.overlayShow = true;
            selectedOpts.hideOnOverlayClick = false;
            selectedOpts.hideOnContentClick = false;
            selectedOpts.enableEscapeButton = false;
            selectedOpts.showCloseButton = false;
        }
        if ($.isFunction(selectedOpts.onStart)) {
            if (selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts) === false) {
                busy = false;
                return;
            }
        };
        tmp.css('padding', (shadow + selectedOpts.padding + selectedOpts.margin));
        $('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
            $(this).replaceWith(inner.children());
        });
        switch (type) {
            case 'html':
                tmp.html(selectedOpts.content);
                fancybox_process_inline();
                break;
            case 'inline':
                $('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind('fancybox-cleanup', function() {
                    $(this).replaceWith(inner.children());
                }).bind('fancybox-cancel', function() {
                    $(this).replaceWith(tmp.children());
                });
                $(obj).appendTo(tmp);
                fancybox_process_inline();
                break;
            case 'image':
                busy = false;
                $.fancybox.showActivity();
                imgPreloader = new Image;
                imgPreloader.onerror = function() {
                    fancybox_error();
                }
                imgPreloader.onload = function() {
                    imgPreloader.onerror = null;
                    imgPreloader.onload = null;
                    fancybox_process_image();
                }
                imgPreloader.src = href;
                break;
            case 'swf':
                var str = '';
                var emb = '';
                str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
                $.each(selectedOpts.swf, function(name, val) {
                    str += '<param name="' + name + '" value="' + val + '"></param>';
                    emb += ' ' + name + '="' + val + '"';
                });
                str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';
                tmp.html(str);
                fancybox_process_inline();
                break;
            case 'ajax':
                var selector = href.split('#', 2);
                var data = selectedOpts.ajax.data || {};
                if (selector.length > 1) {
                    href = selector[0];
                    typeof data == "string" ? data += '&selector=' + selector[1] : data['selector'] = selector[1];
                }
                busy = false;
                $.fancybox.showActivity();
                ajaxLoader = $.ajax($.extend(selectedOpts.ajax, {
                    url: href,
                    data: data,
                    error: fancybox_error,
                    success: function(data, textStatus, XMLHttpRequest) {
                        if (ajaxLoader.status == 200) {
                            tmp.html(data);
                            fancybox_process_inline();
                        }
                    }
                }));
                break;
            case 'iframe':
                $('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" scrolling="' + selectedOpts.scrolling + '" src="' + selectedOpts.href + '"></iframe>').appendTo(tmp);
                fancybox_show();
                break;
        }
    };

    function fancybox_process_image() {
        busy = true;
        selectedOpts.width = imgPreloader.width;
        selectedOpts.height = imgPreloader.height;
        $("<img />").attr({
            'id': 'fancybox-img',
            'src': imgPreloader.src,
            'alt': selectedOpts.title
        }).appendTo(tmp);
        fancybox_show();
    };

    function fancybox_process_inline() {
        tmp.width(selectedOpts.width);
        tmp.height(selectedOpts.height);
        if (selectedOpts.width == 'auto') selectedOpts.width = tmp.width();
        if (selectedOpts.height == 'auto') selectedOpts.height = tmp.height();
        fancybox_show();
    };

    function fancybox_show() {
        loading.hide();
        if (wrap.is(":visible") && $.isFunction(currentOpts.onCleanup)) {
            if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
                $.event.trigger('fancybox-cancel');
                busy = false;
                return;
            }
        };
        currentArray = selectedArray;
        currentIndex = selectedIndex;
        currentOpts = selectedOpts;
        inner.get(0).scrollTop = 0;
        inner.get(0).scrollLeft = 0;
        if (currentOpts.overlayShow) {
            if (isIE6) {
                $('select:not(#fancybox-tmp select)').filter(function() {
                    return this.style.visibility !== 'hidden';
                }).css({
                    'visibility': 'hidden'
                }).one('fancybox-cleanup', function() {
                    this.style.visibility = 'inherit';
                });
            }
            overlay.css({
                'background-color': currentOpts.overlayColor,
                'opacity': currentOpts.overlayOpacity
            }).unbind().show();
        }
        final_pos = fancybox_get_zoom_to();
        fancybox_process_title();
        if (wrap.is(":visible")) {
            $(close.add(nav_left).add(nav_right)).hide();
            var pos = wrap.position();
            start_pos = {
                top: pos.top,
                left: pos.left,
                width: wrap.width(),
                height: wrap.height()
            };
            var equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);
            inner.fadeOut(currentOpts.changeFade, function() {
                $.event.trigger('fancybox-change');
                inner.css({
                    top: currentOpts.padding,
                    left: currentOpts.padding,
                    width: Math.max(start_pos.width - (currentOpts.padding * 2), 1),
                    height: Math.max(start_pos.height - (currentOpts.padding * 2), 1)
                }).empty().css('overflow', 'hidden');

                function finish_resizing() {
                    inner.html(tmp.contents()).fadeIn(currentOpts.changeFade, _finish);
                }
                fx.prop = 0;
                $(fx).animate({
                    prop: 1
                }, {
                    duration: equal ? 0 : currentOpts.changeSpeed,
                    easing: currentOpts.easingChange,
                    step: fancybox_draw,
                    complete: finish_resizing
                });
            });
            return;
        }
        wrap.css('opacity', 1);
        if (currentOpts.transitionIn == 'elastic') {
            start_pos = fancybox_get_zoom_from();
            inner.css({
                top: currentOpts.padding,
                left: currentOpts.padding,
                width: Math.max(start_pos.width - (currentOpts.padding * 2), 1),
                height: Math.max(start_pos.height - (currentOpts.padding * 2), 1)
            }).html(tmp.contents());
            wrap.css(start_pos).show();
            if (currentOpts.opacity) final_pos.opacity = 0;
            fx.prop = 0;
            $(fx).animate({
                prop: 1
            }, {
                duration: currentOpts.speedIn,
                easing: currentOpts.easingIn,
                step: fancybox_draw,
                complete: _finish
            });
        } else {
            inner.css({
                top: currentOpts.padding,
                left: currentOpts.padding,
                width: Math.max(final_pos.width - (currentOpts.padding * 2), 1),
                height: Math.max(final_pos.height - (currentOpts.padding * 2) - titleh, 1)
            }).html(tmp.contents());
            wrap.css(final_pos).fadeIn(currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish);
        }
    };

    function fancybox_draw(pos) {
        var width = Math.round(start_pos.width + (final_pos.width - start_pos.width) * pos);
        var height = Math.round(start_pos.height + (final_pos.height - start_pos.height) * pos);
        var top = Math.round(start_pos.top + (final_pos.top - start_pos.top) * pos);
        var left = Math.round(start_pos.left + (final_pos.left - start_pos.left) * pos);
        wrap.css({
            'width': width + 'px',
            'height': height + 'px',
            'top': top + 'px',
            'left': left + 'px'
        });
        width = Math.max(width - currentOpts.padding * 2, 0);
        height = Math.max(height - (currentOpts.padding * 2 + (titleh * pos)), 0);
        inner.css({
            'width': width + 'px',
            'height': height + 'px'
        });
        if (typeof final_pos.opacity !== 'undefined') wrap.css('opacity', (pos < 0.5 ? 0.5 : pos));
    };

    function _finish() {
        inner.css('overflow', overflow = (currentOpts.scrolling == 'auto' ? (currentOpts.type == 'image' || currentOpts.type == 'iframe' || currentOpts.type == 'swf' ? 'hidden' : 'auto') : (currentOpts.scrolling == 'yes' ? 'auto' : 'visible')));
        if (!$.support.opacity) {
            inner.get(0).style.removeAttribute('filter');
            wrap.get(0).style.removeAttribute('filter');
        }
        $('#fancybox-title').show();
        if (currentOpts.hideOnContentClick) inner.one('click', $.fancybox.close);
        if (currentOpts.hideOnOverlayClick) overlay.one('click', $.fancybox.close);
        if (currentOpts.showCloseButton) close.show();
        fancybox_set_navigation();
        $(window).bind("resize.fb", $.fancybox.center);
        currentOpts.centerOnScroll ? $(window).bind("scroll.fb", $.fancybox.center) : $(window).unbind("scroll.fb");
        if ($.isFunction(currentOpts.onComplete)) currentOpts.onComplete(currentArray, currentIndex, currentOpts);
        busy = false;
        fancybox_preload_images();
    };

    function fancybox_get_zoom_to() {
        var view = fancybox_get_viewport();
        var to = {};
        var margin = currentOpts.margin;
        var resize = currentOpts.autoScale;
        var horizontal_space = (shadow + margin) * 2;
        var vertical_space = (shadow + margin) * 2;
        var double_padding = (currentOpts.padding * 2);
        if (currentOpts.width.toString().indexOf('%') > -1) {
            to.width = ((view[0] * parseFloat(currentOpts.width)) / 100) - (shadow * 2);
            resize = false;
        } else {
            to.width = currentOpts.width + double_padding;
        }
        if (currentOpts.height.toString().indexOf('%') > -1) {
            to.height = ((view[1] * parseFloat(currentOpts.height)) / 100) - (shadow * 2);
            resize = false;
        } else {
            to.height = currentOpts.height + double_padding;
        }
        if (resize && (to.width > (view[0] - horizontal_space) || to.height > (view[1] - vertical_space))) {
            if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
                horizontal_space += double_padding;
                vertical_space += double_padding;
                var ratio = Math.min(Math.min(view[0] - horizontal_space, currentOpts.width) / currentOpts.width, Math.min(view[1] - vertical_space, currentOpts.height) / currentOpts.height);
                to.width = Math.round(ratio * (to.width - double_padding)) + double_padding;
                to.height = Math.round(ratio * (to.height - double_padding)) + double_padding;
            } else {
                to.width = Math.min(to.width, (view[0] - horizontal_space));
                to.height = Math.min(to.height, (view[1] - vertical_space));
            }
        }
        to.top = view[3] + ((view[1] - (to.height + (shadow * 2))) * 0.5);
        to.left = view[2] + ((view[0] - (to.width + (shadow * 2))) * 0.5);
        if (currentOpts.autoScale == false) {
            to.top = Math.max(view[3] + margin, to.top);
            to.left = Math.max(view[2] + margin, to.left);
        }
        return to;
    };

    function fancybox_get_zoom_from() {
        var orig = selectedOpts.orig ? $(selectedOpts.orig) : false;
        var from = {};
        if (orig && orig.length) {
            var pos = fancybox_get_obj_pos(orig);
            from = {
                width: (pos.width + (currentOpts.padding * 2)),
                height: (pos.height + (currentOpts.padding * 2)),
                top: (pos.top - currentOpts.padding - shadow),
                left: (pos.left - currentOpts.padding - shadow)
            };
        } else {
            var view = fancybox_get_viewport();
            from = {
                width: 1,
                height: 1,
                top: view[3] + view[1] * 0.5,
                left: view[2] + view[0] * 0.5
            };
        }
        return from;
    };

    function fancybox_set_navigation() {
        $(document).unbind('keydown.fb').bind('keydown.fb', function(e) {
            if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
                e.preventDefault();
                $.fancybox.close();
            } else if (e.keyCode == 37) {
                e.preventDefault();
                $.fancybox.prev();
            } else if (e.keyCode == 39) {
                e.preventDefault();
                $.fancybox.next();
            }
        });
        if ($.fn.mousewheel) {
            wrap.unbind('mousewheel.fb');
            if (currentArray.length > 1) {
                wrap.bind('mousewheel.fb', function(e, delta) {
                    e.preventDefault();
                    if (busy || delta == 0) return;
                    delta > 0 ? $.fancybox.prev() : $.fancybox.next();
                });
            }
        }
        if (!currentOpts.showNavArrows) return;
        if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != 0) {
            nav_left.show();
        }
        if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length - 1)) {
            nav_right.show();
        }
    };

    function fancybox_preload_images() {
        if ((currentArray.length - 1) > currentIndex) {
            var href = currentArray[currentIndex + 1].href;
            if (typeof href !== 'undefined' && href.match(imageRegExp)) {
                var objNext = new Image();
                objNext.src = href;
            }
        }
        if (currentIndex > 0) {
            var href = currentArray[currentIndex - 1].href;
            if (typeof href !== 'undefined' && href.match(imageRegExp)) {
                var objNext = new Image();
                objNext.src = href;
            }
        }
    };

    function fancybox_animate_loading() {
        if (!loading.is(':visible')) {
            clearInterval(loadingTimer);
            return;
        }
        $('div', loading).css('top', (loadingFrame * -40) + 'px');
        loadingFrame = (loadingFrame + 1) % 12;
    };

    function fancybox_get_viewport() {
        return [$(window).width(), $(window).height(), $(document).scrollLeft(), $(document).scrollTop()];
    };

    function fancybox_get_obj_pos(obj) {
        var pos = obj.offset();
        pos.top += parseFloat(obj.css('paddingTop')) || 0;
        pos.left += parseFloat(obj.css('paddingLeft')) || 0;
        pos.top += parseFloat(obj.css('border-top-width')) || 0;
        pos.left += parseFloat(obj.css('border-left-width')) || 0;
        pos.width = obj.width();
        pos.height = obj.height();
        return pos;
    };

    function fancybox_process_title() {
        $('#fancybox-title').remove();
        titleh = 0;
        if (currentOpts.titleShow == false) return;
        var obj = currentArray[currentIndex];
        var title = currentOpts.title;
        title = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(title, currentArray, currentIndex, currentOpts) : fancybox_format_title(title);
        if (!title || title == '') return;
        var width = final_pos.width - (currentOpts.padding * 2);
        var titlec = 'fancybox-title-' + currentOpts.titlePosition;
        $('<div id="fancybox-title" class="' + titlec + '" />').css({
            'width': width,
            'paddingLeft': currentOpts.padding,
            'paddingRight': currentOpts.padding
        }).html(title).appendTo('body');
        switch (currentOpts.titlePosition) {
            case 'inside':
                titleh = $("#fancybox-title").outerHeight(true) - currentOpts.padding;
                final_pos.height += titleh;
                break;
            case 'over':
                $('#fancybox-title').css('bottom', currentOpts.padding);
                break;
            default:
                $('#fancybox-title').css('bottom', $("#fancybox-title").outerHeight(true) * -1);
                break;
        }
        $('#fancybox-title').appendTo(outer).hide();
        if (isIE6) {
            $('#fancybox-title span').fixPNG();
        }
    };

    function fancybox_format_title(title) {
        if (title && title.length) {
            switch (currentOpts.titlePosition) {
                case 'inside':
                    return title;
                    break;
                case 'over':
                    return '<span id="fancybox-title-over">' + title + '</span>';
                    break;
                default:
                    return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">' + title + '</span><span id="fancybox-title-right"></span></span>';
                    break;
            }
        }
        return false;
    };

    function fancybox_init() {
        if ($("#fancybox-wrap").length) return;
        $('body').append(tmp = $('<div id="fancybox-tmp"></div>'), loading = $('<div id="fancybox-loading"><div></div></div>'), overlay = $('<div id="fancybox-overlay"></div>'), wrap = $('<div id="fancybox-wrap"></div>'));
        outer = $('<div id="fancybox-outer"></div>').append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>').appendTo(wrap);
        outer.append(inner = $('<div id="fancybox-inner"></div>'), close = $('<a id="fancybox-close"></a>'), nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        close.click($.fancybox.close);
        loading.click($.fancybox.cancel);
        nav_left.click(function(e) {
            e.preventDefault();
            $.fancybox.prev();
        });
        nav_right.click(function(e) {
            e.preventDefault();
            $.fancybox.next();
        });
        if (!$.support.opacity) {
            outer.find('.fancy-bg').fixPNG();
        }
        if (isIE6) {
            $(close.add('.fancy-ico').add('div', loading)).fixPNG();
            overlay.get(0).style.setExpression('height', "document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
            loading.get(0).style.setExpression('top', "(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");
            outer.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>');
        }
    };
    $.fn.fancybox.defaults = {
        padding: 10,
        margin: 20,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: 'auto',
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {
            wmode: 'transparent'
        },
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.3,
        overlayColor: '#666',
        titleShow: true,
        titlePosition: 'outside',
        titleFormat: null,
        transitionIn: 'fade',
        transitionOut: 'fade',
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: 'fast',
        easingIn: 'swing',
        easingOut: 'swing',
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: true,
        onStart: null,
        onCancel: null,
        onComplete: null,
        onCleanup: null,
        onClosed: null
    };
    $(document).ready(function() {
        fancybox_init();
    });
})(jQuery);;
(function($) {
    $.fn.jCarouselLite = function(o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,
            speed: 200,
            easing: null,
            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,
            beforeStart: null,
            afterEnd: null,
            stopOnHover: false
        }, o || {});
        return this.each(function() {
            var running = false,
                animCss = o.vertical ? "top" : "left",
                sizeCss = o.vertical ? "height" : "width";
            var div = $(this),
                ul = $("ul", div),
                tLi = $("li", ul),
                tl = tLi.size(),
                v = o.visible;
            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
                o.start += v;
            }
            var li = $("li", ul),
                itemLength = li.size(),
                curr = o.start;
            div.css("visibility", "visible");
            li.css({
                overflow: "hidden",
                float: o.vertical ? "none" : "left"
            });
            ul.css({
                margin: "0",
                padding: "0",
                position: "relative",
                "list-style-type": "none",
                "z-index": "1"
            });
            div.css({
                overflow: "hidden",
                position: "relative",
                "z-index": "2",
                left: "0px"
            });
            var liSize = o.vertical ? height(li) : width(li);
            var ulSize = liSize * itemLength;
            var divSize = liSize * v;
            li.css({
                width: li.width(),
                height: li.height()
            });
            ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
            div.css(sizeCss, divSize + "px");
            if (o.btnPrev)
                $(o.btnPrev).click(function() {
                    return go(curr - o.scroll, "left");
                });
            if (o.btnNext)
                $(o.btnNext).click(function() {
                    return go(curr + o.scroll, "right");
                });
            if (o.btnGo)
                $.each(o.btnGo, function(i, val) {
                    $(val).click(function() {
                        return go(o.circular ? o.visible + i : i, "go");
                    });
                });
            if (o.mouseWheel && div.mousewheel)
                div.mousewheel(function(e, d) {
                    return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
                });
            if (o.auto) {
                autoScroll = setInterval(function() {
                    go(curr + o.scroll);
                }, o.auto + o.speed);
                if (o.stopOnHover) {
                    div.hover(function() {
                        clearInterval(autoScroll);
                    }, function() {
                        autoScroll = setInterval(function() {
                            go(curr + o.scroll);
                        }, o.auto + o.speed);
                    });
                }
            }

            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to, dir) {
                if (!running) {
                    if (o.beforeStart)
                        o.beforeStart.call(this, vis());
                    if (o.circular) {
                        if (to <= o.start - v - 1) {
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) {
                            ul.css(animCss, -((v) * liSize) + "px");
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {
                        if (to < 0 || to > itemLength - v) return;
                        else curr = to;
                    }
                    running = true;
                    ul.animate(animCss == "left" ? {
                        left: -(curr * liSize)
                    } : {
                        top: -(curr * liSize)
                    }, o.speed, o.easing, function() {
                        if (o.afterEnd)
                            o.afterEnd.call(this, vis(), dir);
                        running = false;
                    });
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled");
                    }
                }
                return false;
            };
        });
    };

    function css(el, prop) {
        return parseInt($.css(el[0], prop)) || 0;
    };

    function width(el) {
        return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
    };

    function height(el) {
        return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
    };
})(jQuery);;;
(function($) {
    $.fn.ajaxSubmit = function(options) {
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }
        if (typeof options == 'function')
            options = {
                success: options
            };
        var url = $.trim(this.attr('action'));
        if (url) {
            url = (url.match(/^([^#]+)/) || [])[1];
        }
        url = url || window.location.href || ''
        options = $.extend({
            url: url,
            type: this.attr('method') || 'GET'
        }, options || {});
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }
        var a = this.formToArray(options.semantic);
        if (options.data) {
            options.extraData = options.data;
            for (var n in options.data) {
                if (options.data[n] instanceof Array) {
                    for (var k in options.data[n])
                        a.push({
                            name: n,
                            value: options.data[n][k]
                        });
                } else
                    a.push({
                        name: n,
                        value: options.data[n]
                    });
            }
        }
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }
        var q = $.param(a);
        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null;
        } else
            options.data = q;
        var $form = this,
            callbacks = [];
        if (options.resetForm) callbacks.push(function() {
            $form.resetForm();
        });
        if (options.clearForm) callbacks.push(function() {
            $form.clearForm();
        });
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data) {
                $(options.target).html(data).each(oldSuccess, arguments);
            });
        } else if (options.success)
            callbacks.push(options.success);
        options.success = function(data, status) {
            for (var i = 0, max = callbacks.length; i < max; i++)
                callbacks[i].apply(options, [data, status, $form]);
        };
        var files = $('input:file', this).fieldValue();
        var found = false;
        for (var j = 0; j < files.length; j++)
            if (files[j])
                found = true;
        var multipart = false;
        if (options.iframe || found || multipart) {
            if (options.closeKeepAlive)
                $.get(options.closeKeepAlive, fileUpload);
            else
                fileUpload();
        } else
            $.ajax(options);
        this.trigger('form-submit-notify', [this, options]);
        return this;

        function fileUpload() {
            var form = $form[0];
            if ($(':input[name=submit]', form).length) {
                alert('Error: Form elements must not be named "submit".');
                return;
            }
            var opts = $.extend({}, $.ajaxSettings, options);
            var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);
            var id = 'jqFormIO' + (new Date().getTime());
            var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
            var io = $io[0];
            $io.css({
                position: 'absolute',
                top: '-1000px',
                left: '-1000px'
            });
            var xhr = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function() {
                    this.aborted = 1;
                    $io.attr('src', 'about:blank');
                }
            };
            var g = opts.global;
            if (g && !$.active++) $.event.trigger("ajaxStart");
            if (g) $.event.trigger("ajaxSend", [xhr, opts]);
            if (s.beforeSend && s.beforeSend(xhr, s) === false) {
                s.global && $.active--;
                return;
            }
            if (xhr.aborted)
                return;
            var cbInvoked = 0;
            var timedOut = 0;
            var sub = form.clk;
            if (sub) {
                var n = sub.name;
                if (n && !sub.disabled) {
                    options.extraData = options.extraData || {};
                    options.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        options.extraData[name + '.x'] = form.clk_x;
                        options.extraData[name + '.y'] = form.clk_y;
                    }
                }
            }
            setTimeout(function() {
                var t = $form.attr('target'),
                    a = $form.attr('action');
                form.setAttribute('target', id);
                if (form.getAttribute('method') != 'POST')
                    form.setAttribute('method', 'POST');
                if (form.getAttribute('action') != opts.url)
                    form.setAttribute('action', opts.url);
                if (!options.skipEncodingOverride) {
                    $form.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    });
                }
                if (opts.timeout)
                    setTimeout(function() {
                        timedOut = true;
                        cb();
                    }, opts.timeout);
                var extraInputs = [];
                try {
                    if (options.extraData)
                        for (var n in options.extraData)
                            extraInputs.push($('<input type="hidden" name="' + n + '" value="' + options.extraData[n] + '" />').appendTo(form)[0]);
                    $io.appendTo('body');
                    io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                    form.submit();
                } finally {
                    form.setAttribute('action', a);
                    t ? form.setAttribute('target', t) : $form.removeAttr('target');
                    $(extraInputs).remove();
                }
            }, 10);
            var nullCheckFlag = 0;

            function cb() {
                if (cbInvoked++) return;
                io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);
                var ok = true;
                try {
                    if (timedOut) throw 'timeout';
                    var data, doc;
                    doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                    if ((doc.body == null || doc.body.innerHTML == '') && !nullCheckFlag) {
                        nullCheckFlag = 1;
                        cbInvoked--;
                        setTimeout(cb, 100);
                        return;
                    }
                    xhr.responseText = doc.body ? doc.body.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    xhr.getResponseHeader = function(header) {
                        var headers = {
                            'content-type': opts.dataType
                        };
                        return headers[header];
                    };
                    if (opts.dataType == 'json' || opts.dataType == 'script') {
                        var ta = doc.getElementsByTagName('textarea')[0];
                        xhr.responseText = ta ? ta.value : xhr.responseText;
                    } else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                        xhr.responseXML = toXml(xhr.responseText);
                    }
                    data = $.httpData(xhr, opts.dataType);
                } catch (e) {
                    ok = false;
                    $.handleError(opts, xhr, 'error', e);
                }
                if (ok) {
                    opts.success(data, 'success');
                    if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
                }
                if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
                if (g && !--$.active) $.event.trigger("ajaxStop");
                if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');
                setTimeout(function() {
                    $io.remove();
                    xhr.responseXML = null;
                }, 100);
            };

            function toXml(s, doc) {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                } else
                    doc = (new DOMParser()).parseFromString(s, 'text/xml');
                return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
            };
        };
    };
    $.fn.ajaxForm = function(options) {
        return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
            $(this).ajaxSubmit(options);
            return false;
        }).each(function() {
            $(":submit,input:image", this).bind('click.form-plugin', function(e) {
                var form = this.form;
                form.clk = this;
                if (this.type == 'image') {
                    if (e.offsetX != undefined) {
                        form.clk_x = e.offsetX;
                        form.clk_y = e.offsetY;
                    } else if (typeof $.fn.offset == 'function') {
                        var offset = $(this).offset();
                        form.clk_x = e.pageX - offset.left;
                        form.clk_y = e.pageY - offset.top;
                    } else {
                        form.clk_x = e.pageX - this.offsetLeft;
                        form.clk_y = e.pageY - this.offsetTop;
                    }
                }
                setTimeout(function() {
                    form.clk = form.clk_x = form.clk_y = null;
                }, 10);
            });
        });
    };
    $.fn.ajaxFormUnbind = function() {
        this.unbind('submit.form-plugin');
        return this.each(function() {
            $(":submit,input:image", this).unbind('click.form-plugin');
        });
    };
    $.fn.formToArray = function(semantic) {
        var a = [];
        if (this.length == 0) return a;
        var form = this[0];
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        if (!els) return a;
        for (var i = 0, max = els.length; i < max; i++) {
            var el = els[i];
            var n = el.name;
            if (!n) continue;
            if (semantic && form.clk && el.type == "image") {
                if (!el.disabled && form.clk == el) {
                    a.push({
                        name: n,
                        value: $(el).val()
                    });
                    a.push({
                        name: n + '.x',
                        value: form.clk_x
                    }, {
                        name: n + '.y',
                        value: form.clk_y
                    });
                }
                continue;
            }
            var v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                for (var j = 0, jmax = v.length; j < jmax; j++)
                    a.push({
                        name: n,
                        value: v[j]
                    });
            } else if (v !== null && typeof v != 'undefined')
                a.push({
                    name: n,
                    value: v
                });
        }
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0],
                n = input.name;
            if (n && !input.disabled && input.type == 'image') {
                a.push({
                    name: n,
                    value: $input.val()
                });
                a.push({
                    name: n + '.x',
                    value: form.clk_x
                }, {
                    name: n + '.y',
                    value: form.clk_y
                });
            }
        }
        return a;
    };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic));
    };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) return;
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i = 0, max = v.length; i < max; i++)
                    a.push({
                        name: n,
                        value: v[i]
                    });
            } else if (v !== null && typeof v != 'undefined')
                a.push({
                    name: this.name,
                    value: v
                });
        });
        return $.param(a);
    };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
                continue;
            v.constructor == Array ? $.merge(val, v) : val.push(v);
        }
        return val;
    };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (typeof successful == 'undefined') successful = true;
        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1))
            return null;
        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) return null;
            var a = [],
                ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v)
                        v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                    if (one) return v;
                    a.push(v);
                }
            }
            return a;
        }
        return el.value;
    };
    $.fn.clearForm = function() {
        return this.each(function() {
            $('input,select,textarea', this).clearFields();
        });
    };
    $.fn.clearFields = $.fn.clearInputs = function() {
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            if (t == 'text' || t == 'password' || tag == 'textarea')
                this.value = '';
            else if (t == 'checkbox' || t == 'radio')
                this.checked = false;
            else if (tag == 'select')
                this.selectedIndex = -1;
        });
    };
    $.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
                this.reset();
        });
    };
    $.fn.enable = function(b) {
        if (b == undefined) b = true;
        return this.each(function() {
            this.disabled = !b;
        });
    };
    $.fn.selected = function(select) {
        if (select == undefined) select = true;
        return this.each(function() {
            var t = this.type;
            if (t == 'checkbox' || t == 'radio')
                this.checked = select;
            else if (this.tagName.toLowerCase() == 'option') {
                var $sel = $(this).parent('select');
                if (select && $sel[0] && $sel[0].type == 'select-one') {
                    $sel.find('option').selected(false);
                }
                this.selected = select;
            }
        });
    };

    function log() {
        if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
            window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments, ''));
    };
})(jQuery);;
var utils = {
    appendParam: function(url, name, value) {
        return url + (url.indexOf("?") < 0 ? "?" : "&") +
            name + "=" + value;
    },
    getByID: function(arr, id) {
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            if (obj && obj.id == id) {
                return obj;
            }
        }
        return null;
    },
    getGLatLng: function($el) {
        var lat = new Number($el.attr("lat"));
        var lng = new Number($el.attr("lng"));
        return new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    },
    getQueryString: function(options) {
        defaults = {
            defaultvalue: null
        };
        options = $.extend(defaults, options);
        var qs = options.url;
        if (qs == null) {
            qs = location.search.substring(1, location.search.length);
        }
        if (qs.length == 0)
            return options.defaultvalue;
        qs = qs.replace(/\+/g, ' ');
        var args = qs.split('&');
        for (var i = 0; i < args.length; i++) {
            var value;
            var pair = args[i].split('=');
            var name = unescape(pair[0]);
            if (pair.length == 2)
                value = unescape(pair[1]);
            else
                value = name;
            if (name == options.id || i == options.id - 1)
                return value;
        }
        return options.defaultvalue;
    },
    getUrlWithoutHost: function(encode) {
        var href = window.location.href;
        var count = 0;
        for (var i = 0; i < href.length; i++) {
            if (href[i] == '/') {
                count++;
                if (count == 3) {
                    var url = href.substring(i);
                    return encode ? utils.urlEncode(url) : url;
                }
            }
        }
        return "/";
    },
    inArray: function(val, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val)
                return true;
        }
        return false;
    },
    is: function(o) {
        return (typeof(o) != "undefined" && o != null);
    },
    urlDecode: function(s) {
        var o = s;
        var binVal, t;
        var r = /(%[^%]{2})/;
        while ((m = r.exec(o)) != null && m.length > 1 && m[1] != '') {
            b = parseInt(m[1].substr(1), 16);
            t = String.fromCharCode(b);
            o = o.replace(m[1], t);
        }
        return o;
    },
    urlEncode: function(c) {
        var o = '';
        var x = 0;
        c = c.toString();
        var r = /(^[a-zA-Z0-9_.]*)/;
        while (x < c.length) {
            var m = r.exec(c.substr(x));
            if (m != null && m.length > 1 && m[1] != '') {
                o += m[1];
                x += m[1].length;
            } else {
                if (c[x] == ' ') o += '+';
                else {
                    var d = c.charCodeAt(x);
                    var h = d.toString(16);
                    o += '%' + (h.length < 2 ? '0' : '') + h.toUpperCase();
                }
                x++;
            }
        }
        return o;
    },
    popupWin: function(opts) {
        var features = "width=" + opts.width + ",height=" + opts.height + ",status=" + (opts.status ? "1" : "0") + ",resizable=" + (opts.resizable ? "1" : "0") + ",scrollbars=" + (opts.scrollbars ? "1" : "0");
        window.open(opts.href, opts.name, features);
    }
};
(function($) {
    $.extend($.expr[":"], {
        regex: function(a, i, m, r) {
            r = new RegExp(m[3], 'i');
            return r.test($(a).val());
        }
    });
    $.fn.appendSiteGuid = function() {
        return this.each(function() {
            var $this = $(this);
            if ($this.find("input[name=siteguid]").length == 0) {
                $this.append('<input name="siteguid" type="hidden" value="' +
                    $("body").attr("siteguid") + '" />')
            }
        });
    };
    $.fn.googleMap = function(options, style) {
        return this.each(function() {
            googleMapsV3.init(this, options, style);
        });
    };
    $.fn.harcourtsForm = function(options) {
        function displayValidationSummary(result, options) {
            if (!options.validationSelector) {
                options.validationSelector = ".validationSummary";
            }
            var $validationSummary = $(options.validationSelector);
            if ($validationSummary.length == 0) {
                alert(result.ValidationSummary);
            } else {
                $validationSummary.show().html(result.ValidationSummary.replace(/\r\n/g, "<br />"));
            }
        };
        this.appendSiteGuid();
        return this.each(function() {
            var $this = $(this);
            var siteGuid = $("body").attr("siteguid");
            if (siteGuid) {
                var $siteGuid = $this.find("input[name=siteguid]");
                if ($siteGuid.length == 0) {
                    $this.append('<input name="siteguid" type="hidden" value="' +
                        siteGuid + '" />');
                }
            }
            var $fields = $this.find(":input");
            if (!options.allowAutoComplete) {
                $fields.not("[type=hidden]").attr("autocomplete", "off");
            } else {
                $fields.not("[type=hidden]").attr("autocomplete", "on");
            }
            if (options.clearFields) {
                $fields.not("[type=hidden]").clearFields();
            }
            var $captchaKey = $this.find("input[name=captchaKey],input[name=" +
                options.namePrefix + "CaptchaKey]");
            var $captchaForm = $(".frmCaptcha, .regCaptcha");
            if ($captchaForm.length == 1)
                $captchaForm.hide();
            var $input = $("#formEnquiry input, #formEnquiry textarea, #formRegister input");
            if ($input.length > 0) {
                $input.click(function() {
                    checkCaptcha(options);
                });
            }
            $this.find(".btn").click(function(event) {
                event.preventDefault();
                validateAndPost();
                return false;
            });
            $this.find("input").keypress(function(event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                    validateAndPost();
                    return false;
                }
            });

            function checkCaptcha(options) {
                if (($captchaKey.length == 1 && $captchaKey.val() == "") || $captchaForm.is(':hidden')) {
                    $.post("/Default/GetCaptcha", {}, function(captchaKeyString) {
                        $captchaKey.val(captchaKeyString);
                        $(".captchaImage").attr("src", "/images/Captcha.ashx?key=" + captchaKeyString);
                        if ($captchaForm.length == 1)
                            $captchaForm.show();
                    });
                }
            };

            function validateAndPost() {
                if ($.browser.msie) {
                    var form = $this.closest('form')[0];
                    window.external.AutoCompleteSaveForm(form);
                }
                var result = $this.harcourtsValidate(options.namePrefix);
                if (!result.IsValid) {
                    displayValidationSummary(result, options);
                    return false;
                }
                $.post(options.url, $fields.serialize(false), function(result) {
                    if ($captchaKey.length == 1 && result.CaptchaKey) {
                        $captchaKey.val(result.CaptchaKey);
                        $this.find(".captchaImage").attr("src", "/images/Captcha.ashx?key=" + result.CaptchaKey);
                        var $captcha = $("input[name=captcha],input[name=" +
                            options.namePrefix + "Captcha]");
                        $captcha.val("");
                        $captcha.focus();
                    }
                    if (!result.IsValid) {
                        for (var i = 0; i < result.Errors.length; i++) {
                            var $el = $($this.find("[name=" + result.Errors[i].Key + "],[name=" + options.namePrefix + result.Errors[i].Key + "]"));
                            $el.addClass("error");
                        }
                        $this.trigger("formError");
                        displayValidationSummary(result, options);
                        return false;
                    }
                    $this.trigger("formSuccess");
                    $fields.not("[type=hidden]").clearFields();
                    if (result.SuccessMessage) {
                        if ($captchaForm.length == 1)
                            $captchaForm.hide();
                        if ($captchaKey.length == 1)
                            $captchaKey.val("");
                        alert(result.SuccessMessage);
                    }
                    if (result.SuccessUrl) {
                        window.location = result.SuccessUrl;
                    }
                }, "json");
                return false;
            };
        });
    };
    $.fn.setPosition = function(position) {
        return this.each(function() {
            $(this).css({
                position: "absolute",
                marginLeft: 0,
                marginTop: 0,
                top: position.top,
                left: position.left
            });
        });
    };
    $.fn.scrollPaging = function(options, callback) {
        return this.each(function() {
            var percentage = 40;
            var $outerThis = $(this);
            var isFirstScroll = true;
            var previousItemCount = 0;
            var previousHeight = 0;
            var triggerEventScrollTop = 0;
            var triggerEventScrollTopIncrement = 0;
            var pageHeight;
            $outerThis.scroll(function(data) {
                if (!utils.is(options)) {
                    alert("options is a required argument.");
                    return;
                }
                if (!utils.is(options.pageIndex)) {
                    alert("options.pageIndex is a required property.");
                    return;
                }
                if (!utils.is(options.pageSize)) {
                    alert("options.pageSize is a required property.");
                    return;
                }
                if (!utils.is(options.totalCount)) {
                    alert("options.totalCount is a required property.");
                    return;
                }
                if (options.pageIndex * options.pageSize + options.pageSize >= options.totalCount) {
                    return;
                }
                var $this = $(this);
                var height = $this.children("ul").height();
                var itemCount = $this.find(">ul li").length;
                if (height < previousHeight) {
                    isFirstScroll = true;
                    previousHeight = height;
                }
                if (isFirstScroll) {
                    pageHeight = height;
                    triggerEventScrollTopIncrement = pageHeight * percentage / 100;
                    triggerEventScrollTop = triggerEventScrollTopIncrement;
                    previousItemCount = 0;
                    isFirstScroll = false;
                }
                if ($this.scrollTop() >= triggerEventScrollTop) {
                    if (itemCount <= previousItemCount) {
                        return;
                    }
                    triggerEventScrollTop += pageHeight;
                    previousItemCount = itemCount;
                    previousHeight = height;
                    options.pageIndex++;
                    callback.apply(this, [options]);
                }
            })
        })
    };
    $.fn.streetView = function(options) {
        return this.each(function() {
            if (options.url) {
                var ll = utils.getQueryString({
                    id: "cbll",
                    url: options.url
                }).split(',');
                options.latlng = new google.maps.LatLng(new Number(ll[0]), new Number(ll[1]));
                var cbp = utils.getQueryString({
                    id: "cbp",
                    url: options.url
                }).split(',');
                options.pov = {
                    pitch: cbp[4],
                    yaw: cbp[1]
                };
            }
            var $this = $(this);
            new GStreetviewClient().getNearestPanoramaLatLng(options.latlng, function(glatlng) {
                if (glatlng) {
                    $this.trigger("hasnearbypanoramas");
                } else {
                    $this.trigger("nonearbypanoramas", glatlng);
                }
            });
            this.pan = new GStreetviewPanorama(this, options);
            google.maps.event.addListener(this.pan, "error", function(errorCode) {
                $this.trigger("error");
                if (errorCode == 600) {} else if (errorCode == 603) {
                    alert("Error: Flash doesn't appear to be supported by your browser");
                } else {
                    alert("Street view panorama error: " + errorCode);
                }
            });
            return false;
        });
    };
    $.fn.htabs = function($divs, activeTabClassName) {
        if (!activeTabClassName) {
            activeTabClassName = "active";
        }
        var $this = $(this);
        if (this.length == 0) {
            alert("No tabs have been selected");
        }
        if (this.length != $divs.length) {
            alert("The number of divs for tabs does not match the number of tabs.");
            return this;
        }
        if ($this.filter("." + activeTabClassName).length == 0) {
            $($this[0]).addClass(activeTabClassName);
        }
        $divs.show().addClass("offscreen");
        return this.each(function(n) {
            var $div = $($divs[n]);
            if ($(this).hasClass(activeTabClassName)) {
                $div.show().removeClass("offscreen");
            }
            var $outerThis = $(this);
            $(this).click(function() {
                if ($(this).hasClass(activeTabClassName)) {
                    return false;
                }
                $this.removeClass(activeTabClassName);
                $(this).addClass(activeTabClassName);
                $divs.addClass("offscreen");
                $div.removeClass("offscreen");
                $(this).trigger("tabChange", this);
                return false;
            });
        });
    };
    $.fn.toggleVisibility = function() {
        return this.each(function() {
            if ($(this).is(":visible")) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    };
    $.fn.harcourtsValidate = function(namePrefix) {
        var $this = $(this);
        var result = {
            ValidationSummary: null,
            Errors: [],
            IsValid: false
        };
        $this.find(":input").removeClass("error");
        var $compareToFields = $this.find("input[compareto],textarea[compareto]");
        var $requiredFields = $this.find("input[isrequired=true],textarea[isrequired=true]");
        var $regexFields = $this.find("input[regex],textarea[regex]");
        $compareToFields.each(function() {
            var $el = $(this);
            var $elCompareTo = $this.find("[name=" + $el.attr("compareto") + "]");
            var elValue = $.trim($el.val());
            var elCompareToValue = $.trim($elCompareTo.val());
            if (elValue != elCompareToValue) {
                result.Errors[result.Errors.length] = {
                    Key: $el.attr("name"),
                    ErrorMessage: $el.attr("errormessage")
                };
            }
        });
        $requiredFields.each(function() {
            var $el = $(this);
            $el.val($.trim($el.val()));
            if (($el.is(":checkbox") && !$el.is(":checked")) || $el.val() == "") {
                result.Errors[result.Errors.length] = {
                    Key: $el.attr("name"),
                    ErrorMessage: $el.attr("errormessage")
                };
            }
        });
        $regexFields.each(function() {
            var $el = $(this);
            $el.val($.trim($el.val()));
            if ($el.val() != "" && $el.filter(":regex(" + $el.attr("regex") + ")").length != 1) {
                result.Errors[result.Errors.length] = {
                    Key: $el.attr("name"),
                    ErrorMessage: $el.attr("regexerrormessage")
                };
            }
        });
        result.IsValid = true;
        if (result.Errors.length > 0) {
            result.IsValid = false;
            result.ValidationSummary = "";
            for (var i = 0; i < result.Errors.length; i++) {
                result.ValidationSummary += "- " + result.Errors[i].ErrorMessage;
                if (result.ValidationSummary.substr(-1) != ".") {
                    result.ValidationSummary += ".";
                }
                result.ValidationSummary += "\r\n";
                $("[name=" + result.Errors[i].Key + "],[name=" + namePrefix +
                    result.Errors[i].Key + "],").addClass("error");
            }
            if ($this.attr("errormessageprefix")) {
                result.ValidationSummary = $this.attr("errormessageprefix") + "\r\n\r\n" + result.ValidationSummary;
            }
            if ($this.attr("errormessagesuffix")) {
                result.ValidationSummary += "\r\n" + $this.attr("errormessagesuffix");
            }
        }
        return result;
    };
})(jQuery);;
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
jQuery.cookieKey = function(cookie, subkey) {
    if (typeof(cookie) == 'undefined' || cookie == null || cookie.length == 0) return;
    var kvpArr = cookie.split("&");
    for (i = 0; i < kvpArr.length; i++) {
        var kvp = kvpArr[i].split("=");
        if (kvp[0] == subkey) {
            return kvp[1];
        }
    }
    return;
};;
(function(c) {
    var a = ["DOMMouseScroll", "mousewheel"];
    c.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var d = a.length; d;) {
                    this.addEventListener(a[--d], b, false)
                }
            } else {
                this.onmousewheel = b
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var d = a.length; d;) {
                    this.removeEventListener(a[--d], b, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    c.fn.extend({
        mousewheel: function(d) {
            return d ? this.bind("mousewheel", d) : this.trigger("mousewheel")
        },
        unmousewheel: function(d) {
            return this.unbind("mousewheel", d)
        }
    });

    function b(f) {
        var d = [].slice.call(arguments, 1),
            g = 0,
            e = true;
        f = c.event.fix(f || window.event);
        f.type = "mousewheel";
        if (f.wheelDelta) {
            g = f.wheelDelta / 120
        }
        if (f.detail) {
            g = -f.detail / 3
        }
        d.unshift(f, g);
        return c.event.handle.apply(this, d)
    }
})(jQuery);;
(function($) {
    $.fn.hoverIntent = function(f, g) {
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);
        var cX, cY, pX, pY;
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };
        var handleHover = function(e) {
            var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
            while (p && p != this) {
                try {
                    p = p.parentNode;
                } catch (e) {
                    p = this;
                }
            }
            if (p == this) {
                return false;
            }
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            if (e.type == "mouseover") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        return this.mouseover(handleHover).mouseout(handleHover);
    };
})(jQuery);;
(function(b, a, c) {
    b.fn.jScrollPane = function(f) {
        function d(D, N) {
            var ay, P = this,
                X, aj, w, al, S, Y, z, r, az, aE, au, j, I, i, k, Z, T, ap, W, u, B, aq, ae, am, G, m, at, ax, y, av, aH, g, K, ai = true,
                O = true,
                aG = false,
                l = false,
                ao = D.clone(false, false).empty(),
                ab = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            aH = D.css("paddingTop") + " " + D.css("paddingRight") + " " + D.css("paddingBottom") + " " + D.css("paddingLeft");
            g = (parseInt(D.css("paddingLeft"), 10) || 0) + (parseInt(D.css("paddingRight"), 10) || 0);

            function ar(aQ) {
                var aO, aP, aK, aM, aL, aJ, aI, aN;
                ay = aQ;
                if (X === c) {
                    aI = D.scrollTop();
                    aN = D.scrollLeft();
                    D.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    aj = D.innerWidth() + g;
                    w = D.innerHeight();
                    D.width(aj);
                    X = b('<div class="jspPane" />').css("padding", aH).append(D.children());
                    al = b('<div class="jspContainer" />').css({
                        width: aj + "px",
                        height: w + "px"
                    }).append(X).appendTo(D)
                } else {
                    D.css("width", "");
                    aJ = D.innerWidth() + g != aj || D.outerHeight() != w;
                    if (aJ) {
                        aj = D.innerWidth() + g;
                        w = D.innerHeight();
                        al.css({
                            width: aj + "px",
                            height: w + "px"
                        })
                    }
                    if (!aJ && K == S && X.outerHeight() == Y) {
                        D.width(aj);
                        return
                    }
                    K = S;
                    X.css("width", "");
                    D.width(aj);
                    al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                aO = X.clone(false, false).css("position", "absolute");
                aP = b('<div style="width:1px; position: relative;" />').append(aO);
                b("body").append(aP);
                S = Math.max(X.outerWidth(), aO.outerWidth());
                aP.remove();
                Y = X.outerHeight();
                z = S / aj;
                r = Y / w;
                az = r > 1;
                aE = z > 1;
                if (!(aE || az)) {
                    D.removeClass("jspScrollable");
                    X.css({
                        top: 0,
                        width: al.width() - g
                    });
                    o();
                    E();
                    Q();
                    x();
                    ah()
                } else {
                    D.addClass("jspScrollable");
                    aK = ay.maintainPosition && (I || Z);
                    if (aK) {
                        aM = aC();
                        aL = aA()
                    }
                    aF();
                    A();
                    F();
                    if (aK) {
                        M(aM, false);
                        L(aL, false)
                    }
                    J();
                    af();
                    an();
                    if (ay.enableKeyboardNavigation) {
                        R()
                    }
                    if (ay.clickOnTrack) {
                        q()
                    }
                    C();
                    if (ay.hijackInternalLinks) {
                        n()
                    }
                }
                if (ay.autoReinitialise && !av) {
                    av = setInterval(function() {
                        ar(ay)
                    }, ay.autoReinitialiseDelay)
                } else {
                    if (!ay.autoReinitialise && av) {
                        clearInterval(av)
                    }
                }
                aI && D.scrollTop(0) && L(aI, false);
                aN && D.scrollLeft(0) && M(aN, false);
                D.trigger("jsp-initialised", [aE || az])
            }

            function aF() {
                if (az) {
                    al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />')));
                    T = al.find(">.jspVerticalBar");
                    ap = T.find(">.jspTrack");
                    au = ap.find(">.jspDrag");
                    if (ay.showArrows) {
                        aq = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", aD(0, -1)).bind("click.jsp", aB);
                        ae = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", aD(0, 1)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            aq.bind("mouseover.jsp", aD(0, -1, aq));
                            ae.bind("mouseover.jsp", aD(0, 1, ae))
                        }
                        ak(ap, ay.verticalArrowPositions, aq, ae)
                    }
                    u = w;
                    al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        u -= b(this).outerHeight()
                    });
                    au.hover(function() {
                        au.addClass("jspHover")
                    }, function() {
                        au.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        au.addClass("jspActive");
                        var s = aI.pageY - au.position().top;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            U(aJ.pageY - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    p()
                }
            }

            function p() {
                ap.height(u + "px");
                I = 0;
                W = ay.verticalGutter + ap.outerWidth();
                X.width(aj - W - g);
                if (T.position().left === 0) {
                    X.css("margin-left", W + "px")
                }
            }

            function A() {
                if (aE) {
                    al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))), b('<div class="jspCap jspCapRight" />')));
                    am = al.find(">.jspHorizontalBar");
                    G = am.find(">.jspTrack");
                    i = G.find(">.jspDrag");
                    if (ay.showArrows) {
                        ax = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", aD(-1, 0)).bind("click.jsp", aB);
                        y = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", aD(1, 0)).bind("click.jsp", aB);
                        if (ay.arrowScrollOnHover) {
                            ax.bind("mouseover.jsp", aD(-1, 0, ax));
                            y.bind("mouseover.jsp", aD(1, 0, y))
                        }
                        ak(G, ay.horizontalArrowPositions, ax, y)
                    }
                    i.hover(function() {
                        i.addClass("jspHover")
                    }, function() {
                        i.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aI) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aB);
                        i.addClass("jspActive");
                        var s = aI.pageX - i.position().left;
                        b("html").bind("mousemove.jsp", function(aJ) {
                            V(aJ.pageX - s, false)
                        }).bind("mouseup.jsp mouseleave.jsp", aw);
                        return false
                    });
                    m = al.innerWidth();
                    ag()
                }
            }

            function ag() {
                al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    m -= b(this).outerWidth()
                });
                G.width(m + "px");
                Z = 0
            }

            function F() {
                if (aE && az) {
                    var aI = G.outerHeight(),
                        s = ap.outerWidth();
                    u -= aI;
                    b(am).find(">.jspCap:visible,>.jspArrow").each(function() {
                        m += b(this).outerWidth()
                    });
                    m -= s;
                    w -= s;
                    aj -= aI;
                    G.parent().append(b('<div class="jspCorner" />').css("width", aI + "px"));
                    p();
                    ag()
                }
                if (aE) {
                    X.width((al.outerWidth() - g) + "px")
                }
                Y = X.outerHeight();
                r = Y / w;
                if (aE) {
                    at = Math.ceil(1 / z * m);
                    if (at > ay.horizontalDragMaxWidth) {
                        at = ay.horizontalDragMaxWidth
                    } else {
                        if (at < ay.horizontalDragMinWidth) {
                            at = ay.horizontalDragMinWidth
                        }
                    }
                    i.width(at + "px");
                    k = m - at;
                    ad(Z)
                }
                if (az) {
                    B = Math.ceil(1 / r * u);
                    if (B > ay.verticalDragMaxHeight) {
                        B = ay.verticalDragMaxHeight
                    } else {
                        if (B < ay.verticalDragMinHeight) {
                            B = ay.verticalDragMinHeight
                        }
                    }
                    au.height(B + "px");
                    j = u - B;
                    ac(I)
                }
            }

            function ak(aJ, aL, aI, s) {
                var aN = "before",
                    aK = "after",
                    aM;
                if (aL == "os") {
                    aL = /Mac/.test(navigator.platform) ? "after" : "split"
                }
                if (aL == aN) {
                    aK = aL
                } else {
                    if (aL == aK) {
                        aN = aL;
                        aM = aI;
                        aI = s;
                        s = aM
                    }
                }
                aJ[aN](aI)[aK](s)
            }

            function aD(aI, s, aJ) {
                return function() {
                    H(aI, s, this, aJ);
                    this.blur();
                    return false
                }
            }

            function H(aL, aK, aO, aN) {
                aO = b(aO).addClass("jspActive");
                var aM, aJ, aI = true,
                    s = function() {
                        if (aL !== 0) {
                            P.scrollByX(aL * ay.arrowButtonSpeed)
                        }
                        if (aK !== 0) {
                            P.scrollByY(aK * ay.arrowButtonSpeed)
                        }
                        aJ = setTimeout(s, aI ? ay.initialDelay : ay.arrowRepeatFreq);
                        aI = false
                    };
                s();
                aM = aN ? "mouseout.jsp" : "mouseup.jsp";
                aN = aN || b("html");
                aN.bind(aM, function() {
                    aO.removeClass("jspActive");
                    aJ && clearTimeout(aJ);
                    aJ = null;
                    aN.unbind(aM)
                })
            }

            function q() {
                x();
                if (az) {
                    ap.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this),
                                aO = aL.offset(),
                                aM = aN.pageY - aO.top - I,
                                aJ, aI = true,
                                s = function() {
                                    var aR = aL.offset(),
                                        aS = aN.pageY - aR.top - B / 2,
                                        aP = w * ay.scrollPagePercent,
                                        aQ = j * aP / (Y - w);
                                    if (aM < 0) {
                                        if (I - aQ > aS) {
                                            P.scrollByY(-aP)
                                        } else {
                                            U(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (I + aQ < aS) {
                                                P.scrollByY(aP)
                                            } else {
                                                U(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                },
                                aK = function() {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
                if (aE) {
                    G.bind("mousedown.jsp", function(aN) {
                        if (aN.originalTarget === c || aN.originalTarget == aN.currentTarget) {
                            var aL = b(this),
                                aO = aL.offset(),
                                aM = aN.pageX - aO.left - Z,
                                aJ, aI = true,
                                s = function() {
                                    var aR = aL.offset(),
                                        aS = aN.pageX - aR.left - at / 2,
                                        aP = aj * ay.scrollPagePercent,
                                        aQ = k * aP / (S - aj);
                                    if (aM < 0) {
                                        if (Z - aQ > aS) {
                                            P.scrollByX(-aP)
                                        } else {
                                            V(aS)
                                        }
                                    } else {
                                        if (aM > 0) {
                                            if (Z + aQ < aS) {
                                                P.scrollByX(aP)
                                            } else {
                                                V(aS)
                                            }
                                        } else {
                                            aK();
                                            return
                                        }
                                    }
                                    aJ = setTimeout(s, aI ? ay.initialDelay : ay.trackClickRepeatFreq);
                                    aI = false
                                },
                                aK = function() {
                                    aJ && clearTimeout(aJ);
                                    aJ = null;
                                    b(document).unbind("mouseup.jsp", aK)
                                };
                            s();
                            b(document).bind("mouseup.jsp", aK);
                            return false
                        }
                    })
                }
            }

            function x() {
                if (G) {
                    G.unbind("mousedown.jsp")
                }
                if (ap) {
                    ap.unbind("mousedown.jsp")
                }
            }

            function aw() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (au) {
                    au.removeClass("jspActive")
                }
                if (i) {
                    i.removeClass("jspActive")
                }
            }

            function U(s, aI) {
                if (!az) {
                    return
                }
                if (s < 0) {
                    s = 0
                } else {
                    if (s > j) {
                        s = j
                    }
                }
                if (aI === c) {
                    aI = ay.animateScroll
                }
                if (aI) {
                    P.animate(au, "top", s, ac)
                } else {
                    au.css("top", s);
                    ac(s)
                }
            }

            function ac(aI) {
                if (aI === c) {
                    aI = au.position().top
                }
                al.scrollTop(0);
                I = aI;
                var aL = I === 0,
                    aJ = I == j,
                    aK = aI / j,
                    s = -aK * (Y - w);
                if (ai != aL || aG != aJ) {
                    ai = aL;
                    aG = aJ;
                    D.trigger("jsp-arrow-change", [ai, aG, O, l])
                }
                v(aL, aJ);
                X.css("top", s);
                D.trigger("jsp-scroll-y", [-s, aL, aJ]).trigger("scroll")
            }

            function V(aI, s) {
                if (!aE) {
                    return
                }
                if (aI < 0) {
                    aI = 0
                } else {
                    if (aI > k) {
                        aI = k
                    }
                }
                if (s === c) {
                    s = ay.animateScroll
                }
                if (s) {
                    P.animate(i, "left", aI, ad)
                } else {
                    i.css("left", aI);
                    ad(aI)
                }
            }

            function ad(aI) {
                if (aI === c) {
                    aI = i.position().left
                }
                al.scrollTop(0);
                Z = aI;
                var aL = Z === 0,
                    aK = Z == k,
                    aJ = aI / k,
                    s = -aJ * (S - aj);
                if (O != aL || l != aK) {
                    O = aL;
                    l = aK;
                    D.trigger("jsp-arrow-change", [ai, aG, O, l])
                }
                t(aL, aK);
                X.css("left", s);
                D.trigger("jsp-scroll-x", [-s, aL, aK]).trigger("scroll")
            }

            function v(aI, s) {
                if (ay.showArrows) {
                    aq[aI ? "addClass" : "removeClass"]("jspDisabled");
                    ae[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function t(aI, s) {
                if (ay.showArrows) {
                    ax[aI ? "addClass" : "removeClass"]("jspDisabled");
                    y[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function L(s, aI) {
                var aJ = s / (Y - w);
                U(aJ * j, aI)
            }

            function M(aI, s) {
                var aJ = aI / (S - aj);
                V(aJ * k, s)
            }

            function aa(aU, aP, aJ) {
                var aN, aK, aL, s = 0,
                    aT = 0,
                    aI, aO, aR, aQ, aS;
                try {
                    aN = b(aU)
                } catch (aM) {
                    return
                }
                aK = aN.outerHeight();
                aL = aN.outerWidth();
                al.scrollTop(0);
                al.scrollLeft(0);
                while (!aN.is(".jspPane")) {
                    s += aN.position().top;
                    aT += aN.position().left;
                    aN = aN.offsetParent();
                    if (/^body|html$/i.test(aN[0].nodeName)) {
                        return
                    }
                }
                aI = aA();
                aO = aI + w;
                if (s < aI || aP) {
                    aQ = s - ay.verticalGutter
                } else {
                    if (s + aK > aO) {
                        aQ = s - w + aK + ay.verticalGutter
                    }
                }
                if (aQ) {
                    L(aQ, aJ)
                }
                viewportLeft = aC();
                aR = viewportLeft + aj;
                if (aT < viewportLeft || aP) {
                    aS = aT - ay.horizontalGutter
                } else {
                    if (aT + aL > aR) {
                        aS = aT - aj + aL + ay.horizontalGutter
                    }
                }
                if (aS) {
                    M(aS, aJ)
                }
            }

            function aC() {
                return -X.position().left
            }

            function aA() {
                return -X.position().top
            }

            function af() {
                al.unbind(ab).bind(ab, function(aL, aM, aK, aI) {
                    var aJ = Z,
                        s = I;
                    P.scrollBy(aK * ay.mouseWheelSpeed, -aI * ay.mouseWheelSpeed, false);
                    return aJ == Z && s == I
                })
            }

            function o() {
                al.unbind(ab)
            }

            function aB() {
                return false
            }

            function J() {
                X.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(s) {
                    aa(s.target, false)
                })
            }

            function E() {
                X.find(":input,a").unbind("focus.jsp")
            }

            function R() {
                var s, aI;
                X.focus(function() {
                    D.focus()
                });
                D.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(aM) {
                    if (aM.target !== this) {
                        return
                    }
                    var aL = Z,
                        aK = I;
                    switch (aM.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            s = aM.keyCode;
                            aJ();
                            break;
                        case 35:
                            L(Y - w);
                            s = null;
                            break;
                        case 36:
                            L(0);
                            s = null;
                            break
                    }
                    aI = aM.keyCode == s && aL != Z || aK != I;
                    return !aI
                }).bind("keypress.jsp", function(aK) {
                    if (aK.keyCode == s) {
                        aJ()
                    }
                    return !aI
                });
                if (ay.hideFocus) {
                    D.css("outline", "none");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", true)
                    }
                } else {
                    D.css("outline", "");
                    if ("hideFocus" in al[0]) {
                        D.attr("hideFocus", false)
                    }
                }

                function aJ() {
                    var aL = Z,
                        aK = I;
                    switch (s) {
                        case 40:
                            P.scrollByY(ay.keyboardSpeed, false);
                            break;
                        case 38:
                            P.scrollByY(-ay.keyboardSpeed, false);
                            break;
                        case 34:
                        case 32:
                            P.scrollByY(w * ay.scrollPagePercent, false);
                            break;
                        case 33:
                            P.scrollByY(-w * ay.scrollPagePercent, false);
                            break;
                        case 39:
                            P.scrollByX(ay.keyboardSpeed, false);
                            break;
                        case 37:
                            P.scrollByX(-ay.keyboardSpeed, false);
                            break
                    }
                    aI = aL != Z || aK != I;
                    return aI
                }
            }

            function Q() {
                D.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function C() {
                if (location.hash && location.hash.length > 1) {
                    var aJ, aI;
                    try {
                        aJ = b(location.hash)
                    } catch (s) {
                        return
                    }
                    if (aJ.length && X.find(location.hash)) {
                        if (al.scrollTop() === 0) {
                            aI = setInterval(function() {
                                if (al.scrollTop() > 0) {
                                    aa(location.hash, true);
                                    b(document).scrollTop(al.position().top);
                                    clearInterval(aI)
                                }
                            }, 50)
                        } else {
                            aa(location.hash, true);
                            b(document).scrollTop(al.position().top)
                        }
                    }
                }
            }

            function ah() {
                b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
            }

            function n() {
                ah();
                b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
                    var s = this.href.split("#"),
                        aI;
                    if (s.length > 1) {
                        aI = s[1];
                        if (aI.length > 0 && X.find("#" + aI).length > 0) {
                            aa("#" + aI, true);
                            return false
                        }
                    }
                })
            }

            function an() {
                var aJ, aI, aL, aK, aM, s = false;
                al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(aN) {
                    var aO = aN.originalEvent.touches[0];
                    aJ = aC();
                    aI = aA();
                    aL = aO.pageX;
                    aK = aO.pageY;
                    aM = false;
                    s = true
                }).bind("touchmove.jsp", function(aQ) {
                    if (!s) {
                        return
                    }
                    var aP = aQ.originalEvent.touches[0],
                        aO = Z,
                        aN = I;
                    P.scrollTo(aJ + aL - aP.pageX, aI + aK - aP.pageY);
                    aM = aM || Math.abs(aL - aP.pageX) > 5 || Math.abs(aK - aP.pageY) > 5;
                    return aO == Z && aN == I
                }).bind("touchend.jsp", function(aN) {
                    s = false
                }).bind("click.jsp-touchclick", function(aN) {
                    if (aM) {
                        aM = false;
                        return false
                    }
                })
            }

            function h() {
                var s = aA(),
                    aI = aC();
                D.removeClass("jspScrollable").unbind(".jsp");
                D.replaceWith(ao.append(X.children()));
                ao.scrollTop(s);
                ao.scrollLeft(aI)
            }
            b.extend(P, {
                reinitialise: function(aI) {
                    aI = b.extend({}, ay, aI);
                    ar(aI)
                },
                scrollToElement: function(aJ, aI, s) {
                    aa(aJ, aI, s)
                },
                scrollTo: function(aJ, s, aI) {
                    M(aJ, aI);
                    L(s, aI)
                },
                scrollToX: function(aI, s) {
                    M(aI, s)
                },
                scrollToY: function(s, aI) {
                    L(s, aI)
                },
                scrollToPercentX: function(aI, s) {
                    M(aI * (S - aj), s)
                },
                scrollToPercentY: function(aI, s) {
                    L(aI * (Y - w), s)
                },
                scrollBy: function(aI, s, aJ) {
                    P.scrollByX(aI, aJ);
                    P.scrollByY(s, aJ)
                },
                scrollByX: function(s, aJ) {
                    var aI = aC() + s,
                        aK = aI / (S - aj);
                    V(aK * k, aJ)
                },
                scrollByY: function(s, aJ) {
                    var aI = aA() + s,
                        aK = aI / (Y - w);
                    U(aK * j, aJ)
                },
                positionDragX: function(s, aI) {
                    V(s, aI)
                },
                positionDragY: function(aI, s) {
                    V(aI, s)
                },
                animate: function(aI, aL, s, aK) {
                    var aJ = {};
                    aJ[aL] = s;
                    aI.animate(aJ, {
                        duration: ay.animateDuration,
                        ease: ay.animateEase,
                        queue: false,
                        step: aK
                    })
                },
                getContentPositionX: function() {
                    return aC()
                },
                getContentPositionY: function() {
                    return aA()
                },
                getContentWidth: function() {
                    return S()
                },
                getContentHeight: function() {
                    return Y()
                },
                getPercentScrolledX: function() {
                    return aC() / (S - aj)
                },
                getPercentScrolledY: function() {
                    return aA() / (Y - w)
                },
                getIsScrollableH: function() {
                    return aE
                },
                getIsScrollableV: function() {
                    return az
                },
                getContentPane: function() {
                    return X
                },
                scrollToBottom: function(s) {
                    U(j, s)
                },
                hijackInternalLinks: function() {
                    n()
                },
                destroy: function() {
                    h()
                }
            });
            ar(N)
        }
        f = b.extend({}, b.fn.jScrollPane.defaults, f);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            f[this] = f[this] || f.speed
        });
        var e;
        this.each(function() {
            var g = b(this),
                h = g.data("jsp");
            if (h) {
                h.reinitialise(f)
            } else {
                h = new d(g, f);
                g.data("jsp", h)
            }
            e = e ? e.add(g) : g
        });
        return e
    };
    b.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        animateScroll: false,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: 0.8
    }
})(jQuery, this);;
(function($, window) {
    '$:nomunge';
    var undefined, aps = Array.prototype.slice,
        decode = decodeURIComponent,
        jq_param = $.param,
        jq_param_fragment, jq_deparam, jq_deparam_fragment, jq_bbq = $.bbq = $.bbq || {},
        jq_bbq_pushState, jq_bbq_getState, jq_elemUrlAttr, jq_event_special = $.event.special,
        str_hashchange = 'hashchange',
        str_querystring = 'querystring',
        str_fragment = 'fragment',
        str_elemUrlAttr = 'elemUrlAttr',
        str_location = 'location',
        str_href = 'href',
        str_src = 'src',
        re_trim_querystring = /^.*\?|#.*$/g,
        re_trim_fragment = /^.*\#/,
        re_no_escape, elemUrlAttr_cache = {};

    function is_string(arg) {
        return typeof arg === 'string';
    };

    function curry(func) {
        var args = aps.call(arguments, 1);
        return function() {
            return func.apply(this, args.concat(aps.call(arguments)));
        };
    };

    function get_fragment(url) {
        return url.replace(/^[^#]*#?(.*)$/, '$1');
    };

    function get_querystring(url) {
        return url.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, '$1');
    };

    function jq_param_sub(is_fragment, get_func, url, params, merge_mode) {
        var result, qs, matches, url_params, hash;
        if (params !== undefined) {
            matches = url.match(is_fragment ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/);
            hash = matches[3] || '';
            if (merge_mode === 2 && is_string(params)) {
                qs = params.replace(is_fragment ? re_trim_fragment : re_trim_querystring, '');
            } else {
                url_params = jq_deparam(matches[2]);
                params = is_string(params) ? jq_deparam[is_fragment ? str_fragment : str_querystring](params) : params;
                qs = merge_mode === 2 ? params : merge_mode === 1 ? $.extend({}, params, url_params) : $.extend({}, url_params, params);
                qs = jq_param(qs);
                if (is_fragment) {
                    qs = qs.replace(re_no_escape, decode);
                }
            }
            result = matches[1] + (is_fragment ? '#' : qs || !matches[1] ? '?' : '') + qs + hash;
        } else {
            result = get_func(url !== undefined ? url : window[str_location][str_href]);
        }
        return result;
    };
    jq_param[str_querystring] = curry(jq_param_sub, 0, get_querystring);
    jq_param[str_fragment] = jq_param_fragment = curry(jq_param_sub, 1, get_fragment);
    jq_param_fragment.noEscape = function(chars) {
        chars = chars || '';
        var arr = $.map(chars.split(''), encodeURIComponent);
        re_no_escape = new RegExp(arr.join('|'), 'g');
    };
    jq_param_fragment.noEscape(',/');
    $.deparam = jq_deparam = function(params, coerce) {
        var obj = {},
            coerce_types = {
                'true': !0,
                'false': !1,
                'null': null
            };
        $.each(params.replace(/\+/g, ' ').split('&'), function(j, v) {
            var param = v.split('='),
                key = decode(param[0]),
                val, cur = obj,
                i = 0,
                keys = key.split(']['),
                keys_last = keys.length - 1;
            if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
                keys[keys_last] = keys[keys_last].replace(/\]$/, '');
                keys = keys.shift().split('[').concat(keys);
                keys_last = keys.length - 1;
            } else {
                keys_last = 0;
            }
            if (param.length === 2) {
                val = decode(param[1]);
                if (coerce) {
                    val = val && !isNaN(val) ? +val : val === 'undefined' ? undefined : coerce_types[val] !== undefined ? coerce_types[val] : val;
                }
                if (keys_last) {
                    for (; i <= keys_last; i++) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last ? cur[key] || (keys[i + 1] && isNaN(keys[i + 1]) ? {} : []) : val;
                    }
                } else {
                    if ($.isArray(obj[key])) {
                        obj[key].push(val);
                    } else if (obj[key] !== undefined) {
                        obj[key] = [obj[key], val];
                    } else {
                        obj[key] = val;
                    }
                }
            } else if (key) {
                obj[key] = coerce ? undefined : '';
            }
        });
        return obj;
    };

    function jq_deparam_sub(is_fragment, url_or_params, coerce) {
        if (url_or_params === undefined || typeof url_or_params === 'boolean') {
            coerce = url_or_params;
            url_or_params = jq_param[is_fragment ? str_fragment : str_querystring]();
        } else {
            url_or_params = is_string(url_or_params) ? url_or_params.replace(is_fragment ? re_trim_fragment : re_trim_querystring, '') : url_or_params;
        }
        return jq_deparam(url_or_params, coerce);
    };
    jq_deparam[str_querystring] = curry(jq_deparam_sub, 0);
    jq_deparam[str_fragment] = jq_deparam_fragment = curry(jq_deparam_sub, 1);
    $[str_elemUrlAttr] || ($[str_elemUrlAttr] = function(obj) {
        return $.extend(elemUrlAttr_cache, obj);
    })({
        a: str_href,
        base: str_href,
        iframe: str_src,
        img: str_src,
        input: str_src,
        form: 'action',
        link: str_href,
        script: str_src
    });
    jq_elemUrlAttr = $[str_elemUrlAttr];

    function jq_fn_sub(mode, force_attr, params, merge_mode) {
        if (!is_string(params) && typeof params !== 'object') {
            merge_mode = params;
            params = force_attr;
            force_attr = undefined;
        }
        return this.each(function() {
            var that = $(this),
                attr = force_attr || jq_elemUrlAttr()[(this.nodeName || '').toLowerCase()] || '',
                url = attr && that.attr(attr) || '';
            that.attr(attr, jq_param[mode](url, params, merge_mode));
        });
    };
    $.fn[str_querystring] = curry(jq_fn_sub, str_querystring);
    $.fn[str_fragment] = curry(jq_fn_sub, str_fragment);
    jq_bbq.pushState = jq_bbq_pushState = function(params, merge_mode) {
        if (is_string(params) && /^#/.test(params) && merge_mode === undefined) {
            merge_mode = 2;
        }
        var has_args = params !== undefined,
            url = jq_param_fragment(window[str_location][str_href], has_args ? params : {}, has_args ? merge_mode : 2);
        window[str_location][str_href] = url + (/#/.test(url) ? '' : '#');
    };
    jq_bbq.getState = jq_bbq_getState = function(key, coerce) {
        return key === undefined || typeof key === 'boolean' ? jq_deparam_fragment(key) : jq_deparam_fragment(coerce)[key];
    };
    jq_bbq.removeState = function(arr) {
        var state = {};
        if (arr !== undefined) {
            state = jq_bbq_getState();
            $.each($.isArray(arr) ? arr : arguments, function(i, v) {
                delete state[v];
            });
        }
        jq_bbq_pushState(state, 2);
    };
    jq_event_special[str_hashchange] = $.extend(jq_event_special[str_hashchange], {
        add: function(handleObj) {
            var old_handler;

            function new_handler(e) {
                var hash = e[str_fragment] = jq_param_fragment();
                e.getState = function(key, coerce) {
                    return key === undefined || typeof key === 'boolean' ? jq_deparam(hash, key) : jq_deparam(hash, coerce)[key];
                };
                old_handler.apply(this, arguments);
            };
            if ($.isFunction(handleObj)) {
                old_handler = handleObj;
                return new_handler;
            } else {
                old_handler = handleObj.handler;
                handleObj.handler = new_handler;
            }
        }
    });
})(jQuery, this);
(function($, window, undefined) {
    '$:nomunge';
    var fake_onhashchange, jq_event_special = $.event.special,
        str_location = 'location',
        str_hashchange = 'hashchange',
        str_href = 'href',
        browser = $.browser,
        mode = document.documentMode,
        is_old_ie = browser.msie && (mode === undefined || mode < 8),
        supports_onhashchange = 'on' + str_hashchange in window && !is_old_ie;

    function get_fragment(url) {
        url = url || window[str_location][str_href];
        return url.replace(/^[^#]*#?(.*)$/, '$1');
    };
    $[str_hashchange + 'Delay'] = 100;
    jq_event_special[str_hashchange] = $.extend(jq_event_special[str_hashchange], {
        setup: function() {
            if (supports_onhashchange) {
                return false;
            }
            $(fake_onhashchange.start);
        },
        teardown: function() {
            if (supports_onhashchange) {
                return false;
            }
            $(fake_onhashchange.stop);
        }
    });
    fake_onhashchange = (function() {
        var self = {},
            timeout_id, iframe, set_history, get_history;

        function init() {
            set_history = get_history = function(val) {
                return val;
            };
            if (is_old_ie) {
                iframe = $('<iframe src="javascript:0"/>').hide().insertAfter('body')[0].contentWindow;
                get_history = function() {
                    return get_fragment(iframe.document[str_location][str_href]);
                };
                set_history = function(hash, history_hash) {
                    if (hash !== history_hash) {
                        var doc = iframe.document;
                        doc.open().close();
                        doc[str_location].hash = '#' + hash;
                    }
                };
                set_history(get_fragment());
            }
        };
        self.start = function() {
            if (timeout_id) {
                return;
            }
            var last_hash = get_fragment();
            set_history || init();
            (function loopy() {
                var hash = get_fragment(),
                    history_hash = get_history(last_hash);
                if (hash !== last_hash) {
                    set_history(last_hash = hash, history_hash);
                    $(window).trigger(str_hashchange);
                } else if (history_hash !== last_hash) {
                    window[str_location][str_href] = window[str_location][str_href].replace(/#.*/, '') + '#' + history_hash;
                }
                timeout_id = setTimeout(loopy, $[str_hashchange + 'Delay']);
            })();
        };
        self.stop = function() {
            if (!iframe) {
                timeout_id && clearTimeout(timeout_id);
                timeout_id = 0;
            }
        };
        return self;
    })();
})(jQuery, this);;
! function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        v = e.reduce,
        h = e.reduceRight,
        d = e.filter,
        g = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        w = i.bind,
        j = function(n) {
            return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.1";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a in n)
                if (j.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
                u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
            }), !u) throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
                c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
            }), !u) throw new TypeError(E);
        return r
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function(n) {
            return n === t
        })
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t]
        })
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0)
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var F = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    j.sortBy = function(n, t, r) {
        var e = F(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {},
            i = F(null == t ? j.identity : t);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    j.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (j.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, j.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            j.has(n, t) || (n[t] = 0), n[t]++
        })
    }, j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var R = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return R(n, t, [])
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n)
        })
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
        return i
    };
    var M = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (w && n.bind === w) return w.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            M.prototype = n.prototype;
            var u = new M;
            M.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity),
            function() {
                var e = t.apply(this, arguments);
                return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
            }
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null,
            o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function() {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function(n, t, r) {
        var e, u = null;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    u = null, r || (e = n.apply(i, a))
                },
                c = r && !u;
            return clearTimeout(u), u = setTimeout(o, t), c && (e = n.apply(i, a)), e
        }
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = _ || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t
    }, j.values = function(n) {
        var t = [];
        for (var r in n) j.has(n, r) && t.push(n[r]);
        return t
    }, j.pairs = function(n) {
        var t = [];
        for (var r in n) j.has(n, r) && t.push([r, n[r]]);
        return t
    }, j.invert = function(n) {
        var t = {};
        for (var r in n) j.has(n, r) && (t[n[r]] = r);
        return t
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, j.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == String(t);
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        var a = n.constructor,
            o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
        r.push(n), e.push(t);
        var c = 0,
            f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)
                for (; c-- && (f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t)
                    if (j.has(t, s) && !c--) break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function(n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n)
            if (j.has(n, t)) return !1;
        return !0
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, j.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"))
    }), "function" != typeof /./ && (j.isFunction = function(n) {
        return "function" == typeof n
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function(n) {
        return null === n
    }, j.isUndefined = function(n) {
        return n === void 0
    }, j.has = function(n, t) {
        return f.call(n, t)
    }, j.noConflict = function() {
        return n._ = t, this
    }, j.identity = function(n) {
        return n
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t]
            })
        }
    }), j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            " ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this);;

function registerNameSpace(ns) {
    var nsParts = ns.split(".");
    var root = window;
    for (var i = 0; i < nsParts.length; i++) {
        if (typeof root[nsParts[i]] === "undefined")
            root[nsParts[i]] = {};
        root = root[nsParts[i]];
    }
}
var console;;
$(function() {
    $.ajaxSetup({
        cache: true,
        type: 'GET',
        dataType: 'html',
        error: function(xhr) {
            $("body").children(":last").after('<div class="ajaxError" style="display:none;">AJAX ERROR:<b>' + xhr.status + ": " + xhr.statusText + "</b><br/><br/>" + xhr.responseText.replace("<!--", "").replace("-->", "") + "<br/><br/>&nbsp;</div>");
        }
    });
    $('#findOffice').submit(function() {
        var locationId = $('input#hidLocationID').val();
        var officeName = $('input[name="officeName"]').val();
        var url = "/OrganisationalUnit?officeName=" + officeName + "&locationID=" + locationId;
        history.pushState(null, null, url);
    });
    $('.agent_info a').each(function() {
        $('.agent_info a').click(function() {
            var locationId = $('input#hidLocationID').val();
            var officeName = $('input[name="officeName"]').val();
            var url = "/OrganisationalUnit?officeName=" + officeName + "&locationID=" + locationId;
            history.pushState(null, null, url);
        });
    });
    $('input#btnSearch').click(function() {
        if ($('input#search').val() == '' && $('input#hidLocationID').val() != '') {
            $('input#hidLocationID').val('');
        }
        if ($('input#hidLocationID').val() == '' && $('input#search').val() != '') {
            $('#locationIDValidationLabel').show();
        } else {
            $('#locationIDValidationLabel').hide();
        }
    });
    var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";
    $('input#search').autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "/Location/GetAjaxLocationResults?term=" + request.term,
                dataType: "json",
                data: {
                    term: request.term
                },
                success: function(data) {
                    response(data.slice(0, 10));
                    $('input#hidLocationID').val(null);
                }
            });
        },
        open: function() {
            var acData = $(this).data('autocomplete'),
                styledTerm = termTemplate.replace('%s', acData.term);
            acData.menu.element.find('a').each(function() {
                var me = $(this);
                var html = toTitleCase(me.text());
                html = html.replace(toTitleCase(acData.term), styledTerm);
                me.html(html);
            });
        },
        select: function(event, ui) {
            $('input#hidLocationID').val(ui.item.id);
            $('input#search').val(ui.item.value);
            $('#locationIDValidationLabel').hide();
            return false;
        },
        change: function(event, ui) {
            if (ui.item != null) {
                $('input#hidLocationID').val(ui.item.id);
            }
        },
        minLength: 2
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }
    $("input.helpInput").each(function() {
        var $helpInput = $(this);
        var defaultVal = $helpInput.attr("title");
        if ($helpInput.val() == "")
            $helpInput.val(defaultVal);
        $helpInput.focus(function() {
            if (this.value == defaultVal)
                this.value = "";
            else
                $(this).select();
        }).blur(function() {
            if (jQuery.trim(this.value) == "")
                this.value = defaultVal;
        });
        $(this).parents("form").find("input[type=submit]").click(function() {
            if ($helpInput.val() == defaultVal)
                $helpInput.val("");
        });
    });
    if ($("body.lps").length === 0) {
        $(document).on("click", ".shortlist", function() {
            var listingID = new Number($(this).parents("li[listingID]:first").attr("listingID"));
            shortlist().toggleShortListItem(this, listingID);
            return false;
        });
        shortlist().updateAll();
    }
    $("a.popuphelp").fancybox();
    $(".propFeatures ul li").tooltip({
        extraClass: 'listing-icon-tooltip'
    });
});

function now() {
    return +new Date;
};

function shortlist() {
    var self = {
        toggleShortListItem: function(elem, listingId) {
            var action = $(elem).hasClass("inshortlist") ? "remove" : "add";
            $.post("/MyAccount/UpdateShortList/", {
                listingId: listingId,
                action: action
            }, self._toggleShortListItem);
        },
        _toggleShortListItem: function(data) {
            self._updateDisplayCount(data);
            self.update();
        },
        update: function() {
            var shortListArr = self._getShortListArray();
            $(".shortlist").each(function() {
                var curr$ = $(this);
                var listingID = new Number(curr$.parents("li[listingID]:first").attr("listingID"));
                var inShortList = utils.inArray(listingID, shortListArr);
                if (inShortList) {
                    curr$.text(curr$.hasClass("wide") ? _resources.shortListRemoveFromWide : _resources.shortListRemoveFrom);
                } else {
                    curr$.text(_resources.shortListAddTo);
                }
                curr$.toggleClass("inshortlist", inShortList);
            });
        },
        _getShortListArray: function() {
            var cookie = $.cookie("MyAccount");
            if (typeof(cookie) == 'undefined' || cookie == null) return [];
            var cookieVal = $.cookieKey(cookie, "ShortList");
            if (typeof(cookieVal) == 'undefined' || cookieVal == null || cookieVal.length == 0) return [];
            return cookieVal.split(",");
        },
        _getShortListCount: function() {
            var cookie = $.cookie("MyAccount");
            if (typeof(cookie) == 'undefined' || cookie == null) return 0;
            var shortlistCount = $.cookieKey(cookie, "SLstC");
            var count = parseInt(shortlistCount, 10);
            if (typeof(count) === 'undefined') {
                count = self._getShortListArray().length;
            }
            return count;
        },
        updateCount: function() {
            var cookie = $.cookie("MyAccount"),
                openhomeAlertCount, listingAlertCount, favouriteSearchCount;
            var count = self._getShortListCount();
            self._updateDisplayCount(count);
            if (!(typeof(cookie) == 'undefined' || cookie == null)) {
                openhomeAlertCount = $.cookieKey(cookie, "OAlrtC");
                listingAlertCount = $.cookieKey(cookie, "LAlrtC");
                favouriteSearchCount = $.cookieKey(cookie, "FavouriteSC");
                self._updateOtherCount($("#accSummary span.openhomeAlertTotal"), openhomeAlertCount);
                self._updateOtherCount($("#accSummary span.listingAlertTotal"), listingAlertCount);
                self._updateOtherCount($("#accSummary span.favouriteSearchesTotal"), favouriteSearchCount);
            }
        },
        _updateDisplayCount: function(count) {
            if (count > 0)
                $("#shortlistTotal span").show().find("strong").text(count);
            else
                $("#shortlistTotal span").hide();
            self._updateOtherCount($("#accSummary span.shortlistTotal"), count);
        },
        _updateOtherCount: function(elem$, count) {
            var dis = (count > 0) ? count : "-";
            elem$.text(dis);
        },
        updateAll: function() {
            if (typeof($("body").attr("siteguid")) == 'undefined') {
                $(".shortlist").show();
                self.updateCount();
                self.update();
            }
        },
        removeFromShortListTable: function($elem, listingId) {
            $elem.find(".saving").show();
            $elem.fadeOut(500, function() {
                $elem.remove();
            });
            $.post("/MyAccount/UpdateShortList/", {
                listingId: listingId,
                action: "remove"
            }, function() {
                self._removeFromShortListTable($elem)
            });
        },
        _removeFromShortListTable: function($elem) {
            self.updateCount();
        }
    };
    return self;
};

function createExternalPage() {
    var self = {
        siteGuid: null,
        init: function() {
            self.siteGuid = $("body").attr("siteguid");
            if (self.siteGuid) {
                $("a[href]").each(function() {
                    var $this = $(this);
                    var href = $this.attr("href");
                    if (href.indexOf("siteguid=") < 0 && href != "#" && href != "") {
                        $this.attr("href", utils.appendParam(href, "siteguid", self.siteGuid));
                    }
                });
            }
        }
    };
    self.init();
};

function createGoogleMapAndStreetView() {
    var self = {
        createGoogleMapAndStreetViewInit: function() {
            $("#mapView").click(function() {
                $("#streetView").addClass("off");
                $(this).removeClass("off");
                $("#gmapStreetView").hide();
                var $gmap = $("#gmap");
                var map = $gmap.get(0).map;
                map.setCenter(map.getCenter());
                $gmap.show();
                return false;
            });
            $("#streetView").click(function() {
                $("#mapView").addClass("off");
                $(this).removeClass("off");
                $("#gmap").hide();
                $("#gmapStreetView").show();
                return false;
            });
        },
        configureStreetView: function($li) {
            var $mapView = $("#mapView");
            var $streetView = $("#streetView");
            $gmapStreetView = $("#gmapStreetView");
            var oid = $li.attr("oid");
            $streetView.attr("oid", oid);
            var streetViewUrl = $li.attr("streetviewurl");
            var options = {};
            if (streetViewUrl) {
                options.url = streetViewUrl;
            } else {
                options.latlng = utils.getGLatLng($li);
            }
            $mapView.removeClass("off");
            $streetView.addClass("off");
            $gmapStreetView.streetView(options).bind("hasnearbypanoramas", function() {
                $streetView.show();
            }).bind("nonearbypanoramas", function() {
                $streetView.hide();
            }).bind("error", function() {
                $streetView.hide();
            });
            $gmapStreetView.hide();
            $("#gmap").show();
        },
        getPointByOid: function(oid) {
            var points = googleMapsV3.map.options.points;
            for (var i = 0; i < points.length; i++) {
                if (points[i].oid == oid) {
                    return points[i];
                }
            }
        },
        getOrganisationalUnitGoogleMapInfoWindow: function($li) {
            var oid = $li.attr("oid");
            $.get("/OrganisationalUnit/GetGoogleMapInfoWindow/" + oid, function(data) {
                var point = self.getPointByOid(oid);
                point.infoHtml = data;
                point.marker.infoHtml = data;
                point.marker.openInfoWindowHtml(data);
                self.configureStreetView($li);
            });
        },
        openMarkerInfoWindow: function(oid) {
            var point = self.getPointByOid(oid);
            var infoHtml = $("#officeInfoHtml" + oid).html();
            if (!infoHtml) {
                return;
            }
            point.infoHtml = infoHtml;
            point.marker.infoHtml = infoHtml;
            point.marker.openInfoWindowHtml(infoHtml);
        },
        zoomToOffice: function($li) {
            var gLatLng = utils.getGLatLng($li);
            var zoom = 15;
            var map = googleMapsV3.map;
            if (map.getZoom() != zoom) {
                map.setCenter(gLatLng, zoom);
            } else {
                map.panTo(gLatLng);
            }
        }
    };
    self.createGoogleMapAndStreetViewInit();
    return self;
};

function createBaseFindOfficeAgent() {
    var self = {
        createBaseFindOfficeAgentInit: function() {
            $("#findOffice input[type=text]").keydown(function(e) {
                if (e.keyCode == 13) {
                    e.stopPropagation();
                }
            });
        },
        displayPagerValues: function(pagerOptions) {
            if (pagerOptions.totalCount <= 1) {
                $("#findPager div").hide();
                return;
            }
            var top = pagerOptions.pageIndex * pagerOptions.pageSize + pagerOptions.pageSize;
            if (top > pagerOptions.totalCount) {
                top = pagerOptions.totalCount;
            }
            var $span = $("#findPager span");
            $span.slice(0, 1).html(1);
            $span.slice(1, 2).html(top);
            $span.slice(2, 3).html(pagerOptions.totalCount);
            $("#findPager div").show();
        }
    };
    self = $.extend(true, self, createGoogleMapAndStreetView());
    self.createBaseFindOfficeAgentInit();
    return self;
};

function createFindAnAgent() {
    var self = {
        pagerOptions: {
            pageIndex: 0,
            pageSize: 50
        },
        createFindAnAgentInit: function() {
            var HELPER_FADE_IN_SPEED = 2000;
            var pagerOptions = this.pagerOptions;
            var $resultList = $("#resultList");
            var divLoadingHtml = "<div class='loading'>" + _resources.loadingDotDotDot + "</div>";
            var divSearchingHtml = "<div class='loading'>" + _resources.searchingDotDotDot + "</div>";
            var helperHtml = $resultList.html();
            $("#resultList .helper").hide().fadeIn(HELPER_FADE_IN_SPEED);
            $('#findOffice').ajaxForm({
                target: "#resultList",
                success: function() {
                    $(".resultBarLeft>h3").html($("#resultsTotal").html());
                    pagerOptions.totalCount = $("#resultsTotal").attr("totalcount");
                    self.displayPagerValues(pagerOptions);
                    self.initMapAPI();
                    if (pagerOptions.totalCount == 1) {
                        setTimeout(function() {
                            self.selectSingle($("#resultList > ul li"), true)
                        }, 500);
                    }
                },
                error: function(data) {
                    window.location.href = "/Error/";
                }
            });
            $("#btnSearch").click(function() {
                pagerOptions.pageIndex = 0;
                pagerOptions.searchParameters = {
                    agentName: $("input[name=agentName]").val(),
                    locationName: $("input[name=locationName]").val()
                };
                $(".resultBarLeft h3").html("");
                $("#findPager div").hide();
                if (pagerOptions.searchParameters.agentName == "" && pagerOptions.searchParameters.locationName == "") {
                    $resultList.html(helperHtml);
                    $("#resultList .helper").addClass("highlight").show();
                    setTimeout('$("#resultList .helper").removeClass("highlight")', 1000);
                    $("input[name=agentName]").focus();
                    return false;
                } else {
                    $resultList.html(divSearchingHtml).scrollTop(0);
                }
            });
            $resultList.scrollPaging(pagerOptions, function(data) {
                $resultList.append(divLoadingHtml);
                $.get("/Staff/Search/?pageIndex=" + data.pageIndex + "&agentName=" + data.searchParameters.agentName + "&locationID=" + $('input#hidLocationID').val(), function(result) {
                    $("#resultListHidden").html(result);
                    $resultList.find(".loading").remove();
                    $("#resultList ul").append($("#resultListHidden ul").html());
                    self.displayPagerValues(pagerOptions);
                });
            });
            $(document).on("click", "#resultList .agent_info h2", function(a, b, c) {
                var $li = $(this).parents("li");
                self.selectSingle($li);
                $("input[name=agentName]").focus();
                return false;
            });
            $("input[name=agentName]").focus();
            self.initMapAPI();
        },
        initMapAPI: function() {
            self.loadMap();
        },
        loadMap: function() {
            var $li = $("#ouList li[lat]");
            if ($li.length <= 0) {
                $("#gmap").show().googleMap({});
                return;
            }
            var points = [];
            $li.each(function(i) {
                var pos = utils.getGLatLng($(this));
                points[i] = {
                    position: pos,
                    oid: $(this).attr("oid")
                };
            });
            $("#streetView").hide();
            $("#gmapStreetView").hide();
            setTimeout(function() {
                $("#gmap").show().googleMap({
                    points: points
                });
                self.addMapClickListeners(points);
            }, 250);
        },
        addMapClickListeners: function(points) {
            for (var i = 0; i < points.length; i++) {
                google.maps.event.addListener(points[i].marker, "click", function() {
                    var $this = $("li[oid=" + this.oid + "]");
                    if (!this.infoHtml) {
                        self.getOrganisationalUnitGoogleMapInfoWindow($this);
                    }
                    this.openInfoWindowHtml(this.infoHtml);
                });
            }
        },
        getOrganisationalUnitGoogleMapInfoWindow: function($li) {
            var oid = $li.attr("oid");
            $.get("/OrganisationalUnit/GetGoogleMapInfoWindow/" + oid, function(data) {
                var point = self.getPointByOid(oid);
                point.infoHtml = data;
                point.marker.infoHtml = data;
                point.marker.openInfoWindowHtml(data);
                self.configureStreetView($li);
            });
        },
        openMarkerInfoWindow: function(oid) {
            var point = self.getPointByOid(oid);
            var infoHtml = $("#officeInfoHtml" + oid).html();
            if (!infoHtml) {
                return;
            }
            point.infoHtml = infoHtml;
            point.marker.infoHtml = infoHtml;
            point.marker.openInfoWindowHtml(infoHtml);
        },
        selectSingle: function($li) {
            var ouid = $li.attr("ouid");
            var $ouli = $("#ouList li[oid=" + ouid + "]");
            self.zoomToOffice($ouli);
            var ouli = $ouli.get(0);
            if (!ouli.infoHtml) {
                var $officeInfoHtml = $("#officeInfoHtml" + ouid);
                if ($officeInfoHtml.length == 1) {
                    ouli.infoHtml = $officeInfoHtml.html();
                }
            }
            if (!ouli.infoHtml) {
                self.getOrganisationalUnitGoogleMapInfoWindow($ouli);
            } else {
                self.openMarkerInfoWindow($ouli.attr("oid"));
            }
            self.configureStreetView($ouli);
        }
    };
    self = $.extend(true, self, createBaseFindOfficeAgent());
    self.createFindAnAgentInit();
    return self;
};

function createFindAnOffice() {
    var self = {
        createFindAnOfficeInit: function() {
            var divSearchingHtml = "<div class='loading'>" + _resources.searchingDotDotDot + "</div>";
            $('#findOffice').ajaxForm({
                target: "#resultList",
                success: function() {
                    self.loadList();
                    self.initMapAPI();
                },
                error: function(data) {
                    window.location.href = "/Error/";
                }
            });
            $("#btnSearch").click(function() {
                $(".resultBarLeft h3").html("");
                $("#resultList").html(divSearchingHtml);
            });
            self.loadList();
            self.initMapAPI();
        },
        loadList: function() {
            var $li = $("#resultList li[lat]");
            $("#resultList li[lat] > h2 a").each(function() {
                $(this).removeAttr("href");
            }).click(function() {
                self.selectSingle($(this).parents("li"));
                $("input[name=officeName]").focus();
            });
            $(".resultBarLeft>h3").html($("#resultsTotal").html());
            if ($li.length == 1) {
                setTimeout(function() {
                    self.selectSingle($li, true)
                }, 500);
            }
            $("input[name=officeName]").focus();
        },
        initMapAPI: function() {
            self.loadMap();
        },
        loadMap: function() {
            var $li = $("#resultList li[lat]");
            points = [];
            $li.each(function(i) {
                points[i] = utils.getGLatLng($(this));
                points[i].oid = $(this).attr("oid");
            });
            $("#streetView").hide();
            $("#gmapStreetView").hide();
            setTimeout(function() {
                $("#gmap").show().googleMap({
                    points: points
                });
                self.addMapClickListeners(points);
            }, 250);
        },
        addMapClickListeners: function(points) {
            for (var i = 0; i < points.length; i++) {
                google.maps.event.addListener(points[i].marker, "click", function() {
                    var $this = $("li[oid=" + this.oid + "]");
                    if (!this.infoHtml) {
                        self.getOrganisationalUnitGoogleMapInfoWindow($this);
                    }
                    this.openInfoWindowHtml(this.infoHtml);
                });
            }
        },
        selectSingle: function($li, forceExpand) {
            var $div = $li.children("div:first");
            if ($div.length == 0) {
                $li.append("<div></div>");
                $div = $li.children("div:first");
            }
            self.zoomToOffice($li);
            self.openMarkerInfoWindow($li.attr("oid"));
            if ($div.children().length <= 0) {
                $div.load("/OrganisationalUnit/GetOfficeAndStaffDetails/" + $li.attr("oid"), function() {
                    var $liNew = $(this).parent("li");
                    self.openMarkerInfoWindow($liNew.attr("oid"));
                    $liNew.addClass("expanded");
                    $liNew.children("div:first").show();
                    self.configureStreetView($liNew);
                });
            } else if (!forceExpand) {
                if ($li.hasClass("expanded")) {
                    $div.hide();
                    $li.removeClass("expanded");
                } else {
                    $div.show();
                    $li.addClass("expanded");
                }
            }
            self.configureStreetView($li);
        }
    };
    self = $.extend(true, self, createBaseFindOfficeAgent());
    self.createFindAnOfficeInit();
    return self;
};

function createBaseViewOfficeAgent() {
    var self = {
        createBaseViewOfficeAgentInit: function() {
            $("#sold[value='false']").prop("checked", true);
            var $li = $("#office_agent_tabs li");
            $li.htabs($(".office_agent_content > div"), "tabActive");
            if ($("#office_agent_tabs li.tabActive .tabLocation").length == 1) {
                self.initMapAPI();
            } else {
                $li.find(".tabLocation").parent().one("tabChange", self.initMapAPI);
            }
        },
        initMapAPI: function() {
            self.initMapAndEnquiries();
        },
        initMapAndEnquiries: function() {
            var $gmap = $(".gmap");
            var point = utils.getGLatLng($gmap);
            point.oid = $gmap.attr("oid");
            $gmap.googleMap({
                points: [point],
                mapzoom: 15
            });
            google.maps.event.addListener(point.marker, "click", function() {
                if (!this.infoHtml) {
                    $.get("/OrganisationalUnit/GetGoogleMapInfoWindow/" + point.oid, function(data) {
                        point.infoHtml = data;
                        point.marker.infoHtml = data;
                        point.marker.openInfoWindowHtml(data);
                    });
                }
            });
            self.configureStreetView($gmap);
            $("#formEnquiry").harcourtsForm({
                url: "/OrganisationalUnit/Enquiry",
                namePrefix: "enq"
            });
            officeMapDone = true;
        }
    };
    self = $.extend(true, self, createGoogleMapAndStreetView());
    self.createBaseViewOfficeAgentInit();
    return self;
};

function createFavouriteSearchesList(obj, showOpenHomeAlertsOnly) {
    var self = {
        $editIntervalDiv: null,
        maximumAlerts: 3,
        savingCount: 0,
        defaultIntervalID: 6,
        favouriteSearchBaseUrl: null,
        favouriteSearches: [],
        intervals: [],
        isSmsSupported: true,
        addAlert: function($div, alert) {
            if (!alert) {
                var defaultInterval = utils.getByID(self.intervals, self.defaultIntervalID);
                alert = {
                    id: null,
                    isOpenHomeAlert: false,
                    dayOfWeek: defaultInterval.dayOfWeek,
                    daysInterval: defaultInterval.daysInterval,
                    typeID: 1
                };
            }
            var $ul = $div.find(".alerts ul");
            var html = '<li><select class="type"><option value="1">' +
                _resources.favouriteSearchEmail + '</option>';
            if (self.isSmsSupported) {
                html += '<option value="2">' +
                    _resources.favouriteSearchSms + '</option>';
            }
            html += '</select><select class="style"><option value="all">' +
                _resources.favouriteSearchAllProperties + '</option>';
            if (!$(".naiHarcourts").length && $div.attr('isopenhomesupported') === 'true')
                html += '<option value="openhomes">' +
                _resources.favouriteSearchOpenHomes + '</option>';
            html += '</select><select class="interval">';
            var interval;
            for (var i = 0; i < self.intervals.length; i++) {
                html += '<option value="' + self.intervals[i].id + '">' +
                    self.intervals[i].name + '</option>';
                if (alert.dayOfWeek == self.intervals[i].dayOfWeek && alert.daysInterval == self.intervals[i].daysInterval) {
                    interval = self.intervals[i];
                }
            }
            html += '</select><a class="removeAlert" href="#"></a></li>';
            $li = $(html);
            $ul.append($li);
            if (alert.id != null) {
                $li.attr("oid", alert.id);
            }
            if (alert.isOpenHomeAlert != null) {
                $li.attr("isOpenHomeAlert", alert.isOpenHomeAlert);
            }
            $li.find("select.type").val(alert.typeID);
            $li.find("select.style").val(alert.isOpenHomeAlert ? "openhomes" : "all");
            $li.find("select.interval").val(interval.id);
            $li.find("a").html(_resources.favouriteSearchRemove);
            if ($ul.find("li").length >= self.maximumAlerts) {
                $div.find(".alerts a.add").hide();
            }
            if (alert.id == null) {
                self.saveAlert($li);
            }
            $li.find(".removeAlert").click(function() {
                var $li = $(this).parents("li");
                self.removeAlert($li);
                return false;
            });
            $li.find("select").change(function() {
                var $li = $(this).parents("li");
                self.saveAlert($li);
                return false;
            });
            return;
        },
        buildList: function() {
            for (var i = 0; i < self.favouriteSearches.length; i++) {
                var s = self.favouriteSearches[i];
                var $div = $('<div class="search">' + '<div class="saving"></div><h3><a href="#"></a></h3><a class="rename">rename</a>' + '<div class="savedSearchInputContainer hidden"><input type="text" class="savedSearchName" name="savedSearchName" maxlength="80">' + '<a class="saveRename">save</a><a class="cancelRename">cancel</a></div>' + '<div class="desc"></div> <div class="alerts"><ul></ul></div>' + '<div class="remove"><a href="#"></a></div></div>');
                $(".favouriteSearches").append($div);
                $div.attr("oid", s.id);
                $div.attr("isopenhomesupported", s.isOpenHomeSupported);
                $div.find(".saving").html(_resources.savingDotDotDot).hide();
                $div.find("h3 a").attr("href", "/" + self.favouriteSearchBaseUrl + "/" + s.id).html(s.name);
                $div.find(".desc").html(s.description);
                $div.find(".remove a").html(_resources.favouriteSearchRemove);
                for (var j = 0; j < s.alerts.length; j++) {
                    self.addAlert($div, s.alerts[j]);
                }
                $div.find(".alerts").append('<a class="add" href="#">' +
                    _resources.favouriteSearchesAddAnAlert + '</a>');
                if (s.alerts.length >= self.maximumAlerts) {
                    $div.find(".alerts a.add").hide();
                }
            }
            if (showOpenHomeAlertsOnly === true || showOpenHomeAlertsOnly === false) {
                if (showOpenHomeAlertsOnly === true) {
                    $('li[isOpenHomeAlert=false]').addClass('hidden');
                } else if (showOpenHomeAlertsOnly === false) {
                    $('li[isOpenHomeAlert=true]').addClass('hidden');
                }
                $('div.search').each(function(i) {
                    var $this = $(this);
                    if ($this.find('li:not([class=hidden])').length === 0) {
                        $this.addClass('hidden');
                    }
                });
            }
            self.setAlternateClass();
        },
        init: function() {
            self.buildList();
            $(".favouriteSearches .search .add").click(function() {
                var $div = $(this).parents("div[oid]");
                self.addAlert($div);
                return false;
            });
            $(".favouriteSearches .search .remove a").click(function() {
                var $this = $(this);
                var $div = $this.parents("div[oid]");
                self.showSaving($div);
                var $totalSummary = $(".totalSummary");
                var totalCount = $totalSummary.attr("totalcount");
                $.post("/MyAccount/DeleteFavouriteSearch", {
                    id: $div.attr("oid"),
                    listingSearchType: $(".favouriteSearches").attr("listingsearchtype"),
                    currentTotalCount: totalCount
                }, function(data) {
                    $totalSummary.attr("totalcount", totalCount - 1).html(data);
                    shortlist().updateCount();
                }, "html");
                $div.fadeOut(1000, function() {
                    $div.remove();
                    self.setAlternateClass();
                });
                return false;
            });
            $(".favouriteSearches .search .rename").hover(function() {
                $(this).parent().find("h3 a").css("backgroundColor", "#f9f4c7");
            }, function() {
                $(this).parent().find("h3 a").css("backgroundColor", "transparent");
            });
            $(".favouriteSearches .search .rename").click(function() {
                $favouriteSearch = $(this).parent();
                $favouriteSearch.children(".savedSearchInputContainer").removeClass('hidden');
                $favouriteSearch.children(".rename").addClass('hidden');
                $favouriteSearch.children("h3").addClass('hidden');
                var currentTitle = $favouriteSearch.find("h3 a").text();
                $favouriteSearch.find(".savedSearchName").val(currentTitle);
            });
            $(".favouriteSearches .search .saveRename").click(function() {
                self.renameSavedSearchName($(this).parent().parent());
            });
            $(".favouriteSearches .search .savedSearchName").keyup(function(e) {
                if (e.which == 13) {
                    self.renameSavedSearchName($(this).parent().parent());
                }
            });
            $(".favouriteSearches .search .cancelRename").click(function() {
                $favouriteSearch = $(this).parent().parent();
                $favouriteSearch.children(".rename").removeClass('hidden');
                $favouriteSearch.children("h3").removeClass('hidden');
                $favouriteSearch.children(".savedSearchInputContainer").addClass('hidden');
            });
        },
        renameSavedSearchName: function($container) {
            self.showSaving($container);
            var savedSearchID = $container.attr("oid");
            if (!savedSearchID) {
                return;
            }
            var newname = $container.find(".savedSearchName").val();
            var command = {
                savedSearchID: savedSearchID,
                newName: newname
            };
            $.post("/MyAccount/RenameSavedSearchName/", command);
            $container.find("h3 a").text(newname);
            $container.find(".rename").removeClass('hidden');
            $container.find("h3").removeClass('hidden');
            $container.find(".savedSearchInputContainer").addClass('hidden');
        },
        removeAlert: function($li) {
            var $div = $li.parents("div[oid]");
            var oid = $li.attr("oid");
            if (!oid) {
                return;
            }
            $li.attr("oid", "");
            self.showSaving($div);
            var command = {
                alertId: oid,
                isOpenHomeAlert: $li.find("select.style").val() == "openhomes"
            };
            $.post("/MyAccount/DeleteFavouriteSearchAlert/", command, shortlist().updateCount);
            $li.fadeOut(500, function() {
                $div.find(".add").show();
                $li.remove();
            });
        },
        saveAlert: function($li) {
            var $div = $li.parents("div[oid]");
            self.showSaving($div);
            var interval = utils.getByID(self.intervals, $li.find("select.interval").val());
            var alert = {
                id: $li.attr("oid"),
                searchID: $div.attr("oid"),
                typeID: $li.find("select.type").val(),
                isOpenHomeAlert: $li.find("select.style").val() == "openhomes",
                daysInterval: interval.daysInterval,
                dayOfWeek: interval.dayOfWeek
            };
            $.post("/MyAccount/UpdateFavouriteSearchAlert", alert, function(id) {
                $li.attr("oid", id);
                shortlist().updateCount();
            }, "html");
        },
        setAlternateClass: function() {
            $(".favouriteSearches>div:nth-child(even)").addClass("alt");
            $(".favouriteSearches>div:nth-child(odd)").removeClass("alt");
        },
        showSaving: function($div) {
            self.savingCount++;
            var count = self.savingCount;
            $div.find(".saving").stop(true, true).attr("savingCount", count).show();
            setTimeout('$(".favouriteSearches .search .saving[savingCount=' +
                count + ']").fadeOut(500)', 1000);
        }
    };
    $.extend(true, self, obj);
    self.init();
    return self;
};

function createViewAgent() {
    var self = {
        createViewAgentInit: function() {
            if (window.location.href.contains("sold=true")) {
                $("#office_agent_tabs li:has(a.tabSoldListings)").click();
            } else if (window.location.href.contains("/Listings")) {
                $("#office_agent_tabs li:has(a.tabListings)").click();
            }
            $(".tabListings").bind("click", self.loadListings);
            $(".tabSoldListings").bind("click", self.loadSoldListings);
        },
        loadListings: function() {
            var url = $(this).attr("href");
            $("#ourListings").load(url);
            setTimeout(function() {
                $("a.shortlist").show();
                $("#contentSoldListings a.shortlist").addClass("hidden");
            }, 100);
        },
        loadSoldListings: function() {
            var url = $(this).attr("href");
            $("#ourSoldListings").load(url, {
                "sold": "true",
                "isPagingEnabled": "false",
                "isSoldListingSearch": "true",
                "pageSize": null
            });
            setTimeout(function() {
                $("a.shortlist").show();
                $("#contentSoldListings a.shortlist").addClass("hidden");
            }, 100);
        }
    };
    self = $.extend(true, self, createBaseViewOfficeAgent());
    self.createViewAgentInit();
    return self;
};

function createViewOffice() {
    var self = {
        createViewOfficeInit: function() {
            if (window.location.href.contains("sold=true")) {
                $("#office_agent_tabs li:has(a.tabSoldListings)").click();
            } else if (window.location.href.contains("/Listings")) {
                $("#office_agent_tabs li:has(a.tabListings)").click();
            }
            $(".tabListings").bind("click", self.loadListings);
            $(".tabSoldListings").bind("click", self.loadSoldListings);
            $("#officeTabs li").htabs($(".staffResults > ul"), "active");
            $('p.profile').each(function(i) {
                var max_length = $(this).attr('maxlength');
                if (max_length !== undefined) {
                    var $this = $(this);
                    var $clone = $this.clone();
                    $clone.hide();
                    var $link = $('<a>').text(_resources.more);
                    var text = $this.text().slice(0, max_length) + '... ';
                    $this.text(text).append($link);
                    $clone.insertAfter($this);
                    $link.click(function() {
                        $this.hide();
                        $clone.show();
                    });
                }
            });
        },
        loadListings: function() {
            var url = $(this).attr("href");
            $("#ourListings").load(url);
            setTimeout(function() {
                $("a.shortlist").show();
                $("#contentSoldListings a.shortlist").addClass("hidden");
            }, 100);
        },
        loadSoldListings: function() {
            var url = $(this).attr("href");
            $("#ourSoldListings").load(url, {
                "sold": "true",
                "isPagingEnabled": "false",
                "isSoldListingSearch": "true",
                "pageSize": null
            });
            setTimeout(function() {
                $("a.shortlist").show();
                $("#contentSoldListings a.shortlist").addClass("hidden");
            }, 100);
        },
        loadStaff: function() {
            var idx = 0;
            var $tab;
            if ($(this).attr("stafftype")) {
                idx = $("#officeTabs > li > a").index(this);
                $tab = $(this);
            } else {
                $tab = $("#officeTabs > li > a:first");
            }
            var $ulToLoad = $($(".staffResults > ul").get(idx));
            if ($ulToLoad.children().length == 0 && $ulToLoad.attr("loading") != "true") {
                $ulToLoad.attr("loading", "true");
                $ulToLoad.load($tab.attr("href"), function() {
                    $ulToLoad.removeAttr("loading");
                });
            }
        }
    };
    self = $.extend(true, self, createBaseViewOfficeAgent());
    self.createViewOfficeInit();
    return self;
};
var homePage = {
    loadFeatures: function() {
        homePage._currentlySelected = 0;
        $("#featured .featProperties li").each(function(i) {
            $(this).bind('click', i, homePage.selectFeatureListing);
        });
        $("#featured .featProperties li a").removeAttr('href');
        $("#featured .featImg").css('background-color', 'black');
        homePage.initAutoPlay();
        $("#featured").hover(homePage.pauseAutoPlay, homePage.initAutoPlay);
        homePage.initSubfeatCarousel();
    },
    initAutoPlay: function() {
        if (typeof homePage._autoPlayInterval != 'undefined' && homePage._autoPlayInterval != 0)
            clearInterval(homePage._autoPlayInterval);
        homePage._autoPlayMax = $("#featured .featProperties li").length;
        if (homePage._autoPlayMax <= 1)
            return;
        homePage._autoPlayInterval = setInterval("homePage.autoPlay()", 3000);
    },
    initSubfeatCarousel: function() {
        var $container = $("#home_subFeatures");
        var length = $container.find(".subBoxes li").length;
        if (length > 5) {
            var scroll = $("body").hasClass("landmarkHarcourts") ? 1 : 5;
            $container.jCarouselLite({
                btnNext: "#home_subFeatures #scrollRight",
                btnPrev: "#home_subFeatures #scrollLeft",
                vertical: false,
                visible: 5,
                mouseWheel: false,
                auto: 10000,
                speed: 500,
                mouseWheel: true,
                stopOnHover: true,
                scroll: scroll
            });
        }
    },
    pauseAutoPlay: function() {
        clearInterval(homePage._autoPlayInterval);
        homePage._autoPlayInterval = 0;
    },
    autoPlay: function() {
        var next = homePage._currentlySelected + 1;
        if (next >= homePage._autoPlayMax)
            next = 0;
        homePage.selectFeatureListing({
            data: next
        });
    },
    animateLeft: function(current, next) {
        var width = 780;
        var duration = 400;
        var $current;
        var $next;
        $("#featured .featImg a").each(function(i) {
            if (i == current) {
                $current = $(this);
            } else if (i == next) {
                $next = $(this);
            }
        });
        $next.css("left", width + "px");
        $next.animate({
            "left": "0px"
        }, duration, "swing");
        $current.animate({
            "left": -width + "px"
        }, duration, "swing");
    },
    selectFeatureListing: function(eventObject) {
        var id = eventObject.data;
        if (homePage._currentlySelected === id)
            return;
        $("#featured .featProperties li").each(function(i) {
            $(this).toggleClass('selectedFeature', i == id);
        });
        homePage.animateLeft(homePage._currentlySelected, id);
        homePage._currentlySelected = id;
    }
};
var listing_ListingSearchResultsGallery = {
    init: function() {
		
        $("#galleryView .image-carousel").each(function() {
            var $imageCarouselItem = $(this);
            var maxIndex = new Number($imageCarouselItem.find(".view-count span").text()) - 1;
            var $galleryItemWrapper = $imageCarouselItem.closest("li[listingID]");
            var listingViewHref = $galleryItemWrapper.find(".listingContent h2 a").attr("href");
            if (maxIndex <= 0) {
                $imageCarouselItem.find("button").hide();
                $imageCarouselItem.on('click', function() {
                    window.location = listingViewHref;
                });
                return;
            }
            var listingID = new Number($galleryItemWrapper.attr("listingID"));
            var images = null;
            var imagesLoading = false;
            var index = 0;
            var $img = $imageCarouselItem.find(".listing-image");
            var $viewIndex = $imageCarouselItem.find(".view-count strong");
            var showNextImage = false;
            var showImage = function() {
                $img.hide(0, function() {
                    $(this).css("background-image", "url(" + images[index].src + ")").fadeIn("fast");
                    $viewIndex.text(index + 1);
                    showNextImage = false;
                });
            };
            $imageCarouselItem.on('mouseover.imageloading', function(event) {
                if (images || imagesLoading) {
                    return;
                }
                imagesLoading = true;
				
                $.getJSON("load-hinh/" + listingID, function(results) {
                    images = [];
                    $.each(results, function(i, result) {
                        images[i] = new Image();
                        images[i].src = result;
                        if (result == "") {
                            images[i].src = "/images/missing-thumbnail.gif";
                        }
                    });
                    if (showNextImage) {
                        $img.find(".loading").remove();
                        showImage();
                    }
                    $imageCarouselItem.off(event);
                });
            });
            $imageCarouselItem.find(":not(button)").on("click", function(e) {
                window.location = listingViewHref;
            });
            var loadingImagePlaceholderHtml = "<div class='loading' style='background:white;font-size:10px;line-height:16px;margin-top:168px;position:absolute;padding:0 5px 0 5px;'>loading...</div>";
            var clicked = false;
            $imageCarouselItem.find("button").on('click', function(e) {
                e.preventDefault();
                if (!clicked) {
                    clicked = true;
                    $.post("/ListingHit/IncrementListingHit/" + listingID);
                }
                var $button = $(this);
                if (images || index == 0) {
                    index = index + ($button.hasClass("right") ? 1 : -1);
                    if (index < 0) {
                        index = maxIndex;
                    } else if (index > maxIndex) {
                        index = 0;
                    }
                }
                if (images) {
                    showImage();
                } else {
                    $button.parent().parent().prev().append(loadingImagePlaceholderHtml);
                    showNextImage = true;
                }
            });
            var swipeFunction = function(event, direction, distance, duration, fingerCount, fingerData) {
                if (!clicked) {
                    clicked = true;
                    $.post("/ListingHit/IncrementListingHit/" + listingID);
                }
                var $button = $(this);
                if (images || index == 0) {
                    if (direction == "left") {
                        index += 1;
                    }
                    if (direction == "right") {
                        index -= 1;
                    }
                    if (index < 0) {
                        index = maxIndex;
                    } else if (index > maxIndex) {
                        index = 0;
                    }
                }
                if (images) {
                    showImage();
                } else {
                    $button.parent().parent().prev().append(loadingImagePlaceholderHtml);
                    showNextImage = true;
                }
            };
            $imageCarouselItem.swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
                    swipeFunction(event, direction, distance, duration, fingerCount, fingerData);
                },
                swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
                    swipeFunction(event, direction, distance, duration, fingerCount, fingerData);
                },
                tap: function(e, target) {
                    if (e.button !== 2) {
                        window.location = listingViewHref;
                    }
                },
                threshold: 50
            });
        });
    }
};
var listing_View = {
    init: function() {
        var self = this;
        var $imageCarousel = $(".listing-images-carousel");
        $imageCarousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            adaptiveHeight: true,
            asNavFor: ".listing-images-carousel-thumbs"
        });
        $(".listing-images-carousel-thumbs").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            centerMode: true,
            focusOnSelect: true,
            draggable: false,
            arrows: true,
            centerPadding: 0,
            asNavFor: ".listing-images-carousel"
        });
        if ($("[id$=pnlListingInformation]").length > 0) {
            var listingInformation = "<span>" +
                $(".listingInformationOrgValue").text() + "</span><span>" +
                $(".listingInformationOrgCode").text() + "</span>";
            $(".harcourtsUSOffice").html(listingInformation);
        }
        var listingID = $("#listingDetail").attr("data-listingid");
        if (listingID != undefined) {
            $.post("/ListingHit/IncrementListingHit/" + listingID);
        }
        var isSimpleClick = false;
        var currentSlideIndex = 0;
        $(".listing-images-carousel").on('mousedown', function() {
            isSimpleClick = true;
        }).on('mousemove', function() {
            isSimpleClick = false;
        }).on('click', function(e) {
            e.preventDefault();
            if (!isSimpleClick) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                return;
            }
            currentSlideIndex = $(this).slick("slickCurrentSlide");
            var $carousel = $(".listing-images-modal-carousel");
            var slider = $carousel[0];
            if (!self.isSlickInitialized(slider)) {
                $carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    adaptiveHeight: true,
                    variableWidth: true,
                    infinite: true,
                    appendArrows: $(".listing-images-modal .listing-images-modal-carousel-button"),
                    initialSlide: currentSlideIndex,
                });
                $carousel.off("beforeChange").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
                    self.adjustDialogSize($listingimagesDialog, slick, nextSlide);
                });
                $carousel.off("afterChange").on("afterChange", function() {
                    $listingimagesDialog.dialog("option", "position", {
                        my: "center",
                        at: "center",
                        of: window
                    });
                });
            }
            var targetImage = self.getLargeSlideImage($carousel[0].slick, currentSlideIndex)[0];
            var size = self.ensureimagesize(targetImage);
            var $listingimagesDialog = $(".listing-images-modal");
            $listingimagesDialog.dialog({
                create: function(e) {
                    $(".ui-widget-header").remove();
                },
                open: function(e, ui) {
                    $carousel.slick("slickGoTo", currentSlideIndex);
                    $listingimagesDialog.keydown(function(event) {
                        if (event.which == 37) {
                            $(".listing-images-modal-carousel").slick("slickPrev");
                        }
                        if (event.which == 39) {
                            $(".listing-images-modal-carousel").slick("slickNext");
                        }
                    });
                    $(".listing-images-modal-carousel-button .slick-play").on("click", function() {
                        var self = $(this);
                        if (self.hasClass("slick-play")) {
                            $carousel.slick("slickPlay");
                            self.removeClass("slick-play");
                            self.addClass("slick-pause");
                        } else if (self.hasClass("slick-pause")) {
                            $carousel.slick("slickPause");
                            self.removeClass("slick-pause");
                            self.addClass("slick-play");
                        }
                    });
                    self.adjustDialogSize($listingimagesDialog, $carousel[0].slick, currentSlideIndex);
                },
                close: function(event, ui) {
                    $(this).find(".ui-dialog-content").empty().dialog("destroy");
                },
                dialogClass: "listing-images-modal-container",
                draggable: false,
                resizable: false,
                modal: true,
                responsive: false,
                clickOut: true,
                width: size.width,
                height: size.height + 20
            });
        });
        $(".popupWin").click(function() {
            utils.popupWin({
                href: $(this).attr("href"),
                name: "virtualTour",
                width: 800,
                height: 480,
                scrollbars: true,
                resizable: true,
                status: false
            });
            return false;
        });
        $("#mediaOptions ul li a").each(function() {
            if ($(this).hasClass("disabled")) {
                return;
            }
            var $li = $(this).parent();
            if ($li.hasClass("view_map") || $li.hasClass("view_photo")) {
                $(this).click(function() {
                    $("#mediaContainer > section").hide();
                    $("#mediaOptions ul li a").removeClass("active");
                    $(this).addClass("active");
                    if ($li.hasClass("view_map")) {
                        var $mapView = $("#mapView");
                        $mapView.removeClass("hidden").show();
                        if ($mapView.attr('iswalkscoremap') !== 'true') {
                            listing_View.initGoogleMap();
                        }
                    } else if ($li.hasClass("view_photo")) {
                        $("#mediaContainer .listing-images").show();
                        self.reinitialiseImageCarousel();
                    }
                });
            }
        });
        $(".basicFancybox").fancybox({
            'frameWidth': 640,
            'frameHeight': 480,
            'titleShow': false
        });
        $("#formEnquiry").harcourtsForm({
            url: "/OrganisationalUnit/Enquiry",
            namePrefix: "enq"
        });
        $(".contactAgentBtn a.btn").click(function() {
            setTimeout('$("#formEnquiry input[name=name]").select().focus()', 100);
        });
        self.resizeImageContainer($imageCarousel);
        $(window).on("resize", function(e) {
            self.resizeImageContainer($imageCarousel);
        });
    },
    isSlickInitialized: function(element) {
        return typeof element.slick !== "undefined" && element.slick !== null;
    },
    getLargeSlideImage: function(slick, index) {
        var $slides = slick.$slides;
        var $currentSlide = $($slides.get(index));
        var $activeImage = $currentSlide.find("img");
        return $activeImage;
    },
    ensureimagesize: function(activeImage) {
        $(activeImage).css("width", "");
        $(activeImage).css("height", "");
        var width = $(activeImage).attr("width");
        var height = $(activeImage).attr("height");
        var ratio = width / height;
        var resized = false;
        if ($(window).height() <= height) {
            height = $(window).height() * 0.9;
            width = height * ratio;
            resized = true;
        }
        if ($(window).width() <= width) {
            width = $(window).width() * 0.9;
            height = width / ratio;
            resized = true;
        }
        if (resized) {
            $(activeImage).width(width);
            $(activeImage).height(height);
        }
        var actualSize = {
            width: $(activeImage).width(),
            height: $(activeImage).height()
        };
        return actualSize;
    },
    reinitialiseImageCarousel: function() {
        $(".listing-images-carousel").slick("unslick");
        $(".listing-images-carousel-thumbs").slick("unslick");
        $(".listing-images-carousel").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            adaptiveHeight: true,
            asNavFor: ".listing-images-carousel-thumbs"
        });
        $(".listing-images-carousel-thumbs").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            centerMode: true,
            focusOnSelect: true,
            draggable: false,
            arrows: true,
            centerPadding: 0,
            asNavFor: ".listing-images-carousel"
        });
    },
    initGoogleMap: function() {
        var $mapBtn = $("#mediaOptions .view_map a");
        var zoom = $mapBtn.attr("zoom");
        var points = [];
        points[0] = {
            position: utils.getGLatLng($mapBtn)
        };
        $("#map").googleMap({
            points: points,
            mapzoom: parseInt(zoom),
            allowSearch: false
        });
    },
    resizeImageContainer: function($imageCarousel) {
        var ratio = 450 / 700;
        var currentWidth = $imageCarousel.width();
        var newMaxHeight = currentWidth * ratio;
        $imageCarousel.css("height", newMaxHeight);
        $imageCarousel.find(".slick-slide").css("height", newMaxHeight);
    },
    adjustDialogSize: function($dialog, slick, index) {
        var self = this;
        var $activeImage = self.getLargeSlideImage(slick, index);
        var size = self.ensureimagesize($activeImage[0]);
        $dialog.dialog("option", {
            width: size.width,
            height: size.height + 20
        });
        slick.$slideTrack.height(size.height);
    },
    autoPlayStart: function(interval) {
        var autoPlay = {
            'timeoutId': 0,
            'isRunning': true,
            'isFiring': false,
            'interval': interval
        };
        autoPlay.timeoutId = setTimeout(listing_View._autoPlayMoveNext, autoPlay.interval);
        listing_View.__autoPlayTimer = autoPlay;
    },
    autoPlayPause: function() {
        var autoPlay = listing_View.__autoPlayTimer;
        if (utils.is(autoPlay) && autoPlay.isRunning) {
            clearTimeout(autoPlay.timeoutId);
            autoPlay.timeoutId = 0;
            autoPlay.isRunning = false;
        }
    },
    _autoPlayMoveNext: function() {
        listing_View.__autoPlayTimer.isFiring = true;
        $.fancybox.next();
    },
    _getIsAutoPlay: function() {
        var result = utils.is(listing_View.__autoPlayTimer) && listing_View.__autoPlayTimer.isRunning;
        return result;
    }
}
var listing_SearchForm = {
    initCommon: function() {
        $("#locations select").change(function() {
            var selectChanged = this;
            var selectFirstChild;
            var selectedIndex = this.selectedIndex;
            $(this).parent().nextAll().find("select").each(function(i) {
                this.selectedIndex = 0;
                this.disabled = true;
                $(this).addClass("disabled");
                if (i == 0 && selectedIndex > 0) {
                    selectFirstChild = this;
                    $.getJSON("/Location/DropDownLocations/" + $(selectChanged).val(), function(results) {
                        $(selectFirstChild).find("option:not(:first)").remove();
                        $.each(results, function(i, result) {
                            var opt = new Option();
                            opt.text = result.name;
                            opt.value = result.id;
                            selectFirstChild.options[i + 1] = opt;
                        });
                        selectFirstChild.disabled = false;
                        $(selectFirstChild).removeClass("disabled");
                    });
                }
            });
        });
        $("#locations").parents("form").submit(function() {
            var $selects = $("#locations select");
            var $location = $("input[name=location]");
            for (var i = $selects.length - 1; i >= 0; i--) {
                var select = $selects.get(i);
                if (select.selectedIndex > 0) {
                    $location.val($(select).val());
                    event.stopImmediatePropagation();
                    return;
                }
            }
            $location.val("");
        });
        $("li[minMaxDropDowns] select").change(function() {
            var firstIndex;
            $(this).parents("li[minMaxDropDowns]").children("select").each(function(i) {
                if (i == 0) {
                    firstIndex = this.selectedIndex;
                } else if (firstIndex > this.selectedIndex) {
                    this.selectedIndex = 0;
                }
            });
        });
        $("#listtype").change(function() {
            $("#homeFeature form").attr("action", this.value);
            var $this = $(this);
            var selectFirstChild;
            var selectedIndex = this.selectedIndex;
            var _listingTypeID = $("#listtype option:selected").attr('data-listingtypeid');
            var _propertyTypes = $("[name=proptype]");
            _propertyTypes.addClass("disabled");
            var _pricing = $("li[minMaxDropDowns] select");
            _pricing.addClass("disabled");
            _propertyTypes.each(function(i) {
                this.selectedIndex = 0;
                this.disabled = true;
                selectFirstChild = this;
                $.getJSON("/PropertyType/GetPropertyTypesJson/" + _listingTypeID, function(results) {
                    $(selectFirstChild).find("option:not(:first)").remove();
                    $.each(results, function(i, result) {
                        var opt = new Option();
                        opt.text = result.name;
                        opt.value = result.id;
                        selectFirstChild.options[i + 1] = opt;
                    });
                    selectFirstChild.disabled = false;
                    $(selectFirstChild).removeClass("disabled");
                });
            });
            _pricing.each(function(i) {
                this.selectedIndex = 0;
                var selectChanged = this;
                $.getJSON("/Price/GetPricesJson/" + _listingTypeID, function(results) {
                    $(selectChanged).find("option:not(:first)").remove();
                    $.each(results, function(i, result) {
                        var opt = new Option();
                        opt.text = result.text;
                        opt.value = result.value;
                        selectChanged.options[i + 1] = opt;
                        $(selectChanged).removeClass("disabled");
                    });
                });
            });
            var allowSold = $("#listtype option:selected").attr('data-allowsold') === 'true';
            var $li = $this.closest('#srchform').find('#soldPropertiesRadios');
            if (allowSold) {
                $li.show();
            } else {
                $li.hide();
                var $soldRadio = $li.find('input[id=sold]');
                $soldRadio.first().attr('checked', true);
                $soldRadio.last().attr('checked', false);
            }
        }).trigger("change");
        this.initLeftSideBannerCarousel();
    },
    initForSaleOrSold: function() {
        var $forSaleOrSold = $("#soldPropertiesRadios input[type=radio]");
        $forSaleOrSold.each(function() {
            var $this = $(this);
            if ($this.attr("id")) {
                $this.attr('id', $this.attr('id').replace(/Layout_Widgets_\d+__/, ""));
            }
            if ($this.attr("name")) {
                $this.attr('name', $this.attr('name').replace(/Layout.Widgets\[\d+\]./, ""));
            }
            if ($this.attr("for")) {
                $this.attr('for', $this.attr('for').replace(/Layout_Widgets_\d+__/, ""));
            }
        });
    },
    initRentOrSale: function() {
        var self = this;
        var $rentOrSaleRadios = $("#rentOrSaleRadios input[type=radio]");
        $rentOrSaleRadios.change(function() {
            var rangeString = $(this).val() == "false" ? $("#rentPriceRange").val() : $("#salePriceRange").val();
            var items = rangeString.split("~");
            $("#priceDropDowns select").each(function() {
                $(this).find("option:not(:first)").remove();
                for (var i = 0; i < items.length; i++) {
                    var nameVal = items[i].split('|');
                    this.options[i + 1] = new Option(nameVal[1], nameVal[0]);
                }
                var opt0 = this.options[0];
                this.options[this.options.length] = new Option(opt0.value, opt0.text);
            });
            self.showForSaleOrSoldRadios($(this).val() === "true");
        });
        self.showForSaleOrSoldRadios($rentOrSaleRadios.filter(':checked').val() === "true");
    },
    showForSaleOrSoldRadios: function(showCheckbox) {
        if (showCheckbox) {
            $('#soldPropertiesRadios').show();
        } else {
            $('#soldPropertiesRadios').hide();
        }
    },
    initLeftSideBannerCarousel: function() {
        var $container = $("#leftSideBanner");
        var isCarousel = $container.hasClass("carousel");
        var length = $container.find("#banners li").length;
        if (length > 1 && isCarousel) {
            $container.jCarouselLite({
                vertical: false,
                visible: 1,
                mouseWheel: false,
                auto: 5000,
                speed: 500,
                stopOnHover: true
            });
        }
    }
};
var listing_ListingSearchResults = {
    init: function() {
        if ($("[id$=pnlListingInformation]").length > 0) {
            var listingInformation = "<span>" +
                $(".listingInformationOrgValue").text() + "</span><span>" +
                $(".listingInformationOrgCode").text() + "</span>";
            $(".harcourtsUSOffice").html(listingInformation);
        }
        var $searchKeyword = $("#searchKeyword");
        var searchKeyword = jQuery.trim($searchKeyword.val());
        if (searchKeyword && searchKeyword != $searchKeyword.attr("title")) {
            $("body").append('<img src="' + _resources.webSiteRootUrl + '/ListingHit/Metrics/' +
                utils.urlEncode(searchKeyword) + '_' + now() + '_statistics" alt="" style="display:none;" />');
        }
        $("#saveSearch a.save").click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.hide();
            var $loginMessage = $("#saveSearch .loginMessage");
            if ($loginMessage.html()) {
                $loginMessage.show();
                var url = utils.getUrlWithoutHost(true);
                $("#saveSearch .ssLogin,#saveSearch .ssRegister").each(function() {
                    $(this).attr("href", utils.appendParam($(this).attr("href"), "ReturnUrl", url));
                });
                return;
            }
            $(".favouriteSearches").html('<div class="savingSearch">' + _resources.savingDotDotDot + "</div>").show();
            var $search = $("input.helpInput");
            var isHelperText = false;
            if ($search.val() == _resources.publicSiteKeywordSearchHelper) {
                $search.val("");
                isHelperText = true;
            }
            var form = $("form:has(input[name=pageid])").serialize();
            if (isHelperText) {
                $search.val($search.attr("title"));
            }
            $.post("/MyAccount/SaveFavouriteSearch", form, function(obj) {
                $(".favouriteSearches .savingSearch").remove();
                createFavouriteSearchesList(obj);
                $(".favouriteSearches").slideDown("fast");
                $(".favouriteSearches .search .remove a").click(function() {
                    $(".favouriteSearches").slideUp("fast", function() {
                        $this.show();
                    });
                });
            }, "json");
        });
        $("#pageCount").change(function(e) {
            var find = "#pageCount + a:contains(" + $(this).val() + ")";
            window.location = $(find).attr('href');
            e.preventDefault();
        });
        $("#listTabs a").click(function() {
            $("#listTabs li").each(function() {
                $(this).removeClass("listActive");
            });
            $(this).parent().addClass("listActive");
        });
        $(".openhomeshort").click(function() {
            var $openHomeDates = $(this).next();
            $(this).toggleClass("openhomeshort");
            $(this).toggleClass("openhomeshortup");
            $openHomeDates.slideToggle();
            var loaded = $(this).attr("isloaded").toBool();
            if (!loaded) {
                var listingID = $(this).parents("li[listingID]").attr("listingID");
                $openHomeDates.load("/Listing/GetOpenHomesForListing/" + listingID);
                $(this).attr("isloaded", true);
            }
        });
        $(".openhome").click(function() {
            document.location = $(this).parent().find("a:first").attr('href');
        });
        if ($("#map-v").hasClass('listActive')) {
            listing_ListingSearchResults.initGoogleMap();
        }
        $("div.listingContent h2").tooltip();
        dropnav.init();
    },
    initGoogleMap: function() {
        var points = [];
        $("#searchResults li[lat]").each(function(i) {
            var lat = new Number($(this).attr("lat"));
            var lng = new Number($(this).attr("lng"));
            if (lat != 0 || lng != 0) {
                points[points.length] = new google.maps.LatLng(lat, lng);
            }
        });
        $("#searchResultsMapView").show();
        $("#searchResultsMapMain").each(function() {
            var options = {
                points: points,
                mapzoom: 4,
                allowSearch: true,
                doSearch: true
            };
            googleMapsV3.init(this, options);
        });
    }
};
var myAccount_EditProfile = {
    init: function() {
        $("#formEditProfile").harcourtsForm({
            url: "/MyAccount/EditProfile",
            namePrefix: "reg",
            clearFields: false
        });
    }
};
var myAccount_LogOn = {
    init: function() {
        $("#formLogOn").harcourtsForm({
            url: "/MyAccount/LogOn",
            namePrefix: "reg",
            allowAutoComplete: "true"
        });
    }
};
var myAccount_Register = {
    init: function() {
        $("#formRegister").harcourtsForm({
            url: "/MyAccount/Register",
            namePrefix: "reg",
            allowAutoComplete: "true"
        });
    }
};
var myAccount_ShortList = {
    init: function() {
        $(document).on("click", "td.shortlistEntry .remove a", function() {
            var $parent = $(this).parents("tr[listingID]:first");
            var listingID = new Number($parent.attr("listingID"));
            shortlist().removeFromShortListTable($parent, listingID);
        });
    }
};
var myAccount_FavouriteSearches = {
    init: function() {
        $("#alertsteps a").click(function() {
            $(this).hide();
            $(".listingAlert-howto").show();
        });
    }
};
var myAccount_BuyerTab = {
    init: function() {
        $("#buyingButton").parent("li").toggleClass("current", true);
    }
};
var myHarcourts_PropertyViewPage = {
    init: function() {
        var self = this;
        $("#sellingButton").parent("li").toggleClass("current", true);
        $("#promise-tabs a").click(function(event) {
            event.preventDefault();
            var $this = $(this),
                $tabsParent = $this.parent(),
                tab = $this.attr("href");
            $tabsParent.addClass("current").siblings().removeClass("current");
            $(".my-account-content .body-text > div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
        $("#promise-tabs a:first").click();
        $(".promise-events input:radio[name='eventFilter'][value='future']").prop("checked", true);
        self._setEventsDisplay('future');
        $(".promise-events input:radio[name='eventFilter']").on('change', function(e) {
            var selection = $(this).val();
            self._setEventsDisplay(selection);
        });
        $(".promise-events").on("focus", "select[name='eventselect']", function(e) {
            var $this = $(this);
            $this.data("original-value", $this.val());
        });
        $(".promise-events").on("change", "select[name='eventselect']", function(e) {
            var $this = $(this),
                $parent = $this.closest("tr"),
                $statusColumn = $parent.find("td.status"),
                request = {
                    harcourtsListingID: $parent.attr("data-harcourts-listing-id"),
                    promiseEventReminderEmailID: $parent.attr("data-promise-event-reminder-email-id"),
                    promiseReminder: $this.val()
                },
                result = {
                    isSuccess: true,
                    message: ""
                };
            self._updateEventStatusLoading($statusColumn);
            $.ajax({
                url: "/ClientLogin/UpdateReminder/",
                type: "PUT",
                data: request,
                dataType: "json"
            }).done(function(data) {
                result.isSuccess = data.isSuccess;
                result.message = data.message;
            }).fail(function() {
                result.isSuccess = false;
                result.message = "An unknown error occurred. Please try again later.";
            }).always(function() {
                self._updateEventStatusSuccess($statusColumn, result);
                if (!result.isSuccess) {
                    $this.val($this.data("original-value"));
                }
            });
        });
        $(".property-media-item-web-resolution").lightGallery({
            html: true,
            showThumbByDefault: true
        });
        $(".property-media-item-high-resolution").lightGallery({
            html: true,
            showThumbByDefault: true
        });
        $(".property-media-item .download-button").on("click", function(e) {
            e.stopPropagation();
        });
    },
    _setEventsDisplay: function(selection) {
        var now = new Date(),
            $tableRows = $(".promise-events .events-table > tbody > tr"),
            visibleRowCount = 0,
            self = this;
        if ($tableRows.length === 0) {
            return;
        }
        if (selection === "all") {
            $tableRows.show();
            self._noEventMessageToggle(false);
        } else {
            $tableRows.each(function() {
                var $this = $(this),
                    show, rowDate = new Date($this.attr("data-event-date-time"));
                show = (selection === "past") ? now >= rowDate : now <= rowDate;
                if (show) {
                    visibleRowCount++;
                }
                $this.toggle(show);
            });
            self._setNoEventMessage(selection, visibleRowCount === 0);
        }
    },
    _noEventMessageToggle: function(show) {
        $(".promise-events .events-table").toggle(!show);
        $("#promise-tab-schedule-and-alerts .no-events").toggle(show);
    },
    _setNoEventMessage: function(selection, show) {
        var self = this,
            currentFilterResource = "";
        if (!show) {
            self._noEventMessageToggle(show);
            return;
        }
        if (selection === "future") {
            currentFilterResource = $.resource("PublicPromiseEventsFilterFuture");
        }
        if (selection === "past") {
            currentFilterResource = $.resource("PublicPromiseEventsFilterPast");
        }
        var noEventsMessage = $.resource("PublicPromiseEventsNoEventsFormat").format(currentFilterResource);
        $("#promise-tab-schedule-and-alerts .no-events").text(noEventsMessage);
        self._noEventMessageToggle(show);
    },
    _updateEventStatusLoading: function($td) {
        $td.removeClass("warning").addClass("loading");
    },
    _updateEventStatusSuccess: function($td, result) {
        $td.removeClass("loading").toggleClass("warning", !result.isSuccess).attr("title", result.isSuccess ? "" : result.message);
        if (!result.isSuccess) {
            setTimeout(function() {
                $td.removeClass("warning").attr("title", "");
            }, 10 * 1000);
        }
    }
};
var dropnav = {
    init: function() {
        jQuery.each(["#navPropType > li h3", "#navLocation > li h3"], function(idx, query) {
            var $ul = $(query).next();
            $(query).click(function() {
                $ul.toggleClass("hover");
            }).hover(null, function() {
                if ($ul.hasClass("hover"))
                    $ul.removeClass("hover");
            });
            $ul.hover(null, function() {
                $(this).toggleClass("hover");
            });
        });
    }
};
var rental_Appraisal_Enquiry = {
    init: function() {
        $("#formEnquiry").harcourtsForm({
            url: "/PropertyManagement/FreeRentalAppraisalEnquiry",
            namePrefix: "reg"
        });
    }
};
var property_management_newsletter_signup = {
    init: function() {
        $("#formSignup").harcourtsForm({
            url: "/PropertyManagement/NewsLetterSignup",
            namePrefix: "reg"
        });
    }
};
$(function() {
    if ($('body.naiHarcourts').length == 1) {
        $("ul.dropdown li").hover(function() {
            $(this).addClass("hover");
            $('ul:first', this).css('visibility', 'visible');
        }, function() {
            $(this).removeClass("hover");
            $('ul:first', this).css('visibility', 'hidden');
        });
        $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
        $('#tabs').tabs({
            fx: {
                opacity: 'toggle'
            }
        }).tabs('rotate', 10000);
        $('#dialog_link, ul#icons li').hover(function() {
            $(this).addClass('ui-state-hover');
        }, function() {
            $(this).removeClass('ui-state-hover');
        });
        var rotateNewsItems = function() {
            var nextItems = $('ol.rotate li.active + li, ol.rotate:not(:has(li.active + li)) li:first-child');
            var previousItems = $('ol.rotate li.active');
            previousItems.removeClass('active');
            nextItems.addClass('active');
            var fadeTimeInMillis = 800;
            var inactiveItems = $('ol.rotate li:not(.active)');
            var itemCount = inactiveItems.length;
            var currentCount = 0;
            inactiveItems.fadeOut(fadeTimeInMillis, function() {
                currentCount += 1;
                if (currentCount == inactiveItems.length) {
                    $('ol.rotate li.active').fadeIn(fadeTimeInMillis);
                }
            });
        };
        setInterval(rotateNewsItems, 5000);
        $('#newsFeed li, #twitterBar li').css('display', 'block').hide();
        $('#newsFeed ol, #twitterBar ol').addClass('rotate').hover(function() {
            $(this).removeClass('rotate');
            $('li', this).stop(false, true);
            $('li.active', this).fadeTo(1, 1);
        }, function() {
            $(this).addClass('rotate');
        });
        rotateNewsItems();
    }
});
$(function() {
    $.fn.addInputPrefix = function(prefix) {
        this.find("input[type=hidden]").each(function() {
            var $this = $(this);
            if ($this.attr("id")) {
                $this.attr("id", prefix + "_" + $this.attr("id"));
            }
            if ($this.attr("name")) {
                $this.attr("name", prefix + "." + $this.attr("name"));
            }
        });
        return this;
    };
    $.fn.ajaxUpdate = function(data) {
        if ($.ajaxRedirectResult(data)) {
            return false;
        }
        $(this).html(data).functionName(true);
        return true;
    };
    $.fn.functionName = function(isPostBack) {
        var msg = "";
        var $el = $(this);
        var $elements = $el.find("[data-functionname]");
        if ($el.attr("data-functionname")) {
            $elements = $elements.add($el);
        }
        $elements.each(function() {
            var $this = $(this);
            var fns = $this.attr("data-functionname").split(' ');
            for (var j = 0; j < fns.length; j++) {
                var v = fns[j].split('.');
                var obj = window;
                var theObject;
                var success = true;
                for (var i = 0; i < v.length; i++) {
                    if (!obj) {
                        success = false;
                        break;
                    }
                    theObject = obj;
                    obj = obj[v[i]];
                }
                if (typeof obj !== "function") {
                    success = false;
                }
                if (success) {
                    obj.apply(theObject, [$this, (isPostBack === true)]);
                } else {
                    msg += fns[j] + "\r\n";
                }
            }
        });
        if (msg != "") {
            alert("Could not resolve function(s):\r\n\r\n" + msg);
        }
        return this;
    };
    $.fn.harcourtsSerialize = function() {
        var $this = $(this);
        return $this.find(":visible").add($this.find(":visible > input[type=hidden],.include :input,:input.include")).remove(".exclude").serialize();
    };
    $.fn.harcourtsSubmit = function(options) {
        if (typeof options == "String") {
            options = {
                url: options
            };
        }
        if (!options) {
            options = {};
        }
        return this.each(function() {
            var $form = $(this);
            if (!options.url) {
                options.url = $form.attr("action");
                if (!options.url) {
                    options.url = window.location.href
                }
            }
            var validator;
            $form.submit(function() {
                validator.cancelSubmit = true;
                return true;
            });
            validator = $form.validate({
                submitHandler: function(form) {
                    this.settings.cancelSubmit = true;
                    if (!validator.form()) {
                        validator.focusInvalid();
                        return false;
                    }
                    validator.formSubmitted = true;
                    if (options.submitHandler) {
                        if (options.presubmit || options.postsubmit) {
                            alert("options.presubmit and options.postsubmit are not valid when options.submitHandler is used.");
                            return false;
                        }
                        options.submitHandler.apply(this, [form]);
                    } else {
                        if (options.presubmit) {
                            options.presubmit.apply(this, [form]);
                        }
                        $.post(options.url, $form.find(":visible").add($form.find(":visible > input[type=hidden]")).remove(".exclude").serialize(), function(data) {
                            if ($form.ajaxUpdate(data)) {
                                if (options.postsubmit) {
                                    options.postsubmit.apply(this, [form]);
                                }
                            }
                        }, "html");
                    }
                    return false;
                }
            });
        });
    };
    $.fn.outerHTML = function(val) {
        if (val) {
            $(val).insertBefore(this);
            $(this).remove();
        } else {
            return $("<div>").append($(this).clone()).html();
        }
    }
    $.fn.sid = function(sid) {
        if (!sid) {
            return this.attr("data-sid");
        }
        return this.attr("data-sid", sid);
    };
    $.ajaxRedirectResult = function(data) {
        var redirectStartsWith = "AjaxRedirectResult:";
        if (typeof(data) == "string" && data.startsWith(redirectStartsWith)) {
            window.location = data.substring(redirectStartsWith.length, data.length);
            return true;
        }
        return false;
    };
    $.resource = function(key) {
        return $("[data-resource=" + key + "]").attr("data-resourcetext");
    }
    var $body = $("body");
    $body.functionName();
});
String.prototype.startsWith = function(t, i) {
    if (!i) {
        return (t == this.substring(0, t.length));
    } else {
        return (t.toLowerCase() == this.substring(0, t.length).toLowerCase());
    }
}
String.prototype.endsWith = function(t, i) {
    if (!i) {
        return (t == this.substring(this.length - t.length));
    } else {
        return (t.toLowerCase() == this.substring(this.length - t.length).toLowerCase());
    }
}
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.format = function() {
    var txt = this,
        i = arguments.length;
    while (i--) {
        txt = txt.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return txt;
}
String.prototype.htmlEncode = function() {
    return $('<div/>').text(this.toString()).html();
}
String.prototype.htmlDecode = function() {
    return $('<div/>').html(this.toString()).text();
}
String.prototype.contains = function(t) {
    return this.indexOf(t) >= 0;
}
String.prototype.replaceAll = function(x, y) {
    return this.split(x).join(y);
};
String.prototype.toBool = function() {
    return (/^true$/i).test(this.toLowerCase());
};

function StringBuilder(value) {
    this.strings = new Array("");
    this.append(value);
}
StringBuilder.prototype.append = function(value) {
    if (value) {
        this.strings.push(value);
    }
}
StringBuilder.prototype.clear = function() {
    this.strings.length = 1;
}
StringBuilder.prototype.toString = function() {
    return this.strings.join("");
}
$(function() {
    if ($('body.landmarkHarcourts').length == 1 && !$("body").hasClass("projWildFire")) {
        $("#howto").tabs();
        $(document).ready(function() {
            $("#linkList").accordion({
                collapsible: true,
                autoHeight: false,
                active: 7
            });
            $("#postCode").accordion({
                collapsible: true,
                autoHeight: false
            });

            function megaHoverOver() {
                $(this).find(".sub").stop().fadeTo('fast', 1).show();
                (function($) {
                    jQuery.fn.calcSubWidth = function() {
                        rowWidth = 0;
                        $(this).find("ul").each(function() {
                            rowWidth += $(this).width();
                        });
                    };
                })(jQuery);
                if ($(this).find(".row").length > 0) {
                    var biggestRow = 0;
                    $(this).find(".row").each(function() {
                        $(this).calcSubWidth();
                        if (rowWidth > biggestRow) {
                            biggestRow = rowWidth;
                        }
                    });
                    $(this).find(".sub").css({
                        'width': biggestRow
                    });
                    $(this).find(".row:last").css({
                        'margin': '0'
                    });
                } else {
                    $(this).calcSubWidth();
                    $(this).find(".sub").css({
                        'width': rowWidth
                    });
                }
            }

            function megaHoverOut() {
                $(this).find(".sub").stop().fadeTo('fast', 0, function() {
                    $(this).hide();
                });
            }
            var config = {
                sensitivity: 2,
                interval: 100,
                over: megaHoverOver,
                timeout: 1,
                out: megaHoverOut
            };
            $("#siteSwitcher ul li .sub").css({
                'opacity': '0'
            });
            $("#siteSwitcher ul li").hoverIntent(config);
            $(".navMainContainer ul li .sub").css({
                'opacity': '0'
            });
            $(".navMainContainer ul li").hoverIntent(config);
        });
        $("#quickSearchInput").attr("value", "suburb, street, listing #");
        var text = "suburb, street, listing #";
        $("#quickSearchInput").focus(function() {
            $(this).addClass("active");
            if ($(this).attr("value") == text) $(this).attr("value", "");
        });
        $("#quickSearchInput").blur(function() {
            $(this).removeClass("active");
            if ($(this).attr("value") == "") $(this).attr("value", text);
        });
        $(function() {
            $('.navMainContainer .last, .navMainContainer .first').hover(function() {
                $(this).children('a').addClass('active');
                $('.dropdown1').show;
            }, function() {
                $('.dropdown1').hide;
                $(this).children('a').removeClass('active');
            });
        });
        $(function() {
            $('.siteDropLink').hover(function() {
                $('.siteDropLinkBtn').addClass('active');
                $('.dropdown1').show;
            }, function() {
                $('.dropdown1').hide;
                $('.siteDropLinkBtn').removeClass('active');
            });
        });
        $(function() {
            $('.scroll-pane').jScrollPane({
                verticalDragMinHeight: 20,
                verticalDragMaxHeight: 52
            });
        });
    }
});;
var harcourtsPublic = {
    divHelp: null,
    divHelpTitle: null,
    divHelpContent: null,
    lastHelpImage: null,
    lastHelpAlignment: null,
    currentHelpAlignmentIndex: 1,
    init: function() {
        var self = this;
        var $sid3899 = $('[data-sid=3899]');
        $sid3899.mouseover(function() {
            var $this = $(this);
            self.lastHelpImage = $this;
            self.lastHelpAlignment = $this.attr('data-alignment');
            self.currentHelpAlignmentIndex = 1;
            if (self.divHelp === null) {
                self.createHelpPopup();
            }
            self.populateHelpPopupLoading();
            self.positionHelpPopup();
            self.populateHelpPopup($this.attr('data-key'));
        }).mouseout(function() {
            self.hideHelpPopup();
        });
    },
    createHelpPopup: function() {
        var self = this;
        $('body').append('<div data-sid="3900" class="helpPopup"><div class="helpPopupTitle"></div><div class="helpPopupContent"></div></div>');
        self.divHelp = $('[data-sid=3900]');
        self.divHelpTitle = self.divHelp.find('.helpPopupTitle');
        self.divHelpContent = self.divHelp.find('.helpPopupContent');
    },
    populateHelpPopupLoading: function() {
        var self = this;
        self.divHelp.width(300);
        self.divHelp.height();
        self.divHelpTitle.html($.resource('LoadingDotDotDot'));
        self.divHelpContent.html('');
        self.divHelp.css({
            'display': 'block'
        });
    },
    positionHelpPopup: function() {
        var self = this;
        self.divHelp.css({
            'top': '-1024px',
            'left': '-1024px',
            'position': 'absolute'
        });
        var position, offset, nextHelpAlignment;
        if (self.lastHelpAlignment == 'BottomRight') {
            position = 'left top';
            offset = 'right bottom';
            nextHelpAlignment = 'BottomLeft';
        } else if (self.lastHelpAlignment == 'BottomLeft') {
            position = 'right top';
            offset = 'left bottom';
            nextHelpAlignment = 'TopLeft';
        } else if (self.lastHelpAlignment == 'TopLeft') {
            position = 'right bottom';
            offset = 'left top';
            nextHelpAlignment = 'TopRight';
        } else if (self.lastHelpAlignment == 'TopRight') {
            position = 'left bottom';
            offset = 'right top';
            nextHelpAlignment = 'BottomRight';
        }
        self.divHelp.position({
            of: self.lastHelpImage,
            my: position,
            at: offset,
            collision: 'none'
        });
        if (self.currentHelpAlignmentIndex < 5 && !self.isInBounds()) {
            self.lastHelpAlignment = nextHelpAlignment;
            self.currentHelpAlignmentIndex = self.currentHelpAlignmentIndex + 1;
            self.positionHelpPopup();
        }
    },
    populateHelpPopup: function(helpKey) {
        var self = this;
        $.ajax({
            type: "get",
            cache: true,
            async: true,
            url: "/WebsiteContent/Help/GetByKey",
            data: {
                key: helpKey
            },
            dataType: "html",
            success: function(json) {
                var help = $.parseJSON(json);
                var title = help.Title;
                var content = help.Content;
                var width = 300;
                var height;
                if (!title) {
                    title = $.resource('HelpIconDefaultTitle');
                } else {
                    if (help.Width) {
                        width = help.Width + 'px';
                    }
                    if (help.Height) {
                        height = help.Height + 'px';
                    }
                }
                if (!content) {
                    content = $.resource('HelpIconDefaultContent') + ' <small>(' + help.Name + ')</small>';
                }
                self.divHelp.width(width);
                self.divHelp.height(height);
                self.divHelpTitle.html(title);
                self.divHelpContent.html(content);
                self.positionHelpPopup();
            }
        });
    },
    hideHelpPopup: function() {
        var self = this;
        if (self.divHelp != null) {
            self.divHelp.css({
                'display': 'none'
            });
        }
    },
    isInBounds: function() {
        var self = this;
        var off = self.divHelp.offset();
        off.right = off.left + self.divHelp.width();
        off.bottom = off.top + self.divHelp.height();
        var $window = $(window);
        if (off.left < $window.scrollLeft())
            return false;
        if (off.right > ($window.scrollLeft() + $window.width()))
            return false;
        if (off.top < $window.scrollTop())
            return false;
        if (off.bottom > ($window.scrollTop() + $window.height()))
            return false;
        return true;
    }
};;
var imageCopyRight = {
    init: function() {
        var self = this;
        $("img").on("contextmenu", function(e) {
            self.copyRightAlert(e);
        });
        $("a").filter(function() {
            return $(this).css("background-image") != "none";
        }).on("contextmenu", function(e) {
            self.copyRightAlert(e);
        });
    },
    copyRightAlert: function(event) {
        var currentYear = new Date().getFullYear();
        alert(_resources.blockedImageCopyrightMessage + '\u00A9 ' + currentYear);
        event.preventDefault();
    }
};;
(function($) {
    var scripts = [];

    function loadScript(url, callback, context) {
        var script = scripts[url] || (scripts[url] = {
            loaded: false,
            callbacks: []
        });
        if (script.loaded) {
            return callback.apply(context);
        }
        script.callbacks.push({
            fn: callback,
            context: context
        });
        if (script.callbacks.length == 1) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'script',
                cache: true,
                success: function() {
                    script.loaded = true;
                    $.each(script.callbacks, function() {
                        this.fn.apply(this.context);
                    });
                    script.callbacks.length = 0;
                }
            });
        }
    }
    $.requireScript = function(url, callback, context, options) {
        if (typeof options === 'undefined' && context && context.hasOwnProperty('parallel')) {
            options = context;
            context = window;
        }
        options = $.extend({
            parallel: true
        }, options);
        if (!$.isArray(url)) {
            return loadScript(url, callback, context);
        }
        var counter = 0;
        if (options.parallel) {
            return $.each(url, function() {
                loadScript(this, function() {
                    if (++counter == url.length) {
                        callback.apply(context);
                    }
                });
            });
        }
        (function() {
            if (counter == url.length) {
                return callback.apply(context);
            }
            loadScript(url[counter++], arguments.callee);
        })();
    };
    $.requireScript.registerLoaded = function(url) {
        $.each($.makeArray(url), function() {
            (scripts[url] || (scripts[url] = {})).loaded = true;
        });
    };
})(jQuery);;
(function($) {
    $.extend($.support, {
        placeholder: !!('placeholder' in document.createElement('input'))
    });
    $.fn.addPlaceholder = function(options) {
        var settings = {
            'class': 'placeholder',
            'allowspaces': false,
            'dopass': true,
            'dotextarea': true,
            'checkafill': false
        };
        return this.each(function() {
            if ($.support.placeholder) return false;
            $.extend(settings, options);
            if (!(this.tagName.toLowerCase() == 'input' || (settings['dotextarea'] && this.tagName.toLowerCase() == 'textarea'))) return true;
            var $this = $(this),
                ph = this.getAttribute('placeholder'),
                ispass = $this.is('input[type=password]');
            if (!ph) return true;
            if (settings['dopass'] && ispass) {
                passPlacehold($this, ph);
            } else if (!ispass) {
                inputPlacehold($this, ph)
            }
        });

        function inputPlacehold(el, ph) {
            if (valueEmpty(el.val()) || el.val() == ph) {
                el.val(ph);
                el.addClass(settings['class']);
            }
            el.focusin(function() {
                if (el.hasClass(settings['class'])) {
                    el.removeClass(settings['class']);
                    el.val('');
                }
            });
            el.focusout(function() {
                if (valueEmpty(el.val())) {
                    el.val(ph);
                    el.addClass(settings['class']);
                }
            });
        }

        function passPlacehold(el, ph) {
            el.addClass(settings['class']);
            var span = $('<span/>', {
                'class': el.attr('class') + ' ' + settings['class'],
                text: ph,
                css: {
                    border: 'none',
                    cursor: 'text',
                    background: 'transparent',
                    position: 'absolute',
                    top: el.position().top,
                    left: el.position().left,
                    lineHeight: el.height() + 3 + 'px',
                    paddingLeft: parseFloat(el.css('paddingLeft')) + 2 + 'px'
                }
            }).insertAfter(el);
            el.focusin(function() {
                if (el.hasClass(settings['class'])) {
                    span.hide();
                    el.removeClass(settings['class']);
                }
            });
            el.focusout(function() {
                if (valueEmpty(el.val())) {
                    span.show();
                    el.addClass(settings['class']);
                }
            });
            if (settings['checkafill']) {
                (function checkPass() {
                    if (!valueEmpty(el.val()) && el.hasClass(settings['class'])) {
                        el.focusin();
                    }
                    setTimeout(checkPass, 250);
                })();
            }
        }

        function valueEmpty(value) {
            return settings['allowspaces'] ? value === '' : $.trim(value) === '';
        }
    };
})(jQuery);;
(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return;
            }
            var validator = $.data(this[0], 'validator');
            if (validator) {
                return validator;
            }
            validator = new $.validator(options, this[0]);
            $.data(this[0], 'validator', validator);
            if (validator.settings.onsubmit) {
                this.find("input, button").filter(".cancel").click(function() {
                    validator.cancelSubmit = true;
                });
                if (validator.settings.submitHandler) {
                    this.find("input, button").filter(":submit").click(function() {
                        validator.submitButton = this;
                    });
                }
                this.submit(function(event) {
                    if (validator.settings.debug)
                        event.preventDefault();

                    function handle() {
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
                            }
                            validator.settings.submitHandler.call(validator, validator.currentForm);
                            if (validator.submitButton) {
                                hidden.remove();
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            if ($(this[0]).is('form')) {
                return this.validate().form();
            } else {
                var valid = true;
                var validator = $(this[0].form).validate();
                this.each(function() {
                    valid &= validator.element(this);
                });
                return valid;
            }
        },
        removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) {
                result[value] = $element.attr(value);
                $element.removeAttr(value);
            });
            return result;
        },
        rules: function(command, argument) {
            var element = this[0];
            if (!element) {
                return;
            }
            if (command) {
                var validator = $.data(element.form, 'validator');
                if (!validator) {
                    return;
                }
                var settings = validator.settings;
                var staticRules = settings.rules;
                var existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        staticRules[element.name] = existingRules;
                        if (argument.messages)
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        var filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                        });
                        return filtered;
                }
            }
            var data = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(element), $.validator.classRules(element), $.validator.attributeRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                var param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
            }
            return data;
        }
    });
    $.extend($.expr[":"], {
        blank: function(a) {
            return !$.trim("" + a.value);
        },
        filled: function(a) {
            return !!$.trim("" + a.value);
        },
        unchecked: function(a) {
            return !a.checked;
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length == 1)
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor != Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: [],
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    this.errorsFor(element).hide();
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element) {
                if (element.name in this.submitted || element == this.lastElement) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted)
                    this.element(element);
                else if (element.parentNode.name in this.submitted)
                    this.element(element.parentNode);
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {});
                $.each(this.settings.groups, function(key, value) {
                    $.each(value.split(/\s/), function(index, name) {
                        groups[name] = key;
                    });
                });
                var rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, "");
                    validator.settings[eventType] && validator.settings[eventType].call(validator, this[0]);
                }
                $(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate).validateDelegate(":radio, :checkbox, select, option", "click", delegate);
                if (this.settings.invalidHandler)
                    $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid())
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                element = this.clean(element);
                this.lastElement = element;
                this.prepareElement(element);
                this.currentElements = $(element);
                var result = this.check(element);
                if (result) {
                    delete this.invalid[element.name];
                } else {
                    this.invalid[element.name] = true;
                }
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) {
                        this.errorList.push({
                            message: errors[name],
                            element: this.findByName(name)[0]
                        });
                    }
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                if ($.fn.resetForm)
                    $(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass);
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0;
                for (var i in obj)
                    count++;
                return count;
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide();
            },
            valid: function() {
                return this.size() == 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name == lastActive.name;
                }).length == 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in rulesCache || !validator.objectLength($(this).rules()))
                        return false;
                    rulesCache[this.name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            check: function(element) {
                element = this.clean(element);
                if (this.checkable(element)) {
                    element = this.findByName(element.name)[0];
                }
                var rules = $(element).rules();
                var dependencyMismatch = false;
                for (method in rules) {
                    var rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);
                        if (result == "dependency-mismatch") {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result == "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
                        throw e;
                    }
                }
                if (dependencyMismatch)
                    return;
                if (this.objectLength(rules))
                    this.successList.push(element);
                return true;
            },
            customMetaMessage: function(element, method) {
                if (!$.metadata)
                    return;
                var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
                return meta && meta.messages && meta.messages[method];
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor == String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined)
                        return arguments[i];
                }
                return undefined;
            },
            defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customMetaMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message == "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
                }
                this.errorList.push({
                    message: message,
                    element: element
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper)
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                return toToggle;
            },
            defaultShowErrors: function() {
                for (var i = 0; this.errorList[i]; i++) {
                    var error = this.errorList[i];
                    this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (var i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (var i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var label = this.errorsFor(element);
                if (label.length) {
                    label.removeClass().addClass(this.settings.errorClass);
                    label.attr("generated") && label.html(message);
                } else {
                    label = $("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(element),
                        generated: true
                    }).addClass(this.settings.errorClass).html(message || "");
                    if (this.settings.wrapper) {
                        label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (!this.labelContainer.append(label).length)
                        this.settings.errorPlacement ? this.settings.errorPlacement(label, $(element)) : label.insertAfter(element);
                }
                if (!message && this.settings.success) {
                    label.text("");
                    typeof this.settings.success == "string" ? label.addClass(this.settings.success) : this.settings.success(label);
                }
                this.toShow = this.toShow.add(label);
            },
            errorsFor: function(element) {
                var name = this.idOrName(element);
                return this.errors().filter(function() {
                    return $(this).attr('for') == name;
                });
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            checkable: function(element) {
                return /radio|checkbox/i.test(element.type);
            },
            findByName: function(name) {
                var form = this.currentForm;
                return $(document.getElementsByName(name)).map(function(index, element) {
                    return element.form == form && element.name == name && element || null;
                });
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        return $("option:selected", element).length;
                    case 'input':
                        if (this.checkable(element))
                            return this.findByName(element.name).filter(':checked').length;
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param, element) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0)
                    this.pendingRequest = 0;
                delete this.pending[element.name];
                if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            className.constructor == String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className);
        },
        classRules: function(element) {
            var rules = {};
            var classes = $(element).attr('class');
            classes && $.each(classes.split(' '), function() {
                if (this in $.validator.classRuleSettings) {
                    $.extend(rules, $.validator.classRuleSettings[this]);
                }
            });
            return rules;
        },
        attributeRules: function(element) {
            var rules = {};
            var $element = $(element);
            for (method in $.validator.methods) {
                var value = $element.attr(method);
                if (value) {
                    rules[method] = value;
                }
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        metadataRules: function(element) {
            if (!$.metadata) return {};
            var meta = $.data(element.form, 'validator').settings.meta;
            return meta ? $(element).metadata()[meta] : $(element).metadata();
        },
        staticRules: function(element) {
            var rules = {};
            var validator = $.data(element.form, 'validator');
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
            });
            $.each(['minlength', 'maxlength', 'min', 'max'], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(['rangelength', 'range'], function() {
                if (rules[this]) {
                    rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min && rules.max) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength && rules.maxlength) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            if (rules.messages) {
                delete rules.messages;
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data == "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element))
                    return "dependency-mismatch";
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        var val = $(element).val();
                        return val && val.length > 0;
                    case 'input':
                        if (this.checkable(element))
                            return this.getLength(value, element) > 0;
                    default:
                        return $.trim(value).length > 0;
                }
            },
            remote: function(value, element, param) {
                if (this.optional(element))
                    return "dependency-mismatch";
                var previous = this.previousValue(element);
                if (!this.settings.messages[element.name])
                    this.settings.messages[element.name] = {};
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;
                param = typeof param == "string" && {
                    url: param
                } || param;
                if (previous.old !== value) {
                    previous.old = value;
                    var validator = this;
                    this.startRequest(element);
                    var data = {};
                    data[element.name] = value;
                    $.ajax($.extend(true, {
                        url: param,
                        mode: "abort",
                        port: "validate" + element.name,
                        dataType: "json",
                        data: data,
                        success: function(response) {
                            validator.settings.messages[element.name].remote = previous.originalMessage;
                            var valid = response === true;
                            if (valid) {
                                var submitted = validator.formSubmitted;
                                validator.prepareElement(element);
                                validator.formSubmitted = submitted;
                                validator.successList.push(element);
                                validator.showErrors();
                            } else {
                                var errors = {};
                                var message = (previous.message = response || validator.defaultMessage(element, "remote"));
                                errors[element.name] = $.isFunction(message) ? message(value) : message;
                                validator.showErrors(errors);
                            }
                            previous.valid = valid;
                            validator.stopRequest(element, valid);
                        }
                    }, param));
                    return "pending";
                } else if (this.pending[element.name]) {
                    return "pending";
                }
                return previous.valid;
            },
            minlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) >= param;
            },
            maxlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) <= param;
            },
            rangelength: function(value, element, param) {
                var length = this.getLength($.trim(value), element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            email: function(value, element) {
                return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            creditcard: function(value, element) {
                if (this.optional(element))
                    return "dependency-mismatch";
                if (/[^0-9-]+/.test(value))
                    return false;
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false;
                value = value.replace(/\D/g, "");
                for (var n = value.length - 1; n >= 0; n--) {
                    var cDigit = value.charAt(n);
                    var nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9)
                            nDigit -= 9;
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }
                return (nCheck % 10) == 0;
            },
            accept: function(value, element, param) {
                param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
                return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
            },
            equalTo: function(value, element, param) {
                var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    $(element).valid();
                });
                return value == target.val();
            }
        }
    });
    $.format = $.validator.format;
})(jQuery);;
(function($) {
    var ajax = $.ajax;
    var pendingRequests = {};
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, original, jqXHR) {
            var port = settings.port;
            if (settings.mode == "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = jqXHR;
            }
        });
    } else {
        $.ajax = function(settings) {
            settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
            var port = settings.port;
            if (settings.mode == "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                return (pendingRequests[port] = ajax.apply(this, arguments));
            }
            return ajax.apply(this, arguments);
        };
    }
})(jQuery);;
(function($) {
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
        $.each({
            focus: 'focusin',
            blur: 'focusout'
        }, function(original, fix) {
            $.event.special[fix] = {
                setup: function() {
                    this.addEventListener(original, handler, true);
                },
                teardown: function() {
                    this.removeEventListener(original, handler, true);
                },
                handler: function(e) {
                    arguments[0] = $.event.fix(e);
                    arguments[0].type = fix;
                    return $.event.handle.apply(this, arguments);
                }
            };

            function handler(e) {
                e = $.event.fix(e);
                e.type = fix;
                return $.event.handle.call(this, e);
            }
        });
    };
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
})(jQuery);;
var googleMapsV3 = {
    infoWindowVisible: false,
    infoWindow: null,
    map: null,
    mapMarkerArray: null,
    requestID: 0,
    zoomToExtent: false,
    fitBoundsAfterSearch: false,
    supressSearch: false,
    clearKeyWordOnNextSearch: false,
    init: function(element, options, style) {
        this.mapMarkerArray = new Array();
        this.map = null;
        options = this.mergeDefaultOptions(options);
        this.infoWindow = new google.maps.InfoWindow({
            maxWidth: 420
        });
        this.infoWindowVisible = false;
        var mapCenter = options.center ? options.center : (options.points && options.points.length > 0) ? this.getCentroid(options.points) : new google.maps.LatLng(_resources.lat, _resources.lng);
        var myOptions = {
            minZoom: 4,
            maxZoom: 20,
            zoom: options.mapzoom,
            center: mapCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(element, myOptions);
        this.map.options = options;
        if (options.points && options.points.length > 0) {
            for (var i = 0; i < options.points.length; i++) {
                var marker = this.displayMarker(options.points[i]);
                this.mapMarkerArray['point_' + i] = {
                    Marker: marker
                };
            }
            if (options.points.length > 1) {
                this.map.fitBounds(this.getBounds(options.points));
            }
        }
        google.maps.event.addListener(this.infoWindow, 'closeclick', function() {
            googleMapsV3.infoWindowVisible = false;
        });
        google.maps.event.addListener(this.map, 'click', function() {
            if (googleMapsV3.infoWindowVisible) {
                googleMapsV3.infoWindowVisible = false;
                googleMapsV3.infoWindow.close();
            }
        });
        if (style != undefined) {
            var mapStyle = new google.maps.StyledMapType(style.options, {
                name: style.name
            });
            this.map.mapTypes.set(style.name, mapStyle);
            this.map.setMapTypeId(style.name);
        }
        if (options.allowSearch) {
            this.zoomToExtent = options.zoomToExtent;
            $(document.forms['search']).submit(function() {
                return false;
            });
            if ($.browser.msie) {
                $(document.getElementById('searchKeyword')).keydown(function(e) {
                    if (e.which == 13)
                        googleMapsV3.dosearchFromMap();
                });
            }
            this.initMapSearch(options);
        }
    },
    mergeDefaultOptions: function(options) {
        options.fitBoundsAfterSearch = (options.fitBoundsAfterSearch) ? true : false;
        options.mapzoom = (options.mapzoom != null) ? options.mapzoom : _resources.zoom;
        options.allowSearch = (options.allowSearch != null) ? options.allowSearch : false;
        options.doSearch = (options.doSearch != null) ? options.doSearch : false;
        return options;
    },
    attachMarkerListener: function(marker) {
        google.maps.event.addDomListener(marker, 'click', function() {
            if (!marker.allListingsHaveSameLocation) {
                this.map.fitBounds(new google.maps.LatLngBounds(marker.sw, marker.ne));
            } else {
                googleMapsV3.showInfoWindow(marker, 0);
            }
        });
    },
    showInfoWindow: function(marker, position) {
        if (marker.listingIDs.length == 0)
            return;
        var url = "/Map/ListingsInfoWindow/?listingIDs=" +
            encodeURI(marker.listingIDs) + '&position=' + position + '&rnd=' + Math.random();
        $.get(url, function(data) {
            var div = "<div class='infowindow-data'>" + data + "</div>";
            googleMapsV3.infoWindow.setContent(div);
            googleMapsV3.infoWindow.setPosition(marker.position);
            if (!googleMapsV3.infoWindowVisible) {
                googleMapsV3.infoWindow.open(marker.getMap());
            }
            googleMapsV3.infoWindowVisible = true;
            $(".infowindow-data").on("click", ".viewControls a", function() {
                var navinc = parseInt($(this).attr('data-navigate'));
                var newpos = isNaN(navinc) ? 0 : position + navinc;
                googleMapsV3.showInfoWindow(marker, newpos);
            });
            var displayedListingID = marker.listingIDs[position];
            $.post("/ListingHit/IncrementListingHit/" + displayedListingID);
        });
    },
    boundschanged: false,
    zoomchanged: false,
    searchControl: null,
    initMapSearch: function(options) {
        google.maps.event.addListener(this.map, 'zoom_changed', function() {
            googleMapsV3.zoomchanged = true;
        });
        google.maps.event.addListener(this.map, 'bounds_changed', function() {
            googleMapsV3.boundschanged = true;
        });
        this.fitBoundsAfterSearch = options.fitBoundsAfterSearch;
        this.searchControl = document.createElement('DIV');
        this.searchControl.className = "mapSearchControl";
        this.searchControl.innerText = _resources.searchingDotDotDot;
        this.searchControl.style.visibility = 'hidden';
        this.searchControl.index = 1;
        this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.searchControl);
        var firstIdle = true;
        google.maps.event.addListener(this.map, 'idle', function() {
            firstIdle = false;
            if ((googleMapsV3.boundschanged || googleMapsV3.zoomchanged)) {
                googleMapsV3.dosearchFromMap();
                if (googleMapsV3.clearKeyWordOnNextSearch) {
                    googleMapsV3.clearKeyWordOnNextSearch = false;
                    document.getElementById('searchKeyword').value = "";
                }
            }
        });
        this.attachListingFormChangeHandlers();
    },
    currentListingSearchParameters: "",
    previousListingSearchParameters: "",
    dosearchFromMap: function() {
        if (googleMapsV3.infoWindowVisible) {}
        if (googleMapsV3.supressSearch) {
            googleMapsV3.supressSearch = false;
            return;
        }
        if (googleMapsV3.requestID > 1) {
            var el = document.getElementById("originalTermText");
            if (el) {
                el.value = "";
            }
            el = document.getElementById("originalLocation");
            if (el) {
                el.value = "";
            }
        }
        googleMapsV3.currentListingSearchParameters = this.getListingSearchParameters();
        var formAction = document.forms['srchform'].action;
        var url = '/Map/MapSearch/?formAction=' + encodeURI(formAction) + '&' + this.getMapSearchParameters(this.map) + googleMapsV3.currentListingSearchParameters;
        var added = 0;
        if (googleMapsV3.currentListingSearchParameters != googleMapsV3.previousListingSearchParameters) {
            this.clearMarkers(googleMapsV3.mapMarkerArray);
            googleMapsV3.mapMarkerArray = new Array();
        }
        googleMapsV3.previousListingSearchParameters = googleMapsV3.currentListingSearchParameters;
        googleMapsV3.searchControl.style.visibility = 'visible';
        window.setTimeout('googleMapsV3.searchControl.style.visibility = "hidden"', 600);
        googleMapsV3.requestID++;
        var requestUrl = url + '&requestID=' + googleMapsV3.requestID + '&r=' + Math.random();
        $.ajax({
            type: "GET",
            url: requestUrl,
            dataType: "json",
            beforeSend: function(request) {
                request.setRequestHeader("Harcourts-Referer", $(location).attr("href"));
            },
            success: function(jsonResult) {
                if (jsonResult.ResetViewport && googleMapsV3.requestID > 0) {
                    googleMapsV3.fitBoundsAfterSearch = true;
                    googleMapsV3.clearKeyWordOnNextSearch = true;
                }
                if (jsonResult.MapSearchResults == null || jsonResult.MapSearchResults.length == 0 || jsonResult.RequestID != googleMapsV3.requestID) {
                    return;
                }
                var zoomchangeForRequest = googleMapsV3.zoomchanged;
                if (zoomchangeForRequest) {
                    for (var key in googleMapsV3.mapMarkerArray) {
                        googleMapsV3.mapMarkerArray[key].ToHide = true;
                    }
                }
                var allPositions = new Array();
                $.each(jsonResult.MapSearchResults, function(i, result) {
                    var existingResult = googleMapsV3.mapMarkerArray[result.TileKey];
                    if (existingResult) {
                        allPositions[allPositions.length] = existingResult.Marker;
                        googleMapsV3.showMarker(existingResult);
                        existingResult.ToHide = false;
                    } else {
                        var marker = googleMapsV3.createMarker(result);
                        googleMapsV3.attachMarkerListener(marker);
                        allPositions[allPositions.length] = marker;
                        added++;
                    }
                });
                if (zoomchangeForRequest) {
                    for (var key in googleMapsV3.mapMarkerArray) {
                        if (googleMapsV3.mapMarkerArray[key].ToHide) {
                            googleMapsV3.hideMarker(googleMapsV3.mapMarkerArray[key]);
                            googleMapsV3.mapMarkerArray[key].ToHide = false;
                        }
                    }
                }
                googleMapsV3.zoomchanged = false;
                googleMapsV3.boundschanged = false;
                if (googleMapsV3.fitBoundsAfterSearch) {
                    googleMapsV3.fitBoundsAfterSearch = false;
                    googleMapsV3.map.fitBounds(googleMapsV3.getBounds(allPositions));
                }
            }
        });
    },
    showMarker: function(item) {
        if (item && item.Marker && !item.Marker.getVisible())
            item.Marker.setVisible(true);
    },
    hideMarker: function(item) {
        if (item && item.Marker && item.Marker.getVisible())
            item.Marker.setVisible(false);
    },
    clearMarkers: function(markers) {
        for (var key in markers) {
            this.removeMarker(markers[key]);
        }
    },
    removeMarker: function(item) {
        if (item && item.Marker) {
            item.Marker.setMap(null);
        }
    },
    getMapSearchParameters: function(map) {
        var bounds = map.getBounds();
        var swLat = bounds.getSouthWest().lat();
        var neLat = bounds.getNorthEast().lat();
        var swLng = bounds.getSouthWest().lng();
        var neLng = bounds.getNorthEast().lng();
        return 'swLat=' + swLat + '&neLat=' + neLat + '&swLng=' + swLng + '&neLng=' + neLng + '&zoom=' + map.getZoom();
    },
    getIconForResult: function(result) {
        var sizeX = 60;
        var sizeY = 60;
        scaleFactor = (Math.log(result.ListingCount + 15) / 4.5);
        if (scaleFactor > 1.2)
            scaleFactor = 1.2;
        var scaledSizeX = sizeX * scaleFactor;
        var scaledSizeY = sizeY * scaleFactor;
        var image = new google.maps.MarkerImage('/images/harcourts-marker.png', new google.maps.Size(sizeX, sizeY), new google.maps.Point(0, 0), new google.maps.Point(13, 41), new google.maps.Size(scaledSizeX, scaledSizeY));
        return image;
    },
    attachListingFormChangeHandlers: function() {
        var elementlist = new Array('searchKeyword', 'selectPriceMin', 'max', 'selectBedMin', 'selectBedMax', 'selectPriceMax', 'filterMax', 'location', 'proptype', 'selectLandSizeMin', 'selectLandSizeMax', 'selectfloorAreaMin', 'selectfloorAreaM', 'sale', 'sold');
        for (var i = 0; i < elementlist.length; i++) {
            var $el = $('[id=' + elementlist[i] + ']');
            if ($el.length > 0) {
                $el.change(function() {
                    googleMapsV3.dosearchFromMap();
                });
            }
        }
    },
    getListingSearchParameters: function() {
        var paramlist = "";
        var elementlist = new Array('pageid', 'searchKeyword', 'selectPriceMin', 'max', 'selectBedMin', 'selectBedMax', 'selectPriceMax', 'filterMax', 'location', 'proptype', 'selectLandSizeMin', 'selectLandSizeMax', 'selectfloorAreaMin', 'selectfloorAreaM', 'sale', 'sold');
        for (var i = 0; i < elementlist.length; i++) {
            var $el = $('[id=' + elementlist[i] + ']');
            if ($el.length > 0 && $el.val() !== $el.attr('title')) {
                if (!($el.val().indexOf('suburb,') == 0)) {
                    var elementType = $el.attr('type');
                    if (elementType === 'radio') {
                        var $checkedButton = $el.filter(':checked');
                        paramlist += '&' + $el.attr('name') + '=' + (($checkedButton.length > 0) ? $checkedButton.val() : $el.first().val());
                    } else if (elementType === 'checkbox') {
                        paramlist += '&' + $el.attr('name') + '=' + (($el.length > 0) ? $el.is(":checked") : "false");
                    } else {
                        paramlist += '&' + $el.attr('name') + '=' + (($el.length > 0) ? encodeURI($el.val().replace('#', '')) : "");
                    }
                }
            }
        }
        var ott = window.document.getElementById('originalTermText');
        if (ott) {
            paramlist = paramlist + '&SearchKeyword=' + ott.value;
            ott.value = '';
        }
        var orl = window.document.getElementById('originalLocation');
        if (orl) {
            paramlist = paramlist + '&OriginalLocation=' + orl.value;
            orl.value = '';
        }
        return paramlist;
    },
    displayMarker: function(point) {
        var pos = point.position ? point.position : point;
        var marker = new google.maps.Marker({
            position: pos,
            icon: '/images/harcourts-marker.png',
            map: this.map,
            ne: pos,
            sw: pos,
            listingCount: 1,
            listingZoomLevel: 17,
            listingIDs: point.listingID,
            tileKey: 'searchResult_' + point.listingID,
            title: point.listingID,
            oid: point.oid
        });
        point.marker = marker;
        point.marker.openInfoWindowHtml = function(data) {
            googleMapsV3.supressSearch = true;
            var gmap = googleMapsV3.map;
            var infowindow = googleMapsV3.infoWindow;
            infowindow.setContent(data);
            if (gmap.getZoom() != 15)
                gmap.setZoom(15);
            infowindow.setPosition(marker.position);
            infowindow.open(gmap);
            google.maps.event.addListenerOnce(gmap, 'click', function() {
                infowindow.setMap(null);
            });
        };
        googleMapsV3.mapMarkerArray[marker.tileKey] = {
            Marker: marker
        };
        return marker;
    },
    getTitle: function(listingCount, listingsHaveSameLocation) {
        if (listingCount == 1) {
            return 'One listing.  Click to display details';
        } else if (listingsHaveSameLocation) {
            return listingCount + ' listings. Click to display details';
        } else {
            return listingCount + ' listings. Click to zoom in';
        }
    },
    getWidth: function(count) {
        var sizeX = 60;
        scaleFactor = (Math.log(count + 15) / 4.5);
        if (scaleFactor > 1.2)
            scaleFactor = 1.2;
        return sizeX * scaleFactor;
    },
    createMarker: function(result) {
        var marker = new google.maps.OverlayView({
            map: this.map
        });
        marker.position = new google.maps.LatLng(result.MarkerLatitude, result.MarkerLongitude);
        marker.text = result.ListingCount;
        marker.allListingsHaveSameLocation = result.AllListingsHaveSameLocation;
        marker.allListingsHaveSimilarLocation = result.AllListingsHaveSimilarLocation;
        marker.listingIDs = result.IDList;
        marker.listingCount = parseInt(result.ListingCount);
        marker.ne = new google.maps.LatLng(result.MaxLatitude, result.MaxLongitude);
        marker.sw = new google.maps.LatLng(result.MinLatitude, result.MinLongitude);
        marker.tileKey = result.TileKey;
        marker.listingZoomLevel = parseInt(result.ListingZoomLevel);
        marker.width = 40;
        marker.IsHarcourtsListing = result.IsHarcourtsListing;
        marker.setVisible = function(visible) {
            marker.div_.style.display = (visible) ? 'block' : 'none';
            marker.visible_ = visible;
        };
        marker.getVisible = function() {
            return marker.visible_;
        };
        marker.onRemove = function() {
            marker.div_.parentNode.removeChild(marker.div_);
            marker.div_ = null;
            marker.visible_ = false;
        };
        marker.onAdd = function() {
            var div = document.createElement('DIV');
            div.style.border = "none";
            div.style.borderWidth = "0px";
            div.style.position = "absolute";
            if (marker.listingCount > 1) {
                div.className = 'mapClusterBackground';
                var text = document.createElement('DIV');
                text.className = "clusterOverlay";
                text.innerHTML = marker.text;
                div.appendChild(text);
            } else if (marker.IsHarcourtsListing) {
                div.className = 'mapSingleHarcourtsListingBackground';
            } else {
                div.className = 'mapSingleExternalListingBackground';
            }
            div.style.backgroundPosition = "0px 1px";
            div.style.cursor = 'pointer';
            google.maps.event.addDomListener(div, 'click', function() {
                if (!marker.allListingsHaveSameLocation) {
                    if (marker.allListingsHaveSimilarLocation) {
                        if (marker.listingCount > 2 && !marker.resolvedSimilarLocations) {
                            var formAction = document.forms['srchform'].action;
                            var url = '/Map/PointSearch/?formAction=' + encodeURI(formAction) + '&radius=100&lat=' + marker.position.lat() + '&lng=' + marker.position.lng() + googleMapsV3.currentListingSearchParameters;
                            url = url + '&r=' + Math.random();
                            $.getJSON(url, function(result) {
                                marker.listingIDs = result.split(',');
                                marker.resolvedSimilarLocations = true;
                                googleMapsV3.showInfoWindow(marker, 0);
                            });
                            return;
                        }
                        googleMapsV3.showInfoWindow(marker, 0);
                        return;
                    }
                    googleMapsV3.zoomchanged = false;
                    googleMapsV3.boundschanged = false;
                    marker.getMap().fitBounds(new google.maps.LatLngBounds(marker.sw, marker.ne));
                } else {
                    googleMapsV3.showInfoWindow(marker, 0);
                }
            });
            marker.div_ = div;
            var panes = marker.getPanes();
            panes.overlayImage.appendChild(marker.div_);
            marker.visible_ = true;
        };
        marker.draw = function() {
            var overlayProjection = marker.getProjection();
            var pixel = overlayProjection.fromLatLngToDivPixel(marker.position);
            var div = marker.div_;
            if (marker.listingCount > 1) {
                div.style.left = (pixel.x - (marker.width / 2)) + 'px';
                div.style.top = (pixel.y - (marker.width)) + 'px';
            } else {
                div.style.left = (pixel.x - 13) + 'px';
                div.style.top = (pixel.y - 40) + 'px';
            }
        };
        marker.setMap(googleMapsV3.map);
        googleMapsV3.mapMarkerArray[marker.tileKey] = {
            Marker: marker
        };
        return marker;
    },
    getCentroid: function(points) {
        var sumLat = 0;
        var sumLng = 0;
        for (var i = 0; i < points.length; i++) {
            var pos = points[i].position ? points[i].position : points[i];
            sumLat += pos.lat();
            sumLng += pos.lng();
        }
        return new google.maps.LatLng(sumLat / points.length, sumLng / points.length);
    },
    getBounds: function(points) {
        var maxLat = -90;
        var maxLng = -180;
        var minLat = 0;
        var minLng = 180;
        for (var i = 0; i < points.length; i++) {
            var mkr = points[i];
            var swpos = (mkr.sw) ? mkr.sw : (mkr.position) ? mkr.position : mkr;
            var nepos = (mkr.ne) ? mkr.ne : (mkr.position) ? mkr.position : mkr;
            if (minLat > swpos.lat())
                minLat = swpos.lat();
            if (maxLat < nepos.lat())
                maxLat = nepos.lat();
            if (minLng > swpos.lng())
                minLng = swpos.lng();
            if (maxLng < nepos.lng())
                maxLng = nepos.lng();
        }
        var ne = new google.maps.LatLng(minLat, maxLng);
        var sw = new google.maps.LatLng(maxLat, minLng);
        return new google.maps.LatLngBounds(sw, ne);
    }
};;
(function($) {
    $.widget("harcourts.googleMapSearch", {
        options: {
            fitBoundsAfterSearch: false,
            zoom: parseInt(_resources.zoom, 10),
            minZoom: 4,
            maxZoom: 20,
            center: {
                lat: _resources.lat,
                lng: _resources.lng
            },
            initalGoogleMapTypeId: "roadmap",
            markerIcon: "/images/harcourts-marker.png",
            searchServiceEndpoint: "/Map/MapSearch/",
            infoViewServiceEndpoint: "/Map/ListingsInfoWindow/",
            pointSearchServiceEndpoint: "/Map/PointSearch/",
            propertyViewServiceEndpoint: "/Property/",
            singleHarcourtsListingMarkerClass: "mapSingleHarcourtsListingBackground",
            singleExternalListingMarkerClass: "mapSingleExternalListingBackground",
            clusteredMarkerClass: "mapClusterBackground",
            iconXOffset: 0,
            iconYOffset: 0,
            clusteredMarkerOverlayClass: "clusterOverlay",
            jsonLongPropertyNames: false,
            allowSearch: false,
            doSearch: false,
            firstSearchParameters: {},
            disableDefaultUI: false,
            panControl: false,
            panControlOptions: {},
            zoomControl: true,
            zoomControlOptions: {},
            mapTypeControl: false,
            mapTypeControlOptions: {},
            scaleControl: true,
            scaleControlOptions: {},
            streetViewControl: false,
            streetViewControlOptions: {},
            overviewMapControl: false,
            autoHideInfoWindow: false
        },
        _create: function() {
            this.mapMarkerArray = [];
            this.map = null;
            this.infoWindow = new google.maps.InfoWindow({
                maxWidth: 420
            });
            this.infoWindowVisible = false;
            this.infoWindowClosingDelayLength = 1000;
            this.requestID = 0;
            this.zoomToExtent = false;
            this.fitBoundsAfterSearch = false;
            this.supressSearch = false;
            this.clearKeyWordOnNextSearch = false;
            this.boundschanged = false;
            this.zoomchanged = false;
            this.currentListingSearchParameters = this.options.firstSearchParameters;
            this.previousListingSearchParameters = {};
            this.searchingTimeoutHandle = 0;
            this.usingStreetView = false;
            if (!(this.options.center instanceof google.maps.LatLng)) {
                this.options.center = new google.maps.LatLng(this.options.center.lat, this.options.center.lng);
            }
            var self = this;
            var options = this.options;
            var mapCenter = (options.points && options.points.length > 0) ? this._getCentroid(options.points) : options.center;
            var gmapOptions = {
                minZoom: options.minZoom,
                maxZoom: options.maxZoom,
                zoom: options.zoom,
                center: mapCenter,
                mapTypeId: options.initalGoogleMapTypeId,
                disableDefaultUI: options.disableDefaultUI,
                panControl: options.panControl,
                panControlOptions: options.panControlOptions,
                zoomControl: options.zoomControl,
                zoomControlOptions: options.zoomControlOptions,
                mapTypeControl: options.mapTypeControl,
                mapTypeControlOptions: options.mapTypeControlOptions,
                scaleControl: options.scaleControl,
                scaleControlOptions: options.scaleControlOptions,
                streetViewControl: options.streetViewControl,
                streetViewControlOptions: options.streetViewControlOptions,
                overviewMapControl: options.overviewMapControl
            };
            this.map = new google.maps.Map(this.element.get(0), gmapOptions);
            if (options.points && options.points.length > 0) {
                this._createFitMapToPoints(options.points);
            }
            google.maps.event.addListener(this.infoWindow, 'closeclick', function() {
                self.infoWindowVisible = false;
            });
            google.maps.event.addListener(this.map, 'click', function() {
                self.hideInfoWindow(false);
            });
            if (options.style !== undefined) {
                var style = options.style;
                var mapStyle = new google.maps.StyledMapType(style.options, {
                    name: style.name
                });
                this.map.mapTypes.set(style.name, mapStyle);
                this.map.setMapTypeId(style.name);
            }
            if (options.allowSearch) {
                this._initMapSearch();
            }
            var streetView = this.map.getStreetView();
            google.maps.event.addListener(streetView, 'visible_changed', function() {
                self._triggerStreetViewEvents(streetView);
            });
            this._trigger("ready");
        },
        _triggerStreetViewEvents: function(streetView) {
            var streetViewVisible = streetView.getVisible();
            if (this.usingStreetView != streetViewVisible) {
                var mode;
                if (streetViewVisible && !this.usingStreetView) {
                    mode = "StreetViewMode";
                    this.usingStreetView = true;
                } else {
                    mode = "MapViewMode";
                    this.usingStreetView = false;
                }
                this._trigger("viewmodechanged", {}, mode);
            }
        },
        closeStreetView: function() {
            this.map.getStreetView().setVisible(false);
        },
        redrawMap: function() {
            if (google.map) {
                google.map.event.trigger(this.map, 'resize');
            }
        },
        _initMapSearch: function() {
            var self = this;
            google.maps.event.addListener(this.map, 'zoom_changed', function() {
                self.zoomchanged = true;
            });
            google.maps.event.addListener(this.map, 'bounds_changed', function() {
                self.boundschanged = true;
            });
            this.fitBoundsAfterSearch = this.options.fitBoundsAfterSearch;
            google.maps.event.addListener(this.map, 'idle', function() {
                if ((self.boundschanged || self.zoomchanged)) {
                    self._searchMap();
                    if (self.clearKeyWordOnNextSearch) {
                        self.clearKeyWordOnNextSearch = false;
                        self._trigger("clearsearchkeyword");
                    }
                }
            });
        },
        search: function(sp) {
            if (typeof sp !== "object") {
                sp = {};
                if (console) console.log("ERROR: search was called with null / incorrect search parameters. Search Parameters ignored");
            }
            this.currentListingSearchParameters = $.extend({}, sp);
            this._searchMap();
        },
        _searchMap: function() {
            var self = this;
            if (this.supressSearch) {
                this.supressSearch = false;
                return;
            }
            if (!_.isEqual(this.currentListingSearchParameters, this.previousListingSearchParameters)) {
                this._clearMarkers(this.mapMarkerArray);
                this.mapMarkerArray = [];
            }
            this.previousListingSearchParameters = this.currentListingSearchParameters;
            this.requestID++;
            var requestID = this.requestID;
            var searchParameters = $.extend({
                requestID: requestID
            }, this.currentListingSearchParameters, this._getMapSearchParameters(this.map));
            this._triggerSearchStart(requestID);
            $.ajax({
                url: this.options.searchServiceEndpoint,
                type: "POST",
                data: JSON.stringify(searchParameters),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(jsonResult) {
                    self._processSearchResult(jsonResult);
                }
            });
        },
        _processSearchResult: function(jsonResult) {
            var self = this;
            if (jsonResult.ResetViewport && self.requestID > 1) {
                self.fitBoundsAfterSearch = true;
                self.clearKeyWordOnNextSearch = true;
            }
            if (jsonResult.RequestID != self.requestID) {
                if (console) console.log("Map Search Request received:" + jsonResult.RequestID + " but this map search is on request:" + self.requestID);
                return;
            }
            if (jsonResult.MapSearchResults.length == 0) {
                self._triggerSearchedZeroResults();
                return;
            }
            var zoomchangeForRequest = self.zoomchanged;
            if (zoomchangeForRequest) {
                for (var key in self.mapMarkerArray) {
                    self.mapMarkerArray[key].ToHide = true;
                }
            }
            var allPositions = [];
            $.each(jsonResult.MapSearchResults, function(i, result) {
                var existingResult = self.mapMarkerArray[result.TileKey];
                if (existingResult) {
                    allPositions[allPositions.length] = existingResult.Marker;
                    self._showMarker(existingResult);
                    existingResult.ToHide = false;
                } else {
                    var marker = self._createMarker(result);
                    allPositions[allPositions.length] = marker;
                }
            });
            if (zoomchangeForRequest) {
                for (var key in self.mapMarkerArray) {
                    if (self.mapMarkerArray[key].ToHide) {
                        self._hideMarker(self.mapMarkerArray[key]);
                        self.mapMarkerArray[key].ToHide = false;
                    }
                }
            }
            self.zoomchanged = false;
            self.boundschanged = false;
            if (self.fitBoundsAfterSearch) {
                self.fitBoundsAfterSearch = false;
                self.map.fitBounds(self._getBounds(allPositions));
            }
            self._triggerSearchEnd({
                TotalListingsCount: jsonResult.TotalListingsCount,
                center: self.map.getCenter(),
                zoom: self.map.zoom
            });
        },
        setMapCenterAndZoom: function(options) {
            if (options && options.center && options.zoom) {
                this.map.setCenter(options.center);
                this.map.setZoom(options.zoom);
            }
        },
        _triggerSearchStart: function(requestID) {
            var self = this;
            var handle = self.searchingTimeoutHandle;
            if (handle) {
                self.searchingTimeoutHandle = 0;
                clearTimeout(handle);
            }
            this.searchingTimeoutHandle = setTimeout(function() {
                self.searchingTimeoutHandle = 0;
                self._triggerSearchedZeroResults();
            }, 8 * 1000);
            if (!handle) {
                self._trigger("searchstart");
            };
        },
        _triggerSearchEnd: function(data) {
            var self = this;
            var handle = self.searchingTimeoutHandle;
            if (handle) {
                self.searchingTimeoutHandle = 0;
                clearTimeout(handle);
            }
            self._trigger("searched", {}, data);
        },
        _triggerSearchedZeroResults: function() {
            var self = this;
            var handle = self.searchingTimeoutHandle;
            if (handle) {
                self.searchingTimeoutHandle = 0;
                clearTimeout(handle);
            }
            self._trigger("searchedzeroresults");
        },
        _hideMarker: function(item) {
            if (item && item.Marker && item.Marker.getVisible()) {
                item.Marker.setVisible(false);
            }
        },
        _showMarker: function(item) {
            if (item && item.Marker && !item.Marker.getVisible()) {
                item.Marker.setVisible(true);
            }
        },
        _clearMarkers: function(markers) {
            for (var key in markers) {
                this._removeMarker(markers[key]);
            }
        },
        _removeMarker: function(item) {
            if (item && item.Marker) {
                item.Marker.setMap(null);
            }
        },
        _createMarker: function(result) {
            var self = this;
            var listingIDs = result.IDList;
            var listingCount = parseInt(result.ListingCount, 10);
            var marker = new google.maps.OverlayView({
                map: this.map
            });
            marker.position = new google.maps.LatLng(result.MarkerLatitude, result.MarkerLongitude);
            marker.text = result.ListingCount;
            marker.allListingsHaveSameLocation = result.AllListingsHaveSameLocation;
            marker.allListingsHaveSimilarLocation = result.AllListingsHaveSimilarLocation;
            marker.listingIDs = listingIDs;
            marker.listingCount = listingCount;
            marker.ne = new google.maps.LatLng(result.MaxLatitude, result.MaxLongitude);
            marker.sw = new google.maps.LatLng(result.MinLatitude, result.MinLongitude);
            marker.tileKey = result.TileKey;
            marker.listingZoomLevel = parseInt(result.ListingZoomLevel, 10);
            marker.width = 40;
            marker.IsHarcourtsListing = result.IsHarcourtsListing;
            marker.setVisible = function(visible) {
                marker.div_.style.display = (visible) ? 'block' : 'none';
                marker.visible_ = visible;
            };
            marker.getVisible = function() {
                return marker.visible_;
            };
            marker.onRemove = function() {
                marker.div_.parentNode.removeChild(marker.div_);
                marker.div_ = null;
                marker.visible_ = false;
            };
            marker.onAdd = function() {
                var div = document.createElement('DIV');
                div.style.border = "none";
                div.style.borderWidth = "0px";
                div.style.position = "absolute";
                if (marker.listingCount > 1) {
                    div.className = self.options.clusteredMarkerClass;
                    var text = document.createElement('DIV');
                    text.className = self.options.clusteredMarkerOverlayClass;
                    text.innerHTML = marker.text;
                    div.appendChild(text);
                } else if (marker.IsHarcourtsListing) {
                    div.className = self.options.singleHarcourtsListingMarkerClass;
                } else {
                    div.className = self.options.singleExternalListingMarkerClass;
                }
                div.style.backgroundPosition = "0px 1px";
                div.style.cursor = 'pointer';
                google.maps.event.addDomListener(div, 'click', function() {
                    if (!marker.allListingsHaveSameLocation) {
                        if (marker.allListingsHaveSimilarLocation) {
                            if (marker.listingCount > 2 && !marker.resolvedSimilarLocations) {
                                var pointSearchParameters = $.extend({}, self.currentListingSearchParameters, {
                                    radius: 100,
                                    lat: marker.position.lat(),
                                    lng: marker.position.lng()
                                });
                                $.post(self.options.pointSearchServiceEndpoint, pointSearchParameters, function(result) {
                                    marker.listingIDs = result;
                                    marker.resolvedSimilarLocations = true;
                                    self._showInfoWindow(marker, 0);
                                }, "json");
                                return;
                            }
                            self._showInfoWindow(marker, 0);
                            return;
                        }
                        self.zoomchanged = false;
                        self.boundschanged = false;
                        marker.getMap().fitBounds(new google.maps.LatLngBounds(marker.sw, marker.ne));
                    } else {
                        if (marker.listingCount == 1) {
                            document.location.href = self.options.propertyViewServiceEndpoint + marker.listingIDs[0];
                        } else {
                            self._showInfoWindow(marker, 0);
                        }
                    }
                });
                google.maps.event.addDomListener(div, 'mouseover', function() {
                    if (marker.allListingsHaveSameLocation) {
                        self._showInfoWindow(marker, 0);
                    }
                });
                marker.div_ = div;
                marker.getPanes().overlayMouseTarget.appendChild(div);
                marker.visible_ = true;
            };
            marker.draw = function() {
                var overlayProjection = marker.getProjection();
                var pixel = overlayProjection.fromLatLngToDivPixel(marker.position);
                var div = marker.div_;
                if (marker.listingCount > 1) {
                    div.style.left = (pixel.x - (marker.width / 2)) + self.options.iconXOffset + 'px';
                    div.style.top = (pixel.y - (marker.width)) + self.options.iconYOffset + 'px';
                } else {
                    div.style.left = (pixel.x - 13) + self.options.iconXOffset + 'px';
                    div.style.top = (pixel.y - 40) + self.options.iconYOffset + 'px';
                }
            };
            marker.setMap(self.map);
            self.mapMarkerArray[marker.tileKey] = {
                Marker: marker
            };
            return marker;
        },
        _showInfoWindow: function(marker, position) {
            var self = this;
            self.clearInfoWindowClosingTimer();
            if (marker.listingIDs.length == 0)
                return;
            var postData = {
                ListingIDs: marker.listingIDs,
                Position: position
            };
            $.post(self.options.infoViewServiceEndpoint, $.param(postData, true), function(data) {
                var $div = $("<div class='map-listing-info-window-wrapper'>").html(data);
                $(".viewControls a", $div).click(function() {
                    var navinc = parseInt($(this).attr('data-navigate'), 10);
                    var newpos = isNaN(navinc) ? 0 : position + navinc;
                    self._showInfoWindow(marker, newpos);
                });
                self.infoWindow.setContent($div.get(0));
                self.infoWindow.setPosition(marker.position);
                self._trigger("infowindowinit", {}, {
                    $infoWindowWrapper: $div
                });
                if (!self.infoWindowVisible) {
                    self.infoWindow.open(marker.getMap());
                }
                self.infoWindowVisible = true;
                if (self.options.autoHideInfoWindow) {
                    $div.on('mouseover', function() {
                        self.clearInfoWindowClosingTimer();
                    });
                    google.maps.event.addListenerOnce(self.map, 'mousemove', function() {
                        self.hideInfoWindow(true);
                    });
                }
            }, "html");
        },
        hideInfoWindow: function(delayHide) {
            var self = this;
            self.clearInfoWindowClosingTimer();
            if (delayHide) {
                self.infoWindowClosingTimerID = window.setTimeout(function() {
                    self.infoWindowVisible = false;
                    self.infoWindow.close();
                }, self.infoWindowClosingDelayLength);
            } else {
                self.infoWindowVisible = false;
                self.infoWindow.close();
            }
        },
        clearInfoWindowClosingTimer: function() {
            var self = this;
            if (self.infoWindowClosingTimerID) {
                window.clearTimeout(self.infoWindowClosingTimerID);
                self.infoWindowClosingTimerID = 0;
            }
        },
        _getMapSearchParameters: function(map) {
            var bounds = map.getBounds();
            var swLat = bounds.getSouthWest().lat();
            var neLat = bounds.getNorthEast().lat();
            var swLng = bounds.getSouthWest().lng();
            var neLng = bounds.getNorthEast().lng();
            if (this.options.jsonLongPropertyNames) {
                return {
                    SouthWestLatitude: swLat,
                    NorthEastLatitude: neLat,
                    SouthWestLongitude: swLng,
                    NorthEastLongitude: neLng,
                    zoom: map.getZoom()
                };
            } else {
                return {
                    swLat: swLat,
                    neLat: neLat,
                    swLng: swLng,
                    neLng: neLng,
                    zoom: map.getZoom()
                };
            }
        },
        _displayMarker: function(point) {
            var self = this;
            var pos = point.position ? point.position : point;
            var marker = new google.maps.Marker({
                position: pos,
                icon: this.options.markerIcon,
                map: this.map,
                ne: pos,
                sw: pos,
                listingCount: 1,
                listingZoomLevel: 17,
                listingIDs: point.listingID,
                tileKey: 'searchResult_' + point.listingID,
                title: point.listingID,
                oid: point.oid
            });
            point.marker = marker;
            point.marker.openInfoWindowHtml = function(data) {
                self.supressSearch = true;
                var gmap = self.map;
                var infowindow = self.infoWindow;
                infowindow.setContent(data);
                if (gmap.getZoom() != 15)
                    gmap.setZoom(15);
                infowindow.setPosition(marker.position);
                infowindow.open(gmap);
                google.maps.event.addListenerOnce(gmap, 'click', function() {
                    infowindow.setMap(null);
                });
            };
            this.mapMarkerArray[marker.tileKey] = {
                Marker: marker
            };
            return marker;
        },
        _createFitMapToPoints: function(points) {
            for (var i = 0; i < points.length; i++) {
                var marker = this._displayMarker(points[i]);
                this.mapMarkerArray['point_' + i] = {
                    Marker: marker
                };
            }
            if (points.length > 1) {
                this.map.fitBounds(this._getBounds(points));
            }
        },
        _getCentroid: function(points) {
            var sumLat = 0;
            var sumLng = 0;
            for (var i = 0; i < points.length; i++) {
                var pos = points[i].position ? points[i].position : points[i];
                sumLat += pos.lat();
                sumLng += pos.lng();
            }
            return new google.maps.LatLng(sumLat / points.length, sumLng / points.length);
        },
        _getBounds: function(points) {
            var maxLat = -90;
            var maxLng = -180;
            var minLat = 0;
            var minLng = 180;
            for (var i = 0; i < points.length; i++) {
                var mkr = points[i];
                var swpos = (mkr.sw) ? mkr.sw : (mkr.position) ? mkr.position : mkr;
                var nepos = (mkr.ne) ? mkr.ne : (mkr.position) ? mkr.position : mkr;
                if (minLat > swpos.lat())
                    minLat = swpos.lat();
                if (maxLat < nepos.lat())
                    maxLat = nepos.lat();
                if (minLng > swpos.lng())
                    minLng = swpos.lng();
                if (maxLng < nepos.lng())
                    maxLng = nepos.lng();
            }
            var ne = new google.maps.LatLng(minLat, maxLng);
            var sw = new google.maps.LatLng(maxLat, minLng);
            return new google.maps.LatLngBounds(sw, ne);
        },
        destroy: function() {
            if (this.map) {
                this.map.unbindAll();
            }
            $.Widget.prototype.destroy.call(this);
        }
    });
})(jQuery);;
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);', 53, 53, '||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('|'), 0, {}));;
jQuery.cookie = function(key, value, options) {
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires,
                t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function(s) {
        return s;
    } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};;
(function($) {
    $.fn.fixedHeaderTable = function(method) {
        var defaults = {
            width: '100%',
            height: '100%',
            borderCollapse: true,
            themeClass: 'fht-default',
            autoShow: true,
            loader: false,
            footer: false,
            cloneHeadToFoot: false,
            cloneHeaderToFooter: false,
            autoResize: false,
            create: null
        }
        var settings = {}
        var methods = {
            init: function(options) {
                settings = $.extend({}, defaults, options);
                return this.each(function() {
                    var $self = $(this),
                        self = this;
                    if (helpers._isTable($self)) {
                        methods.setup.apply(this, Array.prototype.slice.call(arguments, 1));
                        $.isFunction(settings.create) && settings.create.call(this);
                    } else {
                        $.error('Invalid table mark-up');
                    }
                });
            },
            setup: function(options) {
                var $self = $(this),
                    self = this,
                    $thead = $self.find('thead'),
                    $tfoot = $self.find('tfoot'),
                    $tbody = $self.find('tbody'),
                    $wrapper, $divHead, $divFoot, $divBody, $fixedHeadRow, $temp, tfootHeight = 0;
                settings.scrollbarOffset = helpers._getScrollbarWidth();
                settings.themeClassName = settings.themeClass;
                if (settings.width.search('%') > -1) {
                    var widthMinusScrollbar = $self.parent().width() - settings.scrollbarOffset;
                } else {
                    var widthMinusScrollbar = settings.width - settings.scrollbarOffset;
                }
                $self.css({
                    width: widthMinusScrollbar
                });
                if (!$self.closest('.fht-table-wrapper').length) {
                    $self.addClass('fht-table');
                    $self.wrap('<div class="fht-table-wrapper"></div>');
                }
                $wrapper = $self.closest('.fht-table-wrapper');
                $wrapper.css({
                    width: settings.width,
                    height: settings.height
                }).addClass(settings.themeClassName);
                if (!$self.hasClass('fht-table-init')) {
                    $self.wrap('<div class="fht-tbody"></div>');
                }
                $divBody = $self.closest('.fht-tbody');
                var tableProps = helpers._getTableProps($self);
                helpers._setupClone($divBody, tableProps.tbody);
                if (!$self.hasClass('fht-table-init')) {
                    $divHead = $('<div class="fht-thead"><table class="fht-table"></table></div>').prependTo($wrapper);
                    $thead.clone().appendTo($divHead.find('table'));
                } else {
                    $divHead = $wrapper.find('div.fht-thead');
                }
                helpers._setupClone($divHead, tableProps.thead);
                $self.css({
                    'margin-top': -$thead.outerHeight(true) - tableProps.border
                });
                if (settings.footer == true) {
                    helpers._setupTableFooter($self, self, tableProps);
                    if (!$tfoot.length) {
                        $tfoot = $wrapper.find('div.fht-tfoot table');
                    }
                    tfootHeight = $tfoot.outerHeight(true);
                }
                var tbodyHeight = $wrapper.height() - $thead.outerHeight(true) - tfootHeight - tableProps.border;
                $divBody.css({
                    'height': tbodyHeight
                });
                if (!settings.autoShow) {
                    $wrapper.hide();
                }
                $self.addClass('fht-table-init');
                if (typeof(settings.altClass) !== 'undefined') {
                    $self.find('tbody tr:odd').addClass(settings.altClass);
                }
                helpers._bindScroll($divBody);
                return self;
            },
            resize: function(options) {
                var $self = $(this),
                    self = this;
                return self;
            },
            show: function(arg1, arg2, arg3) {
                var $self = $(this),
                    self = this,
                    $wrapper = $self.closest('.fht-table-wrapper');
                if (typeof(arg1) !== 'undefined' && typeof(arg1) === 'number') {
                    $wrapper.show(arg1, function() {
                        $.isFunction(arg3) && arg3.call(this);
                    });
                    return self;
                } else if (typeof(arg1) !== 'undefined' && typeof(arg1) === 'string' && typeof(arg2) !== 'undefined' && typeof(arg2) === 'number') {
                    $wrapper.show(arg1, arg2, function() {
                        $.isFunction(arg3) && arg3.call(this);
                    });
                    return self;
                }
                $self.closest('.fht-table-wrapper').show();
                $.isFunction(arg3) && arg3.call(this);
                return self;
            },
            hide: function(arg1, arg2, arg3) {
                var $self = $(this),
                    self = this,
                    $wrapper = $self.closest('.fht-table-wrapper');
                if (typeof(arg1) !== 'undefined' && typeof(arg1) === 'number') {
                    $wrapper.hide(arg1, function() {
                        $.isFunction(arg3) && arg3.call(this);
                    });
                    return self;
                } else if (typeof(arg1) !== 'undefined' && typeof(arg1) === 'string' && typeof(arg2) !== 'undefined' && typeof(arg2) === 'number') {
                    $wrapper.hide(arg1, arg2, function() {
                        $.isFunction(arg3) && arg3.call(this);
                    });
                    return self;
                }
                $self.closest('.fht-table-wrapper').hide();
                $.isFunction(arg3) && arg3.call(this);
                return self;
            },
            destroy: function() {
                var $self = $(this),
                    self = this,
                    $wrapper = $self.closest('.fht-table-wrapper');
                $self.insertBefore($wrapper).removeAttr('style').append($wrapper.find('tfoot')).removeClass('fht-table fht-table-init').find('.fht-cell').remove();
                $wrapper.remove();
                return self;
            }
        }
        var helpers = {
            _isTable: function($obj) {
                var $self = $obj,
                    hasTable = $self.is('table'),
                    hasThead = $self.find('thead').length > 0,
                    hasTbody = $self.find('tbody').length > 0;
                if (hasTable && hasThead && hasTbody) {
                    return true;
                }
                return false;
            },
            _bindScroll: function($obj) {
                var $self = $obj,
                    $thead = $self.siblings('.fht-thead'),
                    $tfoot = $self.siblings('.fht-tfoot');
                $self.bind('scroll', function() {
                    $thead.find('table').css({
                        'margin-left': -this.scrollLeft
                    });
                    if (settings.cloneHeadToFoot) {
                        $tfoot.find('table').css({
                            'margin-left': -this.scrollLeft
                        });
                    }
                });
            },
            _setupTableFooter: function($obj, obj, tableProps) {
                var $self = $obj,
                    self = obj,
                    $wrapper = $self.closest('.fht-table-wrapper'),
                    $tfoot = $self.find('tfoot'),
                    $divFoot = $wrapper.find('div.fht-tfoot');
                if (!$divFoot.length) {
                    $divFoot = $('<div class="fht-tfoot"><table class="fht-table"></table></div>').appendTo($wrapper);
                }
                switch (true) {
                    case !$tfoot.length && settings.cloneHeadToFoot == true && settings.footer == true:
                        var $divHead = $wrapper.find('div.fht-thead');
                        $divFoot.empty();
                        $divHead.find('table').clone().appendTo($divFoot);
                        break;
                    case $tfoot.length && settings.cloneHeadToFoot == false && settings.footer == true:
                        $divFoot.find('table').append($tfoot).css({
                            'margin-top': -tableProps.border
                        });
                        helpers._setupClone($divFoot, tableProps.tfoot);
                        break;
                }
            },
            _getTableProps: function($obj) {
                var tableProp = {
                    thead: {},
                    tbody: {},
                    tfoot: {},
                    border: 0
                };
                tableProp.border = ($obj.find('th:first-child').outerWidth() - $obj.find('th:first-child').innerWidth()) / 2;
                $obj.find('thead tr:first-child th').each(function(index) {
                    tableProp.thead[index] = $(this).width() + tableProp.border;
                });
                $obj.find('tfoot tr:first-child td').each(function(index) {
                    tableProp.tfoot[index] = $(this).width() + tableProp.border;
                });
                $obj.find('tbody tr:first-child td').each(function(index) {
                    tableProp.tbody[index] = $(this).width() + tableProp.border;
                });
                return tableProp;
            },
            _setupClone: function($obj, cellArray) {
                var $self = $obj,
                    selector = ($self.find('thead').length) ? 'thead th' : ($self.find('tfoot').length) ? 'tfoot td' : 'tbody td',
                    $cell;
                $self.find(selector).each(function(index) {
                    $cell = ($(this).find('div.fht-cell').length) ? $(this).find('div.fht-cell') : $('<div class="fht-cell"></div>').appendTo($(this));
                    $cell.css({
                        'width': parseInt(cellArray[index])
                    });
                    if (!$(this).closest('.fht-tbody').length && $(this).is(':last-child')) {
                        var padding = (($(this).innerWidth() - $(this).width()) / 2) + settings.scrollbarOffset;
                        $(this).css({
                            'padding-right': padding + 'px'
                        });
                    }
                });
            },
            _getScrollbarWidth: function() {
                var scrollbarWidth = 0;
                if (!scrollbarWidth) {
                    if ($.browser.msie) {
                        var $textarea1 = $('<textarea cols="10" rows="2"></textarea>').css({
                                position: 'absolute',
                                top: -1000,
                                left: -1000
                            }).appendTo('body'),
                            $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({
                                position: 'absolute',
                                top: -1000,
                                left: -1000
                            }).appendTo('body');
                        scrollbarWidth = $textarea1.width() - $textarea2.width() + 2;
                        $textarea1.add($textarea2).remove();
                    } else {
                        var $div = $('<div />').css({
                            width: 100,
                            height: 100,
                            overflow: 'auto',
                            position: 'absolute',
                            top: -1000,
                            left: -1000
                        }).prependTo('body').append('<div />').find('div').css({
                            width: '100%',
                            height: 200
                        });
                        scrollbarWidth = 100 - $div.width();
                        $div.parent().remove();
                    }
                }
                return scrollbarWidth;
            }
        }
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method "' + method + '" does not exist in fixedHeaderTable plugin!');
        }
    }
})(jQuery);;
(function($) {
    $.Jcrop = function(obj, opt) {
        var obj = obj,
            opt = opt;
        if (typeof(obj) !== 'object') obj = $(obj)[0];
        if (typeof(opt) !== 'object') opt = {};
        if (!('trackDocument' in opt)) {
            opt.trackDocument = $.browser.msie ? false : true;
            if ($.browser.msie && $.browser.version.split('.')[0] == '8')
                opt.trackDocument = true;
        }
        if (!('keySupport' in opt))
            opt.keySupport = $.browser.msie ? false : true;
        var defaults = {
            trackDocument: false,
            baseClass: 'jcrop',
            addClass: null,
            bgColor: 'black',
            bgOpacity: .6,
            borderOpacity: .4,
            handleOpacity: .5,
            handlePad: 5,
            handleSize: 9,
            handleOffset: 5,
            edgeMargin: 14,
            aspectRatio: 0,
            keySupport: true,
            cornerHandles: true,
            sideHandles: true,
            drawBorders: true,
            dragEdges: true,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 8,
            animationDelay: 20,
            swingSpeed: 3,
            allowSelect: true,
            allowMove: true,
            allowResize: true,
            minSelect: [0, 0],
            maxSize: [0, 0],
            minSize: [0, 0],
            onChange: function() {},
            onSelect: function() {}
        };
        var options = defaults;
        setOptions(opt);
        var $origimg = $(obj);
        var $img = $origimg.clone().removeAttr('id').css({
            position: 'absolute'
        });
        $img.width($origimg.width());
        $img.height($origimg.height());
        $origimg.after($img).hide();
        presize($img, options.boxWidth, options.boxHeight);
        var boundx = $img.width(),
            boundy = $img.height(),
            $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
                position: 'relative',
                backgroundColor: options.bgColor
            }).insertAfter($origimg).append($img);;
        if (options.addClass) $div.addClass(options.addClass);
        var $img2 = $('<img />').attr('src', $img.attr('src')).css('position', 'absolute').width(boundx).height(boundy);
        var $img_holder = $('<div />').width(pct(100)).height(pct(100)).css({
            zIndex: 310,
            position: 'absolute',
            overflow: 'hidden'
        }).append($img2);
        var $hdl_holder = $('<div />').width(pct(100)).height(pct(100)).css('zIndex', 320);
        var $sel = $('<div />').css({
            position: 'absolute',
            zIndex: 300
        }).insertBefore($img).append($img_holder, $hdl_holder);
        var bound = options.boundary;
        var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
            position: 'absolute',
            top: px(-bound),
            left: px(-bound),
            zIndex: 290
        }).mousedown(newSelection);
        var xlimit, ylimit, xmin, ymin;
        var xscale, yscale, enabled = true;
        var docOffset = getPos($img),
            btndown, lastcurs, dimmed, animating, shift_down;
        var Coords = function() {
            var x1 = 0,
                y1 = 0,
                x2 = 0,
                y2 = 0,
                ox, oy;

            function setPressed(pos) {
                var pos = rebound(pos);
                x2 = x1 = pos[0];
                y2 = y1 = pos[1];
            };

            function setCurrent(pos) {
                var pos = rebound(pos);
                ox = pos[0] - x2;
                oy = pos[1] - y2;
                x2 = pos[0];
                y2 = pos[1];
            };

            function getOffset() {
                return [ox, oy];
            };

            function moveOffset(offset) {
                var ox = offset[0],
                    oy = offset[1];
                if (0 > x1 + ox) ox -= ox + x1;
                if (0 > y1 + oy) oy -= oy + y1;
                if (boundy < y2 + oy) oy += boundy - (y2 + oy);
                if (boundx < x2 + ox) ox += boundx - (x2 + ox);
                x1 += ox;
                x2 += ox;
                y1 += oy;
                y2 += oy;
            };

            function getCorner(ord) {
                var c = getFixed();
                switch (ord) {
                    case 'ne':
                        return [c.x2, c.y];
                    case 'nw':
                        return [c.x, c.y];
                    case 'se':
                        return [c.x2, c.y2];
                    case 'sw':
                        return [c.x, c.y2];
                }
            };

            function getFixed() {
                if (!options.aspectRatio) return getRect();
                var aspect = options.aspectRatio,
                    min_x = options.minSize[0] / xscale,
                    min_y = options.minSize[1] / yscale,
                    max_x = options.maxSize[0] / xscale,
                    max_y = options.maxSize[1] / yscale,
                    rw = x2 - x1,
                    rh = y2 - y1,
                    rwa = Math.abs(rw),
                    rha = Math.abs(rh),
                    real_ratio = rwa / rha,
                    xx, yy;
                if (max_x == 0) {
                    max_x = boundx * 10
                }
                if (max_y == 0) {
                    max_y = boundy * 10
                }
                if (real_ratio < aspect) {
                    yy = y2;
                    w = rha * aspect;
                    xx = rw < 0 ? x1 - w : w + x1;
                    if (xx < 0) {
                        xx = 0;
                        h = Math.abs((xx - x1) / aspect);
                        yy = rh < 0 ? y1 - h : h + y1;
                    } else if (xx > boundx) {
                        xx = boundx;
                        h = Math.abs((xx - x1) / aspect);
                        yy = rh < 0 ? y1 - h : h + y1;
                    }
                } else {
                    xx = x2;
                    h = rwa / aspect;
                    yy = rh < 0 ? y1 - h : y1 + h;
                    if (yy < 0) {
                        yy = 0;
                        w = Math.abs((yy - y1) * aspect);
                        xx = rw < 0 ? x1 - w : w + x1;
                    } else if (yy > boundy) {
                        yy = boundy;
                        w = Math.abs(yy - y1) * aspect;
                        xx = rw < 0 ? x1 - w : w + x1;
                    }
                }
                if (xx > x1) {
                    if (xx - x1 < min_x) {
                        xx = x1 + min_x;
                    } else if (xx - x1 > max_x) {
                        xx = x1 + max_x;
                    }
                    if (yy > y1) {
                        yy = y1 + (xx - x1) / aspect;
                    } else {
                        yy = y1 - (xx - x1) / aspect;
                    }
                } else if (xx < x1) {
                    if (x1 - xx < min_x) {
                        xx = x1 - min_x
                    } else if (x1 - xx > max_x) {
                        xx = x1 - max_x;
                    }
                    if (yy > y1) {
                        yy = y1 + (x1 - xx) / aspect;
                    } else {
                        yy = y1 - (x1 - xx) / aspect;
                    }
                }
                if (xx < 0) {
                    x1 -= xx;
                    xx = 0;
                } else if (xx > boundx) {
                    x1 -= xx - boundx;
                    xx = boundx;
                }
                if (yy < 0) {
                    y1 -= yy;
                    yy = 0;
                } else if (yy > boundy) {
                    y1 -= yy - boundy;
                    yy = boundy;
                }
                return last = makeObj(flipCoords(x1, y1, xx, yy));
            };

            function rebound(p) {
                if (p[0] < 0) p[0] = 0;
                if (p[1] < 0) p[1] = 0;
                if (p[0] > boundx) p[0] = boundx;
                if (p[1] > boundy) p[1] = boundy;
                return [p[0], p[1]];
            };

            function flipCoords(x1, y1, x2, y2) {
                var xa = x1,
                    xb = x2,
                    ya = y1,
                    yb = y2;
                if (x2 < x1) {
                    xa = x2;
                    xb = x1;
                }
                if (y2 < y1) {
                    ya = y2;
                    yb = y1;
                }
                return [Math.round(xa), Math.round(ya), Math.round(xb), Math.round(yb)];
            };

            function getRect() {
                var xsize = x2 - x1;
                var ysize = y2 - y1;
                if (xlimit && (Math.abs(xsize) > xlimit))
                    x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
                if (ylimit && (Math.abs(ysize) > ylimit))
                    y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
                if (ymin && (Math.abs(ysize) < ymin))
                    y2 = (ysize > 0) ? (y1 + ymin) : (y1 - ymin);
                if (xmin && (Math.abs(xsize) < xmin))
                    x2 = (xsize > 0) ? (x1 + xmin) : (x1 - xmin);
                if (x1 < 0) {
                    x2 -= x1;
                    x1 -= x1;
                }
                if (y1 < 0) {
                    y2 -= y1;
                    y1 -= y1;
                }
                if (x2 < 0) {
                    x1 -= x2;
                    x2 -= x2;
                }
                if (y2 < 0) {
                    y1 -= y2;
                    y2 -= y2;
                }
                if (x2 > boundx) {
                    var delta = x2 - boundx;
                    x1 -= delta;
                    x2 -= delta;
                }
                if (y2 > boundy) {
                    var delta = y2 - boundy;
                    y1 -= delta;
                    y2 -= delta;
                }
                if (x1 > boundx) {
                    var delta = x1 - boundy;
                    y2 -= delta;
                    y1 -= delta;
                }
                if (y1 > boundy) {
                    var delta = y1 - boundy;
                    y2 -= delta;
                    y1 -= delta;
                }
                return makeObj(flipCoords(x1, y1, x2, y2));
            };

            function makeObj(a) {
                return {
                    x: a[0],
                    y: a[1],
                    x2: a[2],
                    y2: a[3],
                    w: a[2] - a[0],
                    h: a[3] - a[1]
                };
            };
            return {
                flipCoords: flipCoords,
                setPressed: setPressed,
                setCurrent: setCurrent,
                getOffset: getOffset,
                moveOffset: moveOffset,
                getCorner: getCorner,
                getFixed: getFixed
            };
        }();
        var Selection = function() {
            var start, end, dragmode, awake, hdep = 370;
            var borders = {};
            var handle = {};
            var seehandles = false;
            var hhs = options.handleOffset;
            if (options.drawBorders) {
                borders = {
                    top: insertBorder('hline').css('top', $.browser.msie ? px(-1) : px(0)),
                    bottom: insertBorder('hline'),
                    left: insertBorder('vline'),
                    right: insertBorder('vline')
                };
            }
            if (options.dragEdges) {
                handle.t = insertDragbar('n');
                handle.b = insertDragbar('s');
                handle.r = insertDragbar('e');
                handle.l = insertDragbar('w');
            }
            options.sideHandles && createHandles(['n', 's', 'e', 'w']);
            options.cornerHandles && createHandles(['sw', 'nw', 'ne', 'se']);

            function insertBorder(type) {
                var jq = $('<div />').css({
                    position: 'absolute',
                    opacity: options.borderOpacity
                }).addClass(cssClass(type));
                $img_holder.append(jq);
                return jq;
            };

            function dragDiv(ord, zi) {
                var jq = $('<div />').mousedown(createDragger(ord)).css({
                    cursor: ord + '-resize',
                    position: 'absolute',
                    zIndex: zi
                });
                $hdl_holder.append(jq);
                return jq;
            };

            function insertHandle(ord) {
                return dragDiv(ord, hdep++).css({
                    top: px(-hhs + 1),
                    left: px(-hhs + 1),
                    opacity: options.handleOpacity
                }).addClass(cssClass('handle'));
            };

            function insertDragbar(ord) {
                var s = options.handleSize,
                    o = hhs,
                    h = s,
                    w = s,
                    t = o,
                    l = o;
                switch (ord) {
                    case 'n':
                    case 's':
                        w = pct(100);
                        break;
                    case 'e':
                    case 'w':
                        h = pct(100);
                        break;
                }
                return dragDiv(ord, hdep++).width(w).height(h).css({
                    top: px(-t + 1),
                    left: px(-l + 1)
                });
            };

            function createHandles(li) {
                for (i in li) handle[li[i]] = insertHandle(li[i]);
            };

            function moveHandles(c) {
                var midvert = Math.round((c.h / 2) - hhs),
                    midhoriz = Math.round((c.w / 2) - hhs),
                    north = west = -hhs + 1,
                    east = c.w - hhs,
                    south = c.h - hhs,
                    x, y;
                'e' in handle && handle.e.css({
                    top: px(midvert),
                    left: px(east)
                }) && handle.w.css({
                    top: px(midvert)
                }) && handle.s.css({
                    top: px(south),
                    left: px(midhoriz)
                }) && handle.n.css({
                    left: px(midhoriz)
                });
                'ne' in handle && handle.ne.css({
                    left: px(east)
                }) && handle.se.css({
                    top: px(south),
                    left: px(east)
                }) && handle.sw.css({
                    top: px(south)
                });
                'b' in handle && handle.b.css({
                    top: px(south)
                }) && handle.r.css({
                    left: px(east)
                });
            };

            function moveto(x, y) {
                $img2.css({
                    top: px(-y),
                    left: px(-x)
                });
                $sel.css({
                    top: px(y),
                    left: px(x)
                });
            };

            function resize(w, h) {
                $sel.width(w).height(h);
            };

            function refresh() {
                var c = Coords.getFixed();
                Coords.setPressed([c.x, c.y]);
                Coords.setCurrent([c.x2, c.y2]);
                updateVisible();
            };

            function updateVisible() {
                if (awake) return update();
            };

            function update() {
                var c = Coords.getFixed();
                resize(c.w, c.h);
                moveto(c.x, c.y);
                options.drawBorders && borders['right'].css({
                    left: px(c.w - 1)
                }) && borders['bottom'].css({
                    top: px(c.h - 1)
                });
                seehandles && moveHandles(c);
                awake || show();
                options.onChange(unscale(c));
            };

            function show() {
                $sel.show();
                $img.css('opacity', options.bgOpacity);
                awake = true;
            };

            function release() {
                disableHandles();
                $sel.hide();
                $img.css('opacity', 1);
                awake = false;
            };

            function showHandles() {
                if (seehandles) {
                    moveHandles(Coords.getFixed());
                    $hdl_holder.show();
                }
            };

            function enableHandles() {
                seehandles = true;
                if (options.allowResize) {
                    moveHandles(Coords.getFixed());
                    $hdl_holder.show();
                    return true;
                }
            };

            function disableHandles() {
                seehandles = false;
                $hdl_holder.hide();
            };

            function animMode(v) {
                (animating = v) ? disableHandles(): enableHandles();
            };

            function done() {
                animMode(false);
                refresh();
            };
            var $track = newTracker().mousedown(createDragger('move')).css({
                cursor: 'move',
                position: 'absolute',
                zIndex: 360
            })
            $img_holder.append($track);
            disableHandles();
            return {
                updateVisible: updateVisible,
                update: update,
                release: release,
                refresh: refresh,
                setCursor: function(cursor) {
                    $track.css('cursor', cursor);
                },
                enableHandles: enableHandles,
                enableOnly: function() {
                    seehandles = true;
                },
                showHandles: showHandles,
                disableHandles: disableHandles,
                animMode: animMode,
                done: done
            };
        }();
        var Tracker = function() {
            var onMove = function() {},
                onDone = function() {},
                trackDoc = options.trackDocument;
            if (!trackDoc) {
                $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
            }

            function toFront() {
                $trk.css({
                    zIndex: 450
                });
                if (trackDoc) {
                    $(document).mousemove(trackMove).mouseup(trackUp);
                }
            }

            function toBack() {
                $trk.css({
                    zIndex: 290
                });
                if (trackDoc) {
                    $(document).unbind('mousemove', trackMove).unbind('mouseup', trackUp);
                }
            }

            function trackMove(e) {
                onMove(mouseAbs(e));
            };

            function trackUp(e) {
                e.preventDefault();
                e.stopPropagation();
                if (btndown) {
                    btndown = false;
                    onDone(mouseAbs(e));
                    options.onSelect(unscale(Coords.getFixed()));
                    toBack();
                    onMove = function() {};
                    onDone = function() {};
                }
                return false;
            };

            function activateHandlers(move, done) {
                btndown = true;
                onMove = move;
                onDone = done;
                toFront();
                return false;
            };

            function setCursor(t) {
                $trk.css('cursor', t);
            };
            $img.before($trk);
            return {
                activateHandlers: activateHandlers,
                setCursor: setCursor
            };
        }();
        var KeyManager = function() {
            var $keymgr = $('<input type="radio" />').css({
                    position: 'absolute',
                    left: '-30px'
                }).keypress(parseKey).blur(onBlur),
                $keywrap = $('<div />').css({
                    position: 'absolute',
                    overflow: 'hidden'
                }).append($keymgr);

            function watchKeys() {
                if (options.keySupport) {
                    $keymgr.show();
                    $keymgr.focus();
                }
            };

            function onBlur(e) {
                $keymgr.hide();
            };

            function doNudge(e, x, y) {
                if (options.allowMove) {
                    Coords.moveOffset([x, y]);
                    Selection.updateVisible();
                };
                e.preventDefault();
                e.stopPropagation();
            };

            function parseKey(e) {
                if (e.ctrlKey) return true;
                shift_down = e.shiftKey ? true : false;
                var nudge = shift_down ? 10 : 1;
                switch (e.keyCode) {
                    case 37:
                        doNudge(e, -nudge, 0);
                        break;
                    case 39:
                        doNudge(e, nudge, 0);
                        break;
                    case 38:
                        doNudge(e, 0, -nudge);
                        break;
                    case 40:
                        doNudge(e, 0, nudge);
                        break;
                    case 27:
                        Selection.release();
                        break;
                    case 9:
                        return true;
                }
                return nothing(e);
            };
            if (options.keySupport) $keywrap.insertBefore($img);
            return {
                watchKeys: watchKeys
            };
        }();

        function px(n) {
            return '' + parseInt(n) + 'px';
        };

        function pct(n) {
            return '' + parseInt(n) + '%';
        };

        function cssClass(cl) {
            return options.baseClass + '-' + cl;
        };

        function getPos(obj) {
            var pos = $(obj).offset();
            return [pos.left, pos.top];
        };

        function mouseAbs(e) {
            return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])];
        };

        function myCursor(type) {
            if (type != lastcurs) {
                Tracker.setCursor(type);
                lastcurs = type;
            }
        };

        function startDragMode(mode, pos) {
            docOffset = getPos($img);
            Tracker.setCursor(mode == 'move' ? mode : mode + '-resize');
            if (mode == 'move')
                return Tracker.activateHandlers(createMover(pos), doneSelect);
            var fc = Coords.getFixed();
            var opp = oppLockCorner(mode);
            var opc = Coords.getCorner(oppLockCorner(opp));
            Coords.setPressed(Coords.getCorner(opp));
            Coords.setCurrent(opc);
            Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect);
        };

        function dragmodeHandler(mode, f) {
            return function(pos) {
                if (!options.aspectRatio) switch (mode) {
                    case 'e':
                        pos[1] = f.y2;
                        break;
                    case 'w':
                        pos[1] = f.y2;
                        break;
                    case 'n':
                        pos[0] = f.x2;
                        break;
                    case 's':
                        pos[0] = f.x2;
                        break;
                } else switch (mode) {
                    case 'e':
                        pos[1] = f.y + 1;
                        break;
                    case 'w':
                        pos[1] = f.y + 1;
                        break;
                    case 'n':
                        pos[0] = f.x + 1;
                        break;
                    case 's':
                        pos[0] = f.x + 1;
                        break;
                }
                Coords.setCurrent(pos);
                Selection.update();
            };
        };

        function createMover(pos) {
            var lloc = pos;
            KeyManager.watchKeys();
            return function(pos) {
                Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
                lloc = pos;
                Selection.update();
            };
        };

        function oppLockCorner(ord) {
            switch (ord) {
                case 'n':
                    return 'sw';
                case 's':
                    return 'nw';
                case 'e':
                    return 'nw';
                case 'w':
                    return 'ne';
                case 'ne':
                    return 'sw';
                case 'nw':
                    return 'se';
                case 'se':
                    return 'nw';
                case 'sw':
                    return 'ne';
            };
        };

        function createDragger(ord) {
            return function(e) {
                if (options.disabled) return false;
                if ((ord == 'move') && !options.allowMove) return false;
                btndown = true;
                startDragMode(ord, mouseAbs(e));
                e.stopPropagation();
                e.preventDefault();
                return false;
            };
        };

        function presize($obj, w, h) {
            var nw = $obj.width(),
                nh = $obj.height();
            if ((nw > w) && w > 0) {
                nw = w;
                nh = (w / $obj.width()) * $obj.height();
            }
            if ((nh > h) && h > 0) {
                nh = h;
                nw = (h / $obj.height()) * $obj.width();
            }
            xscale = $obj.width() / nw;
            yscale = $obj.height() / nh;
            $obj.width(nw).height(nh);
        };

        function unscale(c) {
            return {
                x: parseInt(c.x * xscale),
                y: parseInt(c.y * yscale),
                x2: parseInt(c.x2 * xscale),
                y2: parseInt(c.y2 * yscale),
                w: parseInt(c.w * xscale),
                h: parseInt(c.h * yscale)
            };
        };

        function doneSelect(pos) {
            var c = Coords.getFixed();
            if (c.w > options.minSelect[0] && c.h > options.minSelect[1]) {
                Selection.enableHandles();
                Selection.done();
            } else {
                Selection.release();
            }
            Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
        };

        function newSelection(e) {
            if (options.disabled) return false;
            if (!options.allowSelect) return false;
            btndown = true;
            docOffset = getPos($img);
            Selection.disableHandles();
            myCursor('crosshair');
            var pos = mouseAbs(e);
            Coords.setPressed(pos);
            Tracker.activateHandlers(selectDrag, doneSelect);
            KeyManager.watchKeys();
            Selection.update();
            e.stopPropagation();
            e.preventDefault();
            return false;
        };

        function selectDrag(pos) {
            Coords.setCurrent(pos);
            Selection.update();
        };

        function newTracker() {
            var trk = $('<div></div>').addClass(cssClass('tracker'));
            $.browser.msie && trk.css({
                opacity: 0,
                backgroundColor: 'white'
            });
            return trk;
        };

        function animateTo(a) {
            var x1 = a[0] / xscale,
                y1 = a[1] / yscale,
                x2 = a[2] / xscale,
                y2 = a[3] / yscale;
            if (animating) return;
            var animto = Coords.flipCoords(x1, y1, x2, y2);
            var c = Coords.getFixed();
            var animat = initcr = [c.x, c.y, c.x2, c.y2];
            var interv = options.animationDelay;
            var x = animat[0];
            var y = animat[1];
            var x2 = animat[2];
            var y2 = animat[3];
            var ix1 = animto[0] - initcr[0];
            var iy1 = animto[1] - initcr[1];
            var ix2 = animto[2] - initcr[2];
            var iy2 = animto[3] - initcr[3];
            var pcent = 0;
            var velocity = options.swingSpeed;
            Selection.animMode(true);
            var animator = function() {
                return function() {
                    pcent += (100 - pcent) / velocity;
                    animat[0] = x + ((pcent / 100) * ix1);
                    animat[1] = y + ((pcent / 100) * iy1);
                    animat[2] = x2 + ((pcent / 100) * ix2);
                    animat[3] = y2 + ((pcent / 100) * iy2);
                    if (pcent < 100) animateStart();
                    else Selection.done();
                    if (pcent >= 99.8) pcent = 100;
                    setSelectRaw(animat);
                };
            }();

            function animateStart() {
                window.setTimeout(animator, interv);
            };
            animateStart();
        };

        function setSelect(rect) {
            setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
        };

        function setSelectRaw(l) {
            Coords.setPressed([l[0], l[1]]);
            Coords.setCurrent([l[2], l[3]]);
            Selection.update();
        };

        function setOptions(opt) {
            if (typeof(opt) != 'object') opt = {};
            options = $.extend(options, opt);
            if (typeof(options.onChange) !== 'function')
                options.onChange = function() {};
            if (typeof(options.onSelect) !== 'function')
                options.onSelect = function() {};
        };

        function tellSelect() {
            return unscale(Coords.getFixed());
        };

        function tellScaled() {
            return Coords.getFixed();
        };

        function setOptionsNew(opt) {
            setOptions(opt);
            interfaceUpdate();
        };

        function disableCrop() {
            options.disabled = true;
            Selection.disableHandles();
            Selection.setCursor('default');
            Tracker.setCursor('default');
        };

        function enableCrop() {
            options.disabled = false;
            interfaceUpdate();
        };

        function cancelCrop() {
            Selection.done();
            Tracker.activateHandlers(null, null);
        };

        function destroy() {
            $div.remove();
            $origimg.show();
        };

        function interfaceUpdate(alt) {
            options.allowResize ? alt ? Selection.enableOnly() : Selection.enableHandles() : Selection.disableHandles();
            Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
            Selection.setCursor(options.allowMove ? 'move' : 'default');
            $div.css('backgroundColor', options.bgColor);
            if ('setSelect' in options) {
                setSelect(opt.setSelect);
                Selection.done();
                delete(options.setSelect);
            }
            if ('trueSize' in options) {
                xscale = options.trueSize[0] / boundx;
                yscale = options.trueSize[1] / boundy;
            }
            xlimit = options.maxSize[0] || 0;
            ylimit = options.maxSize[1] || 0;
            xmin = options.minSize[0] || 0;
            ymin = options.minSize[1] || 0;
            if ('outerImage' in options) {
                $img.attr('src', options.outerImage);
                delete(options.outerImage);
            }
            Selection.refresh();
        };
        $hdl_holder.hide();
        interfaceUpdate(true);
        var api = {
            animateTo: animateTo,
            setSelect: setSelect,
            setOptions: setOptionsNew,
            tellSelect: tellSelect,
            tellScaled: tellScaled,
            disable: disableCrop,
            enable: enableCrop,
            cancel: cancelCrop,
            focus: KeyManager.watchKeys,
            getBounds: function() {
                return [boundx * xscale, boundy * yscale];
            },
            getWidgetSize: function() {
                return [boundx, boundy];
            },
            release: Selection.release,
            destroy: destroy
        };
        $origimg.data('Jcrop', api);
        return api;
    };
    $.fn.Jcrop = function(options) {
        function attachWhenDone(from) {
            var loadsrc = options.useImg || from.src;
            var img = new Image();
            img.onload = function() {
                $.Jcrop(from, options);
            };
            img.src = loadsrc;
        };
        if (typeof(options) !== 'object') options = {};
        this.each(function() {
            if ($(this).data('Jcrop')) {
                if (options == 'api') return $(this).data('Jcrop');
                else $(this).data('Jcrop').setOptions(options);
            } else attachWhenDone(this);
        });
        return this;
    };
})(jQuery);;;
(function($) {
    $.anythingSlider = function(el, options) {
        var base = this,
            o, t;
        base.el = el;
        base.$el = $(el).addClass('anythingBase').wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');
        base.$el.data("AnythingSlider", base);
        base.init = function() {
            base.options = o = $.extend({}, $.anythingSlider.defaults, options);
            base.initialized = false;
            if ($.isFunction(o.onBeforeInitialize)) {
                base.$el.bind('before_initialize', o.onBeforeInitialize);
            }
            base.$el.trigger('before_initialize', base);
            $('<!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");</script><![endif]-->').appendTo('body').remove();
            base.$wrapper = base.$el.parent().closest('div.anythingSlider').addClass('anythingSlider-' + o.theme);
            base.$window = base.$el.closest('div.anythingWindow');
            base.win = window;
            base.$win = $(base.win);
            base.$controls = $('<div class="anythingControls"></div>');
            base.$nav = $('<ul class="thumbNav"><li><a><span></span></a></li></ul>');
            base.$startStop = $('<a href="#" class="start-stop"></a>');
            if (o.buildStartStop || o.buildNavigation) {
                base.$controls.appendTo((o.appendControlsTo && $(o.appendControlsTo).length) ? $(o.appendControlsTo) : base.$wrapper);
            }
            if (o.buildNavigation) {
                base.$nav.appendTo((o.appendNavigationTo && $(o.appendNavigationTo).length) ? $(o.appendNavigationTo) : base.$controls);
            }
            if (o.buildStartStop) {
                base.$startStop.appendTo((o.appendStartStopTo && $(o.appendStartStopTo).length) ? $(o.appendStartStopTo) : base.$controls);
            }
            base.runTimes = $('.anythingBase').length;
            base.regex = new RegExp('panel' + base.runTimes + '-(\\d+)', 'i');
            if (base.runTimes === 1) {
                base.makeActive();
            }
            base.flag = false;
            base.playing = o.autoPlay;
            base.slideshow = false;
            base.hovered = false;
            base.panelSize = [];
            base.currentPage = base.targetPage = o.startPanel = parseInt(o.startPanel, 10) || 1;
            o.changeBy = parseInt(o.changeBy, 10) || 1;
            t = (o.mode || 'h').toLowerCase().match(/(h|v|f)/);
            t = o.vertical ? 'v' : (t || ['h'])[0];
            o.mode = t === 'v' ? 'vertical' : t === 'f' ? 'fade' : 'horizontal';
            if (t === 'f') {
                o.showMultiple = 1;
                o.infiniteSlides = false;
            }
            base.adj = (o.infiniteSlides) ? 0 : 1;
            base.adjustMultiple = 0;
            base.width = base.$el.width();
            base.height = base.$el.height();
            base.outerPad = [base.$wrapper.innerWidth() - base.$wrapper.width(), base.$wrapper.innerHeight() - base.$wrapper.height()];
            if (o.playRtl) {
                base.$wrapper.addClass('rtl');
            }
            if (o.expand) {
                base.$outer = base.$wrapper.parent();
                base.$window.css({
                    width: '100%',
                    height: '100%'
                });
                base.checkResize();
            }
            if (o.buildStartStop) {
                base.buildAutoPlay();
            }
            if (o.buildArrows) {
                base.buildNextBackButtons();
            }
            if (!o.autoPlay) {
                o.autoPlayLocked = false;
            }
            base.$lastPage = base.$targetPage = base.$currentPage;
            base.updateSlider();
            if (!$.isFunction($.easing[o.easing])) {
                o.easing = "swing";
            }
            if (o.pauseOnHover) {
                base.$wrapper.hover(function() {
                    if (base.playing) {
                        base.$el.trigger('slideshow_paused', base);
                        base.clearTimer(true);
                    }
                }, function() {
                    if (base.playing) {
                        base.$el.trigger('slideshow_unpaused', base);
                        base.startStop(base.playing, true);
                    }
                });
            }
            base.slideControls(false);
            base.$wrapper.bind('mouseenter mouseleave', function(e) {
                $(this)[e.type === 'mouseenter' ? 'addClass' : 'removeClass']('anythingSlider-hovered');
                base.hovered = (e.type === 'mouseenter') ? true : false;
                base.slideControls(base.hovered);
            });
            $(document).keyup(function(e) {
                if (o.enableKeyboard && base.$wrapper.hasClass('activeSlider') && !e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                    if (o.mode !== 'vertical' && (e.which === 38 || e.which === 40)) {
                        return;
                    }
                    switch (e.which) {
                        case 39:
                        case 40:
                            base.goForward();
                            break;
                        case 37:
                        case 38:
                            base.goBack();
                            break;
                    }
                }
            });
            base.currentPage = base.gotoHash() || o.startPanel || 1;
            base.gotoPage(base.currentPage, false, null, -1);
            var triggers = "slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");
            $.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "), function(i, f) {
                if ($.isFunction(o[f])) {
                    base.$el.bind(triggers[i], o[f]);
                }
            });
            if ($.isFunction(o.onSlideComplete)) {
                base.$el.bind('slide_complete', function() {
                    setTimeout(function() {
                        o.onSlideComplete(base);
                    }, 0);
                    return false;
                });
            }
            base.initialized = true;
            base.$el.trigger('initialized', base);
            base.startStop(o.autoPlay);
        };
        base.updateSlider = function() {
            base.$el.children('.cloned').remove();
            base.navTextVisible = base.$nav.find('span:first').css('visibility') !== 'hidden';
            base.$nav.empty();
            base.currentPage = base.currentPage || 1;
            base.$items = base.$el.children();
            base.pages = base.$items.length;
            base.dir = (o.mode === 'vertical') ? 'top' : 'left';
            o.showMultiple = (o.mode === 'vertical') ? 1 : parseInt(o.showMultiple, 10) || 1;
            o.navigationSize = (o.navigationSize === false) ? 0 : parseInt(o.navigationSize, 10) || 0;
            base.$items.find('a').unbind('focus.AnythingSlider').bind('focus.AnythingSlider', function(e) {
                var panel = $(this).closest('.panel'),
                    indx = base.$items.index(panel) + base.adj;
                base.$items.find('.focusedLink').removeClass('focusedLink');
                $(this).addClass('focusedLink');
                base.$window.scrollLeft(0).scrollTop(0);
                if ((indx !== -1 && (indx >= base.currentPage + o.showMultiple || indx < base.currentPage))) {
                    base.gotoPage(indx);
                    e.preventDefault();
                }
            });
            if (o.showMultiple > 1) {
                if (o.showMultiple > base.pages) {
                    o.showMultiple = base.pages;
                }
                base.adjustMultiple = (o.infiniteSlides && base.pages > 1) ? 0 : o.showMultiple - 1;
            }
            base.$controls.add(base.$nav).add(base.$startStop).add(base.$forward).add(base.$back)[(base.pages <= 1) ? 'hide' : 'show']();
            if (base.pages > 1) {
                base.buildNavigation();
            }
            if (o.mode !== 'fade' && o.infiniteSlides && base.pages > 1) {
                base.$el.prepend(base.$items.filter(':last').clone().addClass('cloned'));
                if (o.showMultiple > 1) {
                    base.$el.append(base.$items.filter(':lt(' + o.showMultiple + ')').clone().addClass('cloned multiple'));
                } else {
                    base.$el.append(base.$items.filter(':first').clone().addClass('cloned'));
                }
                base.$el.find('.cloned').each(function() {
                    $(this).find('a,input,textarea,select,button,area,form').attr({
                        disabled: 'disabled',
                        name: ''
                    });
                    $(this).find('[id]').andSelf().removeAttr('id');
                });
            }
            base.$items = base.$el.addClass(o.mode).children().addClass('panel');
            base.setDimensions();
            if (o.resizeContents) {
                base.$items.css('width', base.width);
                base.$wrapper.css('width', base.getDim(base.currentPage)[0]).add(base.$items).css('height', base.height);
            } else {
                base.$win.load(function() {
                    base.setDimensions();
                    t = base.getDim(base.currentPage);
                    base.$wrapper.css({
                        width: t[0],
                        height: t[1]
                    });
                    base.setCurrentPage(base.currentPage, false);
                });
            }
            if (base.currentPage > base.pages) {
                base.currentPage = base.pages;
            }
            base.setCurrentPage(base.currentPage, false);
            base.$nav.find('a').eq(base.currentPage - 1).addClass('cur');
            if (o.mode === 'fade') {
                var t = base.$items.eq(base.currentPage - 1);
                if (o.resumeOnVisible) {
                    t.css({
                        opacity: 1
                    }).siblings().css({
                        opacity: 0
                    });
                } else {
                    base.$items.css('opacity', 1);
                    t.fadeIn(0).siblings().fadeOut(0);
                }
            }
        };
        base.buildNavigation = function() {
            if (o.buildNavigation && (base.pages > 1)) {
                var a, c, i, t, $li;
                base.$items.filter(':not(.cloned)').each(function(j) {
                    $li = $('<li/>');
                    i = j + 1;
                    c = (i === 1 ? ' first' : '') + (i === base.pages ? ' last' : '');
                    a = '<a class="panel' + i + (base.navTextVisible ? '"' : ' ' + o.tooltipClass + '" title="@"') + ' href="#"><span>@</span></a>';
                    if ($.isFunction(o.navigationFormatter)) {
                        t = o.navigationFormatter(i, $(this));
                        if (typeof(t) === "string") {
                            $li.html(a.replace(/@/g, t));
                        } else {
                            $li = $('<li/>', t);
                        }
                    } else {
                        $li.html(a.replace(/@/g, i));
                    }
                    $li.appendTo(base.$nav).addClass(c).data('index', i);
                });
                base.$nav.children('li').bind(o.clickControls, function(e) {
                    if (!base.flag && o.enableNavigation) {
                        base.flag = true;
                        setTimeout(function() {
                            base.flag = false;
                        }, 100);
                        base.gotoPage($(this).data('index'));
                    }
                    e.preventDefault();
                });
                if (!!o.navigationSize && o.navigationSize < base.pages) {
                    if (!base.$controls.find('.anythingNavWindow').length) {
                        base.$nav.before('<ul><li class="prev"><a href="#"><span>' + o.backText + '</span></a></li></ul>').after('<ul><li class="next"><a href="#"><span>' + o.forwardText + '</span></a></li></ul>').wrap('<div class="anythingNavWindow"></div>');
                    }
                    base.navWidths = base.$nav.find('li').map(function() {
                        return $(this).outerWidth(true) + Math.ceil(parseInt($(this).find('span').css('left'), 10) / 2 || 0);
                    }).get();
                    base.navLeft = base.currentPage;
                    base.$nav.width(base.navWidth(1, base.pages + 1) + 25);
                    base.$controls.find('.anythingNavWindow').width(base.navWidth(1, o.navigationSize + 1)).end().find('.prev,.next').bind(o.clickControls, function(e) {
                        if (!base.flag) {
                            base.flag = true;
                            setTimeout(function() {
                                base.flag = false;
                            }, 200);
                            base.navWindow(base.navLeft + o.navigationSize * ($(this).is('.prev') ? -1 : 1));
                        }
                        e.preventDefault();
                    });
                }
            }
        };
        base.navWidth = function(x, y) {
            var i, s = Math.min(x, y),
                e = Math.max(x, y),
                w = 0;
            for (i = s; i < e; i++) {
                w += base.navWidths[i - 1] || 0;
            }
            return w;
        };
        base.navWindow = function(n) {
            if (!!o.navigationSize && o.navigationSize < base.pages && base.navWidths) {
                var p = base.pages - o.navigationSize + 1;
                n = (n <= 1) ? 1 : (n > 1 && n < p) ? n : p;
                if (n !== base.navLeft) {
                    base.$controls.find('.anythingNavWindow').animate({
                        scrollLeft: base.navWidth(1, n),
                        width: base.navWidth(n, n + o.navigationSize)
                    }, {
                        queue: false,
                        duration: o.animationTime
                    });
                    base.navLeft = n;
                }
            }
        };
        base.buildNextBackButtons = function() {
            base.$forward = $('<span class="arrow forward"><a href="#"><span>' + o.forwardText + '</span></a></span>');
            base.$back = $('<span class="arrow back"><a href="#"><span>' + o.backText + '</span></a></span>');
            base.$back.bind(o.clickBackArrow, function(e) {
                if (o.enableArrows && !base.flag) {
                    base.flag = true;
                    setTimeout(function() {
                        base.flag = false;
                    }, 100);
                    base.goBack();
                }
                e.preventDefault();
            });
            base.$forward.bind(o.clickForwardArrow, function(e) {
                if (o.enableArrows && !base.flag) {
                    base.flag = true;
                    setTimeout(function() {
                        base.flag = false;
                    }, 100);
                    base.goForward();
                }
                e.preventDefault();
            });
            base.$back.add(base.$forward).find('a').bind('focusin focusout', function() {
                $(this).toggleClass('hover');
            });
            base.$back.appendTo((o.appendBackTo && $(o.appendBackTo).length) ? $(o.appendBackTo) : base.$wrapper);
            base.$forward.appendTo((o.appendForwardTo && $(o.appendForwardTo).length) ? $(o.appendForwardTo) : base.$wrapper);
            base.arrowWidth = base.$forward.width();
            base.arrowRight = parseInt(base.$forward.css('right'), 10);
            base.arrowLeft = parseInt(base.$back.css('left'), 10);
        };
        base.buildAutoPlay = function() {
            base.$startStop.html('<span>' + (base.playing ? o.stopText : o.startText) + '</span>').bind(o.clickSlideshow, function(e) {
                if (o.enableStartStop) {
                    base.startStop(!base.playing);
                    base.makeActive();
                    if (base.playing && !o.autoPlayDelayed) {
                        base.goForward(true);
                    }
                }
                e.preventDefault();
            }).bind('focusin focusout', function() {
                $(this).toggleClass('hover');
            });
        };
        base.checkResize = function(stopTimer) {
            clearTimeout(base.resizeTimer);
            base.resizeTimer = setTimeout(function() {
                var w = base.$outer.width() - base.outerPad[0],
                    h = (base.$outer[0].tagName === "BODY" ? base.$win.height() : base.$outer.height()) - base.outerPad[1];
                if (base.width * o.showMultiple !== w || base.height !== h) {
                    base.setDimensions();
                    base.gotoPage(base.currentPage, base.playing, null, -1);
                }
                if (typeof(stopTimer) === 'undefined') {
                    base.checkResize();
                }
            }, 500);
        };
        base.setDimensions = function() {
            var w, h, c, t, edge = 0,
                fullsize = {
                    width: '100%',
                    height: '100%'
                },
                pw = (o.showMultiple > 1) ? base.width || base.$window.width() / o.showMultiple : base.$window.width(),
                winw = base.$win.width();
            if (o.expand) {
                w = base.$outer.width() - base.outerPad[0];
                base.height = h = base.$outer.height() - base.outerPad[1];
                base.$wrapper.add(base.$window).add(base.$items).css({
                    width: w,
                    height: h
                });
                base.width = pw = (o.showMultiple > 1) ? w / o.showMultiple : w;
            }
            base.$items.each(function(i) {
                t = $(this);
                c = t.children();
                if (o.resizeContents) {
                    w = base.width;
                    h = base.height;
                    t.css({
                        width: w,
                        height: h
                    });
                    if (c.length) {
                        if (c[0].tagName === "EMBED") {
                            c.attr(fullsize);
                        }
                        if (c[0].tagName === "OBJECT") {
                            c.find('embed').attr(fullsize);
                        }
                        if (c.length === 1) {
                            c.css(fullsize);
                        }
                    }
                } else {
                    w = t.width() || base.width;
                    if (c.length === 1 && w >= winw) {
                        w = (c.width() >= winw) ? pw : c.width();
                        c.css('max-width', w);
                    }
                    t.css('width', w);
                    h = (c.length === 1 ? c.outerHeight(true) : t.height());
                    if (h <= base.outerPad[1]) {
                        h = base.height;
                    }
                    t.css('height', h);
                }
                base.panelSize[i] = [w, h, edge];
                edge += (o.mode === 'vertical') ? h : w;
            });
            base.$el.css((o.mode === 'vertical' ? 'height' : 'width'), o.mode === 'fade' ? base.width : edge);
        };
        base.getDim = function(page) {
            var i, w = base.width,
                h = base.height;
            if (base.pages < 1 || isNaN(page)) {
                return [w, h];
            }
            page = (o.infiniteSlides && base.pages > 1) ? page : page - 1;
            i = base.panelSize[page];
            if (i) {
                w = i[0] || w;
                h = i[1] || h;
            }
            if (o.showMultiple > 1) {
                for (i = 1; i < o.showMultiple; i++) {
                    w += base.panelSize[(page + i)][0];
                    h = Math.max(h, base.panelSize[page + i][1]);
                }
            }
            return [w, h];
        };
        base.goForward = function(autoplay) {
            base.gotoPage(base[o.allowRapidChange ? 'targetPage' : 'currentPage'] + o.changeBy * (o.playRtl ? -1 : 1), autoplay);
        };
        base.goBack = function(autoplay) {
            base.gotoPage(base[o.allowRapidChange ? 'targetPage' : 'currentPage'] + o.changeBy * (o.playRtl ? 1 : -1), autoplay);
        };
        base.gotoPage = function(page, autoplay, callback, time) {
            if (autoplay !== true) {
                autoplay = false;
                base.startStop(false);
                base.makeActive();
            }
            if (/^[#|.]/.test(page) && $(page).length) {
                page = $(page).closest('.panel').index() + base.adj;
            }
            if (o.changeBy !== 1) {
                var adj = base.pages - base.adjustMultiple;
                if (page < 1) {
                    page = o.stopAtEnd ? 1 : (o.infiniteSlides ? base.pages + page : (o.showMultiple > 1 - page ? 1 : adj));
                }
                if (page > base.pages) {
                    page = o.stopAtEnd ? base.pages : (o.showMultiple > 1 - page ? 1 : page -= adj);
                } else if (page >= adj) {
                    page = adj;
                }
            }
            if (base.pages <= 1) {
                return;
            }
            base.$lastPage = base.$currentPage;
            if (typeof(page) !== "number") {
                page = parseInt(page, 10) || o.startPanel;
                base.setCurrentPage(page);
            }
            if (autoplay && o.isVideoPlaying(base)) {
                return;
            }
            base.exactPage = page;
            if (page > base.pages + 1 - base.adj) {
                page = (!o.infiniteSlides && !o.stopAtEnd) ? 1 : base.pages;
            }
            if (page < base.adj) {
                page = (!o.infiniteSlides && !o.stopAtEnd) ? base.pages : 1;
            }
            if (!o.infiniteSlides) {
                base.exactPage = page;
            }
            base.currentPage = (page > base.pages) ? base.pages : (page < 1) ? 1 : base.currentPage;
            base.$currentPage = base.$items.eq(base.currentPage - base.adj);
            base.targetPage = (page === 0) ? base.pages : (page > base.pages) ? 1 : page;
            base.$targetPage = base.$items.eq(base.targetPage - base.adj);
            time = typeof time !== 'undefined' ? time : o.animationTime;
            if (time >= 0) {
                base.$el.trigger('slide_init', base);
            }
            if (time > 0) {
                base.slideControls(true);
            }
            if (o.buildNavigation) {
                base.setNavigation(base.targetPage);
            }
            if (autoplay !== true) {
                autoplay = false;
            }
            if (!autoplay || (o.stopAtEnd && page === base.pages)) {
                base.startStop(false);
            }
            if (time >= 0) {
                base.$el.trigger('slide_begin', base);
            }
            setTimeout(function(d) {
                var p, empty = true;
                if (o.allowRapidChange) {
                    base.$wrapper.add(base.$el).add(base.$items).stop(true, true);
                }
                if (!o.resizeContents) {
                    p = base.getDim(page);
                    d = {};
                    if (base.$wrapper.width() !== p[0]) {
                        d.width = p[0] || base.width;
                        empty = false;
                    }
                    if (base.$wrapper.height() !== p[1]) {
                        d.height = p[1] || base.height;
                        empty = false;
                    }
                    if (!empty) {
                        base.$wrapper.filter(':not(:animated)').animate(d, {
                            queue: false,
                            duration: (time < 0 ? 0 : time),
                            easing: o.easing
                        });
                    }
                }
                if (o.mode === 'fade') {
                    if (base.$lastPage[0] !== base.$targetPage[0]) {
                        base.fadeIt(base.$lastPage, 0, time);
                        base.fadeIt(base.$targetPage, 1, time, function() {
                            base.endAnimation(page, callback, time);
                        });
                    } else {
                        base.endAnimation(page, callback, time);
                    }
                } else {
                    d = {};
                    d[base.dir] = -base.panelSize[(o.infiniteSlides && base.pages > 1) ? page : page - 1][2];
                    base.$el.filter(':not(:animated)').animate(d, {
                        queue: false,
                        duration: time < 0 ? 0 : time,
                        easing: o.easing,
                        complete: function() {
                            base.endAnimation(page, callback, time);
                        }
                    });
                }
            }, parseInt(o.delayBeforeAnimate, 10) || 0);
        };
        base.endAnimation = function(page, callback, time) {
            if (page === 0) {
                base.$el.css(base.dir, o.mode === 'fade' ? 0 : -base.panelSize[base.pages][2]);
                page = base.pages;
            } else if (page > base.pages) {
                base.$el.css(base.dir, o.mode === 'fade' ? 0 : -base.panelSize[1][2]);
                page = 1;
            }
            base.exactPage = page;
            base.setCurrentPage(page, false);
            if (o.mode === 'fade') {
                base.fadeIt(base.$items.not(':eq(' + (page - base.adj) + ')'), 0, 0);
            }
            if (!base.hovered) {
                base.slideControls(false);
            }
            if (o.hashTags) {
                base.setHash(page);
            }
            if (time >= 0) {
                base.$el.trigger('slide_complete', base);
            }
            if (typeof callback === 'function') {
                callback(base);
            }
            if (o.autoPlayLocked && !base.playing) {
                setTimeout(function() {
                    base.startStop(true);
                }, o.resumeDelay - (o.autoPlayDelayed ? o.delay : 0));
            }
        };
        base.fadeIt = function(el, toOpacity, time, callback) {
            var t = time < 0 ? 0 : time;
            if (o.resumeOnVisible) {
                el.filter(':not(:animated)').fadeTo(t, toOpacity, callback);
            } else {
                el.filter(':not(:animated)')[toOpacity === 0 ? 'fadeOut' : 'fadeIn'](t, callback);
            }
        };
        base.setCurrentPage = function(page, move) {
            page = parseInt(page, 10);
            if (base.pages < 1 || page === 0 || isNaN(page)) {
                return;
            }
            if (page > base.pages + 1 - base.adj) {
                page = base.pages - base.adj;
            }
            if (page < base.adj) {
                page = 1;
            }
            if (o.buildArrows && !o.infiniteSlides && o.stopAtEnd) {
                base.$forward[page === base.pages - base.adjustMultiple ? 'addClass' : 'removeClass']('disabled');
                base.$back[page === 1 ? 'addClass' : 'removeClass']('disabled');
                if (page === base.pages && base.playing) {
                    base.startStop();
                }
            }
            if (!move) {
                var d = base.getDim(page);
                base.$wrapper.css({
                    width: d[0],
                    height: d[1]
                }).add(base.$window).scrollLeft(0).scrollTop(0);
                base.$el.css(base.dir, o.mode === 'fade' ? 0 : -base.panelSize[(o.infiniteSlides && base.pages > 1) ? page : page - 1][2]);
            }
            base.currentPage = page;
            base.$currentPage = base.$items.removeClass('activePage').eq(page - base.adj).addClass('activePage');
            if (o.buildNavigation) {
                base.setNavigation(page);
            }
        };
        base.setNavigation = function(page) {
            base.$nav.find('.cur').removeClass('cur').end().find('a').eq(page - 1).addClass('cur');
        };
        base.makeActive = function() {
            if (!base.$wrapper.hasClass('activeSlider')) {
                $('.activeSlider').removeClass('activeSlider');
                base.$wrapper.addClass('activeSlider');
            }
        };
        base.gotoHash = function() {
            var h = base.win.location.hash,
                i = h.indexOf('&'),
                n = h.match(base.regex);
            if (n === null && !/^#&/.test(h) && !/#!?\//.test(h)) {
                h = h.substring(0, (i >= 0 ? i : h.length));
                n = ($(h).length && $(h).closest('.anythingBase')[0] === base.el) ? base.$items.index($(h).closest('.panel')) + base.adj : null;
            } else if (n !== null) {
                n = (o.hashTags) ? parseInt(n[1], 10) : null;
            }
            return n;
        };
        base.setHash = function(n) {
            var s = 'panel' + base.runTimes + '-',
                h = base.win.location.hash;
            if (typeof h !== 'undefined') {
                base.win.location.hash = (h.indexOf(s) > 0) ? h.replace(base.regex, s + n) : h + "&" + s + n;
            }
        };
        base.slideControls = function(toggle) {
            var dir = (toggle) ? 'slideDown' : 'slideUp',
                t1 = (toggle) ? 0 : o.animationTime,
                t2 = (toggle) ? o.animationTime : 0,
                op = (toggle) ? 1 : 0,
                sign = (toggle) ? 0 : 1;
            if (o.toggleControls) {
                base.$controls.stop(true, true).delay(t1)[dir](o.animationTime / 2).delay(t2);
            }
            if (o.buildArrows && o.toggleArrows) {
                if (!base.hovered && base.playing) {
                    sign = 1;
                    op = 0;
                }
                base.$forward.stop(true, true).delay(t1).animate({
                    right: base.arrowRight + (sign * base.arrowWidth),
                    opacity: op
                }, o.animationTime / 2);
                base.$back.stop(true, true).delay(t1).animate({
                    left: base.arrowLeft + (sign * base.arrowWidth),
                    opacity: op
                }, o.animationTime / 2);
            }
        };
        base.clearTimer = function(paused) {
            if (base.timer) {
                base.win.clearInterval(base.timer);
                if (!paused && base.slideshow) {
                    base.$el.trigger('slideshow_stop', base);
                    base.slideshow = false;
                }
            }
        };
        base.startStop = function(playing, paused) {
            if (playing !== true) {
                playing = false;
            }
            base.playing = playing;
            if (playing && !paused) {
                base.$el.trigger('slideshow_start', base);
                base.slideshow = true;
            }
            if (o.buildStartStop) {
                base.$startStop.toggleClass('playing', playing).find('span').html(playing ? o.stopText : o.startText);
                if (base.$startStop.find('span').css('visibility') === "hidden") {
                    base.$startStop.addClass(o.tooltipClass).attr('title', playing ? o.stopText : o.startText);
                }
            }
            if (playing) {
                base.clearTimer(true);
                base.timer = base.win.setInterval(function() {
                    if (!o.isVideoPlaying(base)) {
                        base.goForward(true);
                    } else if (!o.resumeOnVideoEnd) {
                        base.startStop();
                    }
                }, o.delay);
            } else {
                base.clearTimer();
            }
        };
        base.init();
    };
    $.anythingSlider.defaults = {
        theme: "default",
        mode: "horiz",
        expand: false,
        resizeContents: true,
        showMultiple: false,
        easing: "swing",
        buildArrows: true,
        buildNavigation: true,
        buildStartStop: true,
        toggleArrows: false,
        toggleControls: false,
        startText: "Start",
        stopText: "Stop",
        forwardText: "»",
        backText: "«",
        tooltipClass: "tooltip",
        enableArrows: true,
        enableNavigation: true,
        enableStartStop: true,
        enableKeyboard: true,
        startPanel: 1,
        changeBy: 1,
        hashTags: true,
        infiniteSlides: true,
        navigationFormatter: null,
        navigationSize: false,
        autoPlay: false,
        autoPlayLocked: false,
        autoPlayDelayed: false,
        pauseOnHover: true,
        stopAtEnd: false,
        playRtl: false,
        delay: 3000,
        resumeDelay: 15000,
        animationTime: 600,
        delayBeforeAnimate: 0,
        clickForwardArrow: "click",
        clickBackArrow: "click",
        clickControls: "click focusin",
        clickSlideshow: "click",
        allowRapidChange: false,
        resumeOnVideoEnd: true,
        resumeOnVisible: true,
        addWmodeToObject: "opaque",
        isVideoPlaying: function(base) {
            return false;
        }
    };
    $.fn.anythingSlider = function(options, callback) {
        return this.each(function() {
            var page, anySlide = $(this).data('AnythingSlider');
            if ((typeof(options)).match('object|undefined')) {
                if (!anySlide) {
                    (new $.anythingSlider(this, options));
                } else {
                    anySlide.updateSlider();
                }
            } else if (/\d/.test(options) && !isNaN(options) && anySlide) {
                page = (typeof(options) === "number") ? options : parseInt($.trim(options), 10);
                if (page >= 1 && page <= anySlide.pages) {
                    anySlide.gotoPage(page, false, callback);
                }
            } else if (/^[#|.]/.test(options) && $(options).length) {
                anySlide.gotoPage(options, false, callback);
            }
        });
    };
})(jQuery);;
(function(window) {
    var document = window.document;
    var documentElement = document.documentElement;
    var sessionStorage = window['sessionStorage'];
    var Object = window['Object'];
    var JSON = window['JSON'];
    var windowLocation = window.location;
    var windowHistory = window.history;
    var historyObject = windowHistory;
    var historyPushState = windowHistory.pushState;
    var historyReplaceState = windowHistory.replaceState;
    var isSupportHistoryAPI = !!historyPushState;
    var isSupportStateObjectInHistory = 'state' in windowHistory;
    var defineProperty = Object.defineProperty;
    var locationObject = redefineProperty({}, 't') ? {} : document.createElement('a');
    var eventNamePrefix = '';
    var addEventListenerName = window.addEventListener ? 'addEventListener' : (eventNamePrefix = 'on') && 'attachEvent';
    var removeEventListenerName = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
    var dispatchEventName = window.dispatchEvent ? 'dispatchEvent' : 'fireEvent';
    var addEvent = window[addEventListenerName];
    var removeEvent = window[removeEventListenerName];
    var dispatch = window[dispatchEventName];
    var settings = {
        "basepath": '/',
        "redirect": 0,
        "type": '/'
    };
    var sessionStorageKey = '__historyAPI__';
    var anchorElement = document.createElement('a');
    var lastURL = windowLocation.href;
    var checkUrlForPopState = '';
    var isFireInitialState = false;
    var stateStorage = {};
    var eventsList = {};
    var eventsDescriptors = {
        "onhashchange": null,
        "onpopstate": null
    };
    var historyDescriptors = {
        "redirect": function(type, basepath) {
            settings["basepath"] = basepath = basepath == null ? settings["basepath"] : basepath;
            settings["type"] = type = type == null ? settings["type"] : type;
            if (window.top == window.self) {
                var relative = parseURL(null, false, true)._relative;
                var path = windowLocation.pathname + windowLocation.search;
                if (isSupportHistoryAPI) {
                    path = path.replace(/([^\/])$/, '$1/');
                    if (relative != basepath && (new RegExp("^" + basepath + "$", "i")).test(path)) {
                        windowLocation.replace(relative);
                    }
                } else if (path != basepath) {
                    path = path.replace(/([^\/])\?/, '$1/?');
                    if ((new RegExp("^" + basepath, "i")).test(path)) {
                        windowLocation.replace(basepath + '#' + path.replace(new RegExp("^" + basepath, "i"), type) + windowLocation.hash);
                    }
                }
            }
        },
        pushState: function(state, title, url) {
            historyPushState && historyPushState.apply(windowHistory, arguments);
            changeState(state, url);
        },
        replaceState: function(state, title, url) {
            delete stateStorage[windowLocation.href];
            historyReplaceState && historyReplaceState.apply(windowHistory, arguments);
            changeState(state, url, true);
        },
        "location": {
            set: function(value) {
                window.location = value;
            },
            get: function() {
                return isSupportHistoryAPI ? windowLocation : locationObject;
            }
        },
        "state": {
            get: function() {
                return stateStorage[windowLocation.href] || null;
            }
        }
    };
    var locationDescriptors = {
        assign: function(url) {
            if (('' + url).indexOf('#') === 0) {
                changeState(null, url);
            } else {
                windowLocation.assign(url);
            }
        },
        reload: function() {
            windowLocation.reload();
        },
        replace: function(url) {
            if (('' + url).indexOf('#') === 0) {
                changeState(null, url, true);
            } else {
                windowLocation.replace(url);
            }
        },
        toString: function() {
            return this.href;
        },
        "href": {
            get: function() {
                return parseURL()._href;
            }
        },
        "protocol": null,
        "host": null,
        "hostname": null,
        "port": null,
        "pathname": {
            get: function() {
                return parseURL()._pathname;
            }
        },
        "search": {
            get: function() {
                return parseURL()._search;
            }
        },
        "hash": {
            set: function(value) {
                changeState(null, ('' + value).replace(/^(#|)/, '#'), false, lastURL);
            },
            get: function() {
                return parseURL()._hash;
            }
        }
    };

    function emptyFunction() {}

    function parseURL(href, isWindowLocation, isNotAPI) {
        var re = /(?:([\w0-9]+:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;
        if (href && !isWindowLocation) {
            var current = parseURL(),
                _pathname = current._pathname,
                _protocol = current._protocol;
            href = /^(?:[\w0-9]+\:)?\/\//.test(href) ? href.indexOf("/") === 0 ? _protocol + href : href : _protocol + "//" + current._host + (href.indexOf("/") === 0 ? href : href.indexOf("?") === 0 ? _pathname + href : href.indexOf("#") === 0 ? _pathname + current._search + href : _pathname.replace(/[^\/]+$/g, '') + href);
        } else {
            href = isWindowLocation ? href : windowLocation.href;
            if (!isSupportHistoryAPI || isNotAPI) {
                href = href.replace(/^[^#]*/, '') || "#";
                href = windowLocation.protocol + '//' + windowLocation.host + settings['basepath'] + href.replace(new RegExp("^#[\/]?(?:" + settings["type"] + ")?"), "");
            }
        }
        anchorElement.href = href;
        var result = re.exec(anchorElement.href);
        var host = result[2] + (result[3] ? ':' + result[3] : '');
        var pathname = result[4] || '/';
        var search = result[5] || '';
        var hash = result[6] === '#' ? '' : (result[6] || '');
        var relative = pathname + search + hash;
        var nohash = pathname.replace(new RegExp("^" + settings["basepath"], "i"), settings["type"]) + search;
        return {
            _href: result[1] + '//' + host + relative,
            _protocol: result[1],
            _host: host,
            _hostname: result[2],
            _port: result[3] || '',
            _pathname: pathname,
            _search: search,
            _hash: hash,
            _relative: relative,
            _nohash: nohash,
            _special: nohash + hash
        }
    }

    function storageInitialize(JSON) {
        var storage = '';
        if (sessionStorage) {
            storage += sessionStorage.getItem(sessionStorageKey);
        } else {
            var cookie = document.cookie.split(sessionStorageKey + "=");
            if (cookie.length > 1) {
                storage += (cookie.pop().split(";").shift() || 'null');
            }
        }
        try {
            stateStorage = JSON.parse(storage) || {};
        } catch (_e_) {
            stateStorage = {};
        }
        addEvent(eventNamePrefix + 'unload', function() {
            if (sessionStorage) {
                sessionStorage.setItem(sessionStorageKey, JSON.stringify(stateStorage));
            } else {
                var state = {};
                if (state[windowLocation.href] = historyObject.state) {
                    document.cookie = sessionStorageKey + '=' + JSON.stringify(state);
                }
            }
        }, false);
    }

    function redefineProperty(object, prop, descriptor, onWrapped) {
        descriptor = descriptor || {
            set: emptyFunction
        };
        var isDefinedSetter = !descriptor.set;
        var isDefinedGetter = !descriptor.get;
        var test = {
            configurable: true,
            set: function() {
                isDefinedSetter = 1;
            },
            get: function() {
                isDefinedGetter = 1;
            }
        };
        try {
            defineProperty(object, prop, test);
            object[prop] = object[prop];
            defineProperty(object, prop, descriptor);
        } catch (_e_) {}
        if (!isDefinedSetter || !isDefinedGetter) {
            if (object.__defineGetter__) {
                object.__defineGetter__(prop, test.get);
                object.__defineSetter__(prop, test.set);
                object[prop] = object[prop];
                descriptor.get && object.__defineGetter__(prop, descriptor.get);
                descriptor.set && object.__defineSetter__(prop, descriptor.set);
            }
            if ((!isDefinedSetter || !isDefinedGetter) && object === window) {
                try {
                    var originalValue = object[prop];
                    object[prop] = null;
                } catch (_e_) {}
                if ('execScript' in window) {
                    window['execScript']('Public ' + prop, 'VBScript');
                } else {
                    try {
                        defineProperty(object, prop, {
                            value: emptyFunction
                        });
                    } catch (_e_) {}
                }
                object[prop] = originalValue;
            } else if (!isDefinedSetter || !isDefinedGetter) {
                try {
                    try {
                        var temp = Object.create(object);
                        defineProperty(Object.getPrototypeOf(temp) === object ? temp : object, prop, descriptor);
                        for (var key in object) {
                            if (typeof object[key] === 'function') {
                                temp[key] = object[key].bind(object);
                            }
                        }
                        try {
                            onWrapped.call(temp, temp, object);
                        } catch (_e_) {}
                        object = temp;
                    } catch (_e_) {
                        defineProperty(object.constructor.prototype, prop, descriptor);
                    }
                } catch (_e_) {
                    return false;
                }
            }
        }
        return object;
    }

    function prepareDescriptorsForObject(object, prop, descriptor) {
        descriptor = descriptor || {};
        object = object === locationDescriptors ? windowLocation : object;
        descriptor.set = (descriptor.set || function(value) {
            object[prop] = value;
        });
        descriptor.get = (descriptor.get || function() {
            return object[prop];
        });
        return descriptor;
    }

    function addEventListener(event, listener, capture) {
        if (event in eventsList) {
            eventsList[event].push(listener);
        } else {
            if (arguments.length > 3) {
                addEvent(event, listener, capture, arguments[3]);
            } else {
                addEvent(event, listener, capture);
            }
        }
    }

    function removeEventListener(event, listener, capture) {
        var list = eventsList[event];
        if (list) {
            for (var i = list.length; --i;) {
                if (list[i] === listener) {
                    list.splice(i, 1);
                    break;
                }
            }
        } else {
            removeEvent(event, listener, capture);
        }
    }

    function dispatchEvent(event, eventObject) {
        var eventType = ('' + (typeof event === "string" ? event : event.type)).replace(/^on/, '');
        var list = eventsList[eventType];
        if (list) {
            eventObject = typeof event === "string" ? eventObject : event;
            if (eventObject.target == null) {
                for (var props = ['target', 'currentTarget', 'srcElement', 'type']; event = props.pop();) {
                    eventObject = redefineProperty(eventObject, event, {
                        get: event === 'type' ? function() {
                            return eventType;
                        } : function() {
                            return window;
                        }
                    });
                }
            }
            ((eventType === 'popstate' ? window.onpopstate : window.onhashchange) || emptyFunction).call(window, eventObject);
            for (var i = 0, len = list.length; i < len; i++) {
                list[i].call(window, eventObject);
            }
            return true;
        } else {
            return dispatch(event, eventObject);
        }
    }

    function firePopState() {
        var o = document.createEvent ? document.createEvent('Event') : document.createEventObject();
        if (o.initEvent) {
            o.initEvent('popstate', false, false);
        } else {
            o.type = 'popstate';
        }
        o.state = historyObject.state;
        dispatchEvent(o);
    }

    function fireInitialState() {
        if (isFireInitialState) {
            isFireInitialState = false;
            firePopState();
        }
    }

    function changeState(state, url, replace, lastURLValue) {
        if (!isSupportHistoryAPI) {
            var urlObject = parseURL(url);
            if (urlObject._relative !== parseURL()._relative) {
                lastURL = lastURLValue;
                if (replace) {
                    windowLocation.replace("#" + urlObject._special);
                } else {
                    windowLocation.hash = urlObject._special;
                }
            }
        }
        if (!isSupportStateObjectInHistory && state) {
            stateStorage[windowLocation.href] = state;
        }
        isFireInitialState = false;
    }

    function onHashChange(event) {
        if (lastURL) {
            if (checkUrlForPopState !== windowLocation.href) {
                firePopState();
            }
            event = event || window.event;
            var oldURLObject = parseURL(lastURL, true);
            var newURLObject = parseURL();
            if (!event.oldURL) {
                event.oldURL = oldURLObject._href;
                event.newURL = newURLObject._href;
            }
            if (oldURLObject._hash !== newURLObject._hash) {
                dispatchEvent(event);
            }
        }
        lastURL = windowLocation.href;
    }

    function onLoad(noScroll) {
        setTimeout(function() {
            addEvent('popstate', function(e) {
                checkUrlForPopState = windowLocation.href;
                if (!isSupportStateObjectInHistory) {
                    e = redefineProperty(e, 'state', {
                        get: function() {
                            return historyObject.state;
                        }
                    });
                }
                dispatchEvent(e);
            }, false);
        }, 0);
        if (!isSupportHistoryAPI && noScroll !== true && historyObject.location) {
            scrollToAnchorId(historyObject.location.hash);
            fireInitialState();
        }
    }

    function onAnchorClick(e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        var defaultPrevented = "defaultPrevented" in event ? event['defaultPrevented'] : event.returnValue === false;
        if (target && target.nodeName === "A" && !defaultPrevented) {
            var current = parseURL();
            var expect = parseURL(target.getAttribute("href", 2));
            var isEqualBaseURL = current._href.split('#').shift() === expect._href.split('#').shift();
            if (isEqualBaseURL) {
                if (current._hash !== expect._hash) {
                    historyObject.location.hash = expect._hash;
                }
                scrollToAnchorId(expect._hash);
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
            }
        }
    }

    function scrollToAnchorId(hash) {
        var target = document.getElementById(hash = (hash || '').replace(/^#/, ''));
        if (target && target.id === hash && target.nodeName === "A") {
            var rect = target.getBoundingClientRect();
            window.scrollTo((documentElement.scrollLeft || 0), rect.top + (documentElement.scrollTop || 0) - (documentElement.clientTop || 0));
        }
    }

    function initialize() {
        var scripts = document.getElementsByTagName('script');
        var src = (scripts[scripts.length - 1] || {}).src || '';
        var arg = src.indexOf('?') !== -1 ? src.split('?').pop() : '';
        arg.replace(/(\w+)(?:=([^&]*))?/g, function(a, key, value) {
            settings[key] = (value || (key === 'basepath' ? '/' : '')).replace(/^(0|false)$/, '');
        });
        ie6DriverStart();
        addEvent(eventNamePrefix + 'hashchange', onHashChange, false);
        var data = [locationDescriptors, locationObject, eventsDescriptors, window, historyDescriptors, historyObject];
        if (isSupportStateObjectInHistory) {
            delete historyDescriptors['state'];
        }
        for (var i = 0; i < data.length; i += 2) {
            for (var prop in data[i]) {
                if (data[i].hasOwnProperty(prop)) {
                    if (typeof data[i][prop] === 'function') {
                        data[i + 1][prop] = data[i][prop];
                    } else {
                        var descriptor = prepareDescriptorsForObject(data[i], prop, data[i][prop]);
                        if (!redefineProperty(data[i + 1], prop, descriptor, function(n, o) {
                                if (o === historyObject) {
                                    window.history = historyObject = data[i + 1] = n;
                                }
                            })) {
                            removeEvent(eventNamePrefix + 'hashchange', onHashChange, false);
                            return false;
                        }
                        if (data[i + 1] === window) {
                            eventsList[prop] = eventsList[prop.substr(2)] = [];
                        }
                    }
                }
            }
        }
        if (settings['redirect']) {
            historyObject['redirect']();
        }
        if (!isSupportStateObjectInHistory && JSON) {
            storageInitialize(JSON);
        }
        if (!isSupportHistoryAPI) {
            document[addEventListenerName](eventNamePrefix + "click", onAnchorClick, false);
        }
        if (document.readyState === 'complete') {
            onLoad(true);
        } else {
            if (!isSupportHistoryAPI && parseURL()._relative !== settings["basepath"]) {
                isFireInitialState = true;
            }
            addEvent(eventNamePrefix + 'load', onLoad, false);
        }
        return true;
    }
    if (!initialize()) {
        return;
    }
    historyObject['emulate'] = !isSupportHistoryAPI;
    window[addEventListenerName] = addEventListener;
    window[removeEventListenerName] = removeEventListener;
    window[dispatchEventName] = dispatchEvent;

    function ie6DriverStart() {
        function createVBObjects(object) {
            var properties = [];
            var className = 'VBHistoryClass' + (new Date()).getTime() + msie++;
            var staticClassParts = ["Class " + className];
            for (var prop in object) {
                if (object.hasOwnProperty(prop)) {
                    var value = object[prop];
                    if (value && (value.get || value.set)) {
                        if (value.get) {
                            staticClassParts.push('Public ' + (prop === '_' ? 'Default ' : '') + 'Property Get [' + prop + ']', 'Call VBCVal([(accessors)].[' + prop + '].get.call(me),[' + prop + '])', 'End Property');
                        }
                        if (value.set) {
                            staticClassParts.push('Public Property Let [' + prop + '](val)', (value = 'Call [(accessors)].[' + prop + '].set.call(me,val)\nEnd Property'), 'Public Property Set [' + prop + '](val)', value);
                        }
                    } else {
                        properties.push(prop);
                        staticClassParts.push('Public [' + prop + ']');
                    }
                }
            }
            staticClassParts.push('Private [(accessors)]', 'Private Sub Class_Initialize()', 'Set [(accessors)]=' + className + 'FactoryJS()', 'End Sub', 'End Class', 'Function ' + className + 'Factory()', 'Set ' + className + 'Factory=New ' + className, 'End Function');
            window['execScript'](staticClassParts.join('\n'), 'VBScript');
            window[className + 'FactoryJS'] = function() {
                return object;
            };
            var result = window[className + 'Factory']();
            for (var i = 0; i < properties.length; i++) {
                result[properties[i]] = object[properties[i]];
            }
            return result;
        }

        function quote(string) {
            var escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                return a in meta ? meta[a] : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }
        var msie = window['eval'] && eval("/*@cc_on 1;@*/");
        if (!msie || +((/msie (\d+)/i.exec(navigator.userAgent) || [, 8])[1]) > 7) {
            return;
        }
        var originalChangeState = changeState;
        var originalRedefineProperty = redefineProperty;
        var currentHref = parseURL()._href;
        var iFrame = document.createElement('iframe');
        iFrame.src = "javascript:true;";
        iFrame = documentElement.firstChild.appendChild(iFrame).contentWindow;
        window['execScript']('Public history\nFunction VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function', 'VBScript');
        locationObject = {
            "_": {
                get: locationDescriptors.toString
            }
        };
        historyObject = {
            "back": windowHistory.back,
            "forward": windowHistory.forward,
            "go": windowHistory.go,
            "emulate": null,
            "_": {
                get: function() {
                    return '[object History]';
                }
            }
        };
        JSON = {
            "parse": function(value) {
                try {
                    return new Function('', 'return ' + value)();
                } catch (_e_) {
                    return null;
                }
            },
            "stringify": function(value) {
                var n = (typeof value).charCodeAt(2);
                return n === 114 ? quote(value) : n === 109 ? isFinite(value) ? String(value) : 'null' : n === 111 || n === 108 ? String(value) : n === 106 ? !value ? 'null' : (function(isArray) {
                    var out = isArray ? '[' : '{';
                    if (isArray) {
                        for (var i = 0; i < value.length; i++) {
                            out += (i == 0 ? "" : ",") + JSON.stringify(value[i]);
                        }
                    } else {
                        for (var k in value) {
                            if (value.hasOwnProperty(k)) {
                                out += (out.length == 1 ? "" : ",") + quote(k) + ":" + JSON.stringify(value[k]);
                            }
                        }
                    }
                    return out + (isArray ? ']' : '}');
                })(Object.prototype.toString.call(value) === '[object Array]') : 'void 0';
            }
        };
        changeState = function(state, url, replace, lastURLValue, lfirst) {
            var iFrameDocument = iFrame.document;
            var urlObject = parseURL(url);
            isFireInitialState = false;
            if (urlObject._relative === parseURL()._relative && !lfirst) {
                if (state) {
                    stateStorage[windowLocation.href] = state;
                }
                return;
            }
            lastURL = lastURLValue;
            if (replace) {
                if (iFrame["lfirst"]) {
                    history.back();
                    changeState(state, urlObject._href, 0, lastURLValue, 1);
                } else {
                    windowLocation.replace("#" + urlObject._special);
                }
            } else if (urlObject._href != currentHref || lfirst) {
                if (!iFrame['lfirst']) {
                    iFrame["lfirst"] = 1;
                    changeState(state, currentHref, 0, lastURLValue, 1);
                }
                iFrameDocument.open();
                iFrameDocument.write('\x3Cscript\x3Elfirst=1;parent.location.hash="' + urlObject._special.replace(/"/g, '\\"') + '";\x3C/script\x3E');
                iFrameDocument.close();
            }
            if (!lfirst && state) {
                stateStorage[windowLocation.href] = state;
            }
        };
        redefineProperty = function(object, prop, descriptor, onWrapped) {
            if (!originalRedefineProperty.apply(this, arguments)) {
                if (object === locationObject) {
                    locationObject[prop] = descriptor;
                } else if (object === historyObject) {
                    historyObject[prop] = descriptor;
                    if (prop === 'state') {
                        locationObject = createVBObjects(locationObject);
                        window.history = historyObject = createVBObjects(historyObject);
                    }
                } else {
                    object[prop] = descriptor.get && descriptor.get();
                }
            }
            return object;
        };
        var interval = setInterval(function() {
            var href = parseURL()._href;
            if (href != currentHref) {
                var e = document.createEventObject();
                e.oldURL = currentHref;
                e.newURL = currentHref = href;
                e.type = 'hashchange';
                onHashChange(e);
            }
        }, 100);
        window['JSON'] = JSON;
    }
})(window);;;