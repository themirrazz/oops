new (function() {
    var tmc = {};
    tmc.CookieNotice = function(optA) {
        if (!this instanceof tmc.CookieNotice) {
            return new tmc.CookieNotice(optA);
        }
        if (!optA) {
            optA = {}
        }
        if (!optA.defaults) {
            optA.defaults = {};
        }
        if (!optA.dntDefaults) {
            optA.dntDefaults = {};
        }
        if (!optA.colors) { optA.colors = {} }
        var options = {
            defaults: {
                functional: optA.defaults.functional === undefined ?
                    true : Boolean(optA.defaults.functional),
                analytics: optA.defaults.analytics === undefined ?
                    true : Boolean(optA.defaults.analytics),
                targeting: optA.defaults.targeting === undefined ?
                    false : Boolean(optA.defaults.targeting),
                performance: optA.defaults.performance === undefined ?
                    false : Boolean(optA.defaults.performance)
            },
            dntDefaults: {
                functional: optA.dntDefaults.functional === undefined ?
                    true : Boolean(optA.dntDefaults.functional),
                analytics: optA.defaults.analytics === undefined ?
                    false : Boolean(optA.dntDefaults.analytics),
                targeting: optA.dntDefaults.targeting === undefined ?
                    false : Boolean(optA.defaults.targeting),
                performance: optA.defaults.performance === undefined ?
                    false : Boolean(optA.defaults.performance)
            },
            colors: optA.colors,
            bg: optA.bg || 'white',
            fg: optA.fg || 'black',
            performance: optA.performance === undefined ? true :
                Boolean(optA.performance),
            analytics: optA.analytics === undefined ? true :
                Boolean(optA.analytics),
            functional: optA.performance === undefined ? true :
                Boolean(optA.functional),
            targeting: optA.targeting === undefined ? true :
                Boolean(optA.targeting),
            custom: optA.custom || [],
            message: optA.bannerMessage || "Hey there! Like many others, our site uses cookies. Because we respect your privacy, you can change which cookies are enabled on our site."
        };
        var colors = {
            okay: "#33a61c",
            okaypressed: "#257a14",
            decline: "#ff0000",
            declinepressed: "#a60808",
            pressed: "#cdcdcd",
            yellow: "#c7bc1e",
            yellowpressed: "#7a741a"
        }
        var banner = document.createElement('div');
        banner.style.position = 'fixed';
        banner.style.bottom = '8px';
        banner.style.right = '8px';
        banner.style.background = options.bg;
        banner.style.zIndex='10';
        banner.style.color = options.fg
        banner.style.filter = 'drop-shadow(1px 1px 8px black)';
        banner.style.width = 'calc(100% - 16px)';
        banner.style.borderRadius = "6px";
        banner.style.display = 'none';
        if (!localStorage.getItem(
            (window.doNotTrack == '1' ||
                navigator.doNotTrack == 'yes' ||
                navigator.doNotTrack == '1')
                ? '--tmcookie-bannerdnt' : '--tmcookie-banner'
        )) {
            banner.style.display = ''
        }
        var bnri = document.createElement('div');
        bnri.style.padding = '10px';
        banner.appendChild(bnri);
        bnri.innerHTML = '<p style="font-family:Arial,Helvetica,sans-serif;font-size: 16px;"></p><div style="position:absolute; right: 4px;top:14px;"></div>';
        bnri.querySelector('p').innerText = options.message;
        var bna = document.createElement('button');
        bna.innerText = 'Accept Defaults';
        bna.style.fontSize = '16px';
        bna.style.marginLeft = '6px';
        bna.style.marginRight = '6px';
        bna.style.padding = '10px';
        bna.style.outline = 'none';
        bna.style.borderRadius = '10px';
        bna.style.border = 'none';
        bna.style.transition = '300ms';
        bna.style.color = 'white';
        bna.style.cursor = 'pointer';
        bna.onmouseover = function() {
            this.style.background = options.colors.okaypressed
                || colors.okaypressed;
        }
        bna.onmouseout = function() {
            this.style.background = options.colors.okay
                || colors.okay;
        }
        bna.style.background = options.colors.okay ||
            colors.okay;
        bnri.querySelector('div').appendChild(bna);
        var bnr = document.createElement('button');
        bnr.innerText = 'Reject';
        bnr.style.fontSize = '16px';
        bnr.style.marginLeft = '6px';
        bnr.style.marginRight = '6px';
        bnr.style.padding = '10px';
        bnr.style.outline = 'none';
        bnr.style.borderRadius = '10px';
        bnr.style.border = 'none';
        bnr.style.transition = '300ms';
        bnr.style.color = 'white';
        bnr.style.cursor = 'pointer';
        bnr.onmouseover = function() {
            this.style.background = options.colors.declinepressed
                || colors.declinepressed;
        }
        bnr.onmouseout = function() {
            this.style.background = options.colors.decline
                || colors.decline;
        }
        bnr.style.background = options.colors.decline ||
            colors.decline;
        bnri.querySelector('div').appendChild(bnr);
        var bnm = document.createElement('button');
        bnm.innerText = 'Manage';
        bnm.style.fontSize = '16px';
        bnm.style.marginLeft = '6px';
        bnm.style.marginRight = '6px';
        bnm.style.padding = '10px';
        bnm.style.outline = 'none';
        bnm.style.borderRadius = '10px';
        bnm.style.border = 'none';
        bnm.style.transition = '300ms';
        bnm.style.color = options.fg;
        bnm.style.cursor = 'pointer';
        bnm.onmouseover = function() {
            this.style.background = options.colors.pressed
                || colors.pressed;
        }
        bnm.onmouseout = function() {
            this.style.background = options.bg;
        }
        bnm.style.background = options.bg;
        bnri.querySelector('div').appendChild(bnm);
        document.body.appendChild(banner);
        var rbi = setInterval(function() {
            if (window.innerWidth < 716) {
                bnm.style.width = 'calc(100% - 12px)';
                bnm.style.marginTop = '2px';
                bnm.style.marginBottom = '2px';
                bnr.style.width = 'calc(100% - 12px)';
                bnr.style.marginTop = '2px';
                bnr.style.marginBottom = '2px';
                bna.style.width = 'calc(100% - 12px)';
                bna.style.marginTop = '2px';
                bna.style.marginBottom = '2px';
                bnri.querySelector('div').style.position = "static";
                bnri.querySelector('div').style.display = "flex";
                bnri.querySelector('div').style.flexDirection = "column";
                bnm.style.position = 'static';
                banner.style.width = 'calc(100% - 16px)';
            } else {
                bnm.style.width = 'calc(100% - 12px)';
                bnm.style.marginTop = '2px';
                bnm.style.marginBottom = '2px';
                bnr.style.width = 'calc(100% - 12px)';
                bnr.style.marginTop = '2px';
                bnr.style.marginBottom = '2px';
                bna.style.width = 'calc(100% - 12px)';
                bna.style.marginTop = '2px';
                bna.style.marginBottom = '2px';
                bnri.querySelector('div').style.position = "static";
                bnri.querySelector('div').style.display = "flex";
                bnri.querySelector('div').style.flexDirection = "column";
                banner.style.width = '300px';
            }
        });
        bna.onclick = function() {
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-bannerdnt' : '--tmcookie-banner',
                '!0'
            );
            banner.style.display = 'none'
        }
        bnr.onclick = function() {
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-bannerdnt' : '--tmcookie-banner',
                '!0'
            );
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-consentdnt-func' : '--tmcookie-consent-func',
                'block'
            );
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-consentdnt-anal' : '--tmcookie-consent-anal',
                'block'
            );
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-consentdnt-perf' : '--tmcookie-consent-perf',
                'block'
            );
            localStorage.setItem(
                (window.doNotTrack == '1' ||
                    navigator.doNotTrack == 'yes' ||
                    navigator.doNotTrack == '1')
                    ? '--tmcookie-consentdnt-tgt' : '--tmcookie-consent-tgt',
                'block'
            );
            (function() {
                for (var i = 0; i < rCuss.length; i++) {
                    localStorage.setItem(
                        ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-customdnt-' : '--tmcookie-custom-') + rCuss[i].id,
                        'block'
                    );
                }
            })()
            banner.style.display = 'none'
        }
        var mdk = document.createElement('div');
        mdk.style.position = 'fixed';
        mdk.style.backgroundColor = '#0000007f';
        mdk.style.zIndex = '100000';
        mdk.style.left = '0px';
        mdk.style.display = 'none';
        mdk.style.top = '0px';
        mdk.style.width = '100%';
        mdk.style.height = '100%';
        var mdx = document.createElement('div');
        mdx.style.position = 'absolute';
        mdx.style.background = options.bg;
        mdx.style.color=options.fg
        mdx.style.width = "330px";
        mdx.style.height = "520px";
        mdx.style.left = "calc((100% - 330px) / 2)";
        mdx.style.top = "calc((100% - 520px) / 2)";
        mdx.style.display = 'flex';
        mdx.style.flexDirection = 'column';
        mdx.style.overflow = 'hidden';
        mdk.appendChild(mdx);
        mdx.style.padding = '6px';
        mdx.style.borderRadius = '10px';
        var mdxscroll = document.createElement('div');
        mdxscroll.style.width = '100%';
        mdxscroll.style.height = '100%';
        mdxscroll.style.overflow = 'auto';
        mdxscroll.innerHTML = `<p style="margin:0px;font-size:24px">Manage Cookies</p>`;
        mdx.appendChild(mdxscroll);
        var mdxbuttons = document.createElement('p');
        mdxbuttons.style.paddingTop = '3px';
        mdxbuttons.style.paddingBottom = '3px';
        mdxbuttons.style.width = '100%';
        mdxbuttons.style.margin = '0px';
        mdxbuttons.style.textAlign = 'right';
        mdx.appendChild(mdxbuttons);
        document.body.appendChild(mdk);
        var mdxYes = document.createElement('button');
        mdxYes.innerText = 'Apply';
        mdxYes.style.fontSize = '16px';
        mdxYes.style.marginLeft = '6px';
        mdxYes.style.marginRight = '6px';
        mdxYes.style.padding = '10px';
        mdxYes.style.outline = 'none';
        mdxYes.style.borderRadius = '10px';
        mdxYes.style.border = 'none';
        mdxYes.style.transition = '300ms';
        mdxYes.style.color = 'white';
        mdxYes.style.cursor = 'pointer';
        mdxYes.onmouseover = function() {
            this.style.background = options.colors.okaypressed
                || colors.okaypressed;
        }
        mdxYes.onmouseout = function() {
            this.style.background = options.colors.okay
                || colors.okay;
        }
        mdxYes.style.background = options.colors.okay
            || colors.okay;
        mdxbuttons.appendChild(mdxYes);
        var mdxNo = document.createElement('button');
        mdxNo.innerText = 'Cancel';
        mdxNo.style.fontSize = '16px';
        mdxNo.style.marginLeft = '6px';
        mdxNo.style.marginRight = '6px';
        mdxNo.style.padding = '10px';
        mdxNo.style.outline = 'none';
        mdxNo.style.borderRadius = '10px';
        mdxNo.style.border = 'none';
        mdxNo.style.transition = '300ms';
        mdxNo.style.color = 'white';
        mdxNo.style.cursor = 'pointer';
        mdxNo.onmouseover = function() {
            this.style.background = options.colors.declinepressed
                || colors.declinepressed;
        }
        mdxNo.onmouseout = function() {
            this.style.background = options.colors.decline
                || colors.decline;
        }
        mdxNo.style.background = options.colors.decline ||
            colors.decline;
        mdxbuttons.appendChild(mdxNo);
        var mdxshow = function() {
            rFunc.setTo(
                localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'func')
            );
            rAnal.setTo(
                localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'anal')
            );
            rPerf.setTo(
                localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'perf')
            );
            rTgt.setTo(
                localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'tgt')
            );
            (function() {
                for (var i = 0; i < rCuss.length; i++) {
                    rCuss[i].radio.setTo(
                        localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-customdnt-' : '--tmcookie-custom-') + rCuss[i].id)
                    )
                }
            })()
            mdk.style.display = '';
        };
        this.showManageCookiesDialog = function() {
            mdxshow();
        }
        bnm.onclick = function() {
            mdxshow();
        };
        mdxNo.onclick = function() {
            mdk.style.display = 'none';
        }
        function createAcceptanceRadio(title, def) {
            var holder = document.createElement('div');
            holder.innerHTML = `<div style="width:100%;font-size:18px;"></div>`;
            holder.querySelector('div').innerText = title;
            holder.style.display = 'flex';
            holder.style.flexDirection = 'row';
            var div = document.createElement('div');
            holder.appendChild(div);
            var radio = {
                element: holder,
                value: def || 'default',
                setTo: function(tp) {
                    if (tp === 'allow') {
                        rba.click()
                    } else if (tp === 'block') {
                        rbn.click()
                    } else {
                        rbd.click()
                    }
                }
            }
            div.style.flexShrink = '0';
            var rbn = document.createElement('button');
            rbn.innerText = 'Block';
            rbn.style.fontSize = '16px';
            rbn.style.marginLeft = '6px';
            rbn.style.padding = '6px';
            rbn.style.outline = 'none';
            rbn.style.borderTopLeftRadius = '10px';
            rbn.style.borderBottomLeftRadius = '10px';
            rbn.style.border = 'none';
            rbn.style.transition = '300ms';
            rbn.style.color = 'white';
            rbn.style.cursor = 'pointer';
            rbn.onmouseover = function() {
                if (radio.value != 'block') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.declinepressed
                    || colors.declinepressed;
            }
            rbn.onmouseout = function() {
                rbn.style.background = radio.value === 'block' ?
                    (options.colors.decline || colors.decline) :
                    'white';
            }
            rbn.style.background = radio.value === 'block' ?
                (options.colors.decline || colors.decline) :
                'white';
            var rbd = document.createElement('button');
            rbd.innerText = 'Default';
            rbd.style.fontSize = '16px';
            rbd.style.padding = '6px';
            rbd.style.outline = 'none';
            rbd.style.border = 'none';
            rbd.style.transition = '300ms';
            rbd.style.color = 'white';
            rbd.style.cursor = 'pointer';
            rbd.onmouseover = function() {
                if (radio.value != 'default') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.yellowpressed
                    || colors.yellowpressed;
            }
            rbd.onmouseout = function() {
                rbd.style.background = radio.value === 'default' ?
                    (options.colors.yellow || colors.yellow) :
                    'white';
            }
            rbd.style.background = radio.value === 'default' ?
                (options.colors.yellow || colors.yellow) :
                'white';
            var rba = document.createElement('button');
            rba.innerText = 'Allow';
            rba.style.fontSize = '16px';
            rba.style.marginRight = '6px';
            rba.style.padding = '6px';
            rba.style.outline = 'none';
            rba.style.borderTopRightRadius = '10px';
            rba.style.borderBottomRightRadius = '10px';
            rba.style.border = 'none';
            rba.style.transition = '300ms';
            rba.style.color = 'white';
            rba.style.cursor = 'pointer';
            rba.onmouseover = function() {
                if (radio.value != 'allow') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.okaypressed
                    || colors.okaypressed;
            }
            rba.onmouseout = function() {
                rba.style.background = radio.value === 'allow' ?
                    (options.colors.okay || colors.okay) :
                    'white';
            }
            rba.style.background = radio.value === 'allow' ?
                (options.colors.okay || colors.okay) :
                'white';
            rba.style.color = 'black';
            rbd.style.color = 'black';
            rbn.style.color = 'black';
            function __UpdRdTxC() {
                rba.style.color = radio.value === 'allow' ?
                    'white' : 'black';
                rbd.style.color = radio.value === 'default' ?
                    'white' : 'black';
                rbn.style.color = radio.value === 'block' ?
                    'white' : 'black';
            }
            rbn.onclick = function() {
                radio.value = 'block';
                rba.onmouseout();
                rbd.onmouseout();
                rbn.onmouseout();
                __UpdRdTxC()
            }
            rba.onclick = function() {
                radio.value = 'allow';
                rba.onmouseout();
                rbd.onmouseout();
                rbn.onmouseout();
                __UpdRdTxC()
            }
            rbd.onclick = function() {
                radio.value = 'default';
                rba.onmouseout();
                rbd.onmouseout();
                rbn.onmouseout();
                __UpdRdTxC()
            }
            __UpdRdTxC();
            div.appendChild(rbn);
            div.appendChild(rbd);
            div.appendChild(rba);
            return radio
        }
        function createDisabledAcceptanceRadio(title, def) {
            var holder = document.createElement('div');
            holder.innerHTML = `<div style="width:100%;font-size:18px;"></div>`;
            holder.querySelector('div').innerText = title;
            holder.style.display = 'flex';
            holder.style.flexDirection = 'row';
            var div = document.createElement('div');
            div.style.opacity = '0.5';
            holder.appendChild(div);
            var radio = {
                element: holder,
                value: def || 'default'
            }
            div.style.flexShrink = '0';
            var rbn = document.createElement('button');
            rbn.innerText = 'Block';
            rbn.style.fontSize = '16px';
            rbn.style.marginLeft = '6px';
            rbn.style.padding = '6px';
            rbn.style.outline = 'none';
            rbn.style.borderTopLeftRadius = '10px';
            rbn.style.borderBottomLeftRadius = '10px';
            rbn.style.border = 'none';
            rbn.style.transition = '300ms';
            rbn.style.color = 'white';
            rbn.style.cursor = 'pointer';
            rbn.onmouseover = function() {
                if (radio.value != 'block') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.declinepressed
                    || colors.declinepressed;
            }
            rbn.onmouseout = function() {
                rbn.style.background = def === 'block' ?
                    (options.colors.decline || colors.decline) :
                    'white';
            }
            rbn.style.background = def === 'block' ?
                (options.colors.decline || colors.decline) :
                'white';
            var rbd = document.createElement('button');
            rbd.innerText = 'Default';
            rbd.style.fontSize = '16px';
            rbd.style.padding = '6px';
            rbd.style.outline = 'none';
            rbd.style.border = 'none';
            rbd.style.transition = '300ms';
            rbd.style.color = 'white';
            rbd.style.cursor = 'pointer';
            rbd.onmouseover = function() {
                if (radio.value != 'default') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.yellowpressed
                    || colors.yellowpressed;
            }
            rbd.onmouseout = function() {
                rbd.style.background = def === 'default' ?
                    (options.colors.yellow || colors.yellow) :
                    'white';
            }
            rbd.style.background = def === 'default' ?
                (options.colors.yellow || colors.yellow) :
                'white';
            var rba = document.createElement('button');
            rba.innerText = 'Allow';
            rba.style.fontSize = '16px';
            rba.style.marginRight = '6px';
            rba.style.padding = '6px';
            rba.style.outline = 'none';
            rba.style.borderTopRightRadius = '10px';
            rba.style.borderBottomRightRadius = '10px';
            rba.style.border = 'none';
            rba.style.transition = '300ms';
            rba.style.color = 'white';
            rba.style.cursor = 'pointer';
            rba.onmouseover = function() {
                if (radio.value != 'allow') {
                    return this.style.background =
                        options.colors.pressed ||
                        colors.pressed
                }
                this.style.background = options.colors.okaypressed
                    || colors.okaypressed;
            }
            rba.onmouseout = function() {
                rba.style.background = def === 'allow' ?
                    (options.colors.okay || colors.okay) :
                    'white';
            }
            rba.style.background = def === 'allow' ?
                (options.colors.okay || colors.okay) :
                'white';
            rba.style.color = 'black';
            rbd.style.color = 'black';
            rbn.style.color = 'black';
            function __UpdRdTxC() {
                rba.style.color = radio.value === 'allow' ?
                    'white' : 'black';
                rbd.style.color = radio.value === 'default' ?
                    'white' : 'black';
                rbn.style.color = radio.value === 'block' ?
                    'white' : 'black';
            }
            __UpdRdTxC();
            div.appendChild(rbn);
            div.appendChild(rbd);
            div.appendChild(rba);
            return radio
        }
        function createCustomAcceptanceDescription(d, q) {
            var e = document.createElement('div');
            e.innerText = q != 'required' ?
                (d + "\nDefault: " + (
                    ((window.doNotTrack === '1' ||
                        navigator.doNotTrack == 'yes' ||
                        navigator.doNotTrack == '1') ?
                        options.custom[q].dnt : options.custom[q].reg) ?
                        'On' : 'Off'
                )) : d;
            e.style.fontSize = '14px';
            e.style.cursor = 'default'
            return e
        }
        function createAcceptanceDescription(d, q) {
            var e = document.createElement('div');
            e.innerText = q != 'required' ?
                (d + "\nDefault: " + (
                    ((window.doNotTrack === '1' ||
                        navigator.doNotTrack == 'yes' ||
                        navigator.doNotTrack == '1') ?
                        options.dntDefaults[q] : options.defaults[q]) ?
                        'On' : 'Off'
                )) : d;
            e.style.fontSize = '14px';
            e.style.cursor = 'default'
            return e
        }
        var rReq = createDisabledAcceptanceRadio(
            'Required Cookies',
            'allow'
        );
        var rFunc = createAcceptanceRadio(
            'Functional Cookies',
            'default'
        );
        var rAnal = createAcceptanceRadio(
            'Analytic Cookies',
            'default'
        );
        var rPerf = createAcceptanceRadio(
            'Performance Cookies',
            'default'
        );
        var rTgt = createAcceptanceRadio(
            'Targeting Cookies',
            'default'
        );
        var rCuss = [];
        (function() {
            for (var i = 0; i < options.custom.length; i++) {
                var radio = createAcceptanceRadio(
                    options.custom[i].title,
                    'default'
                );
                var desc = createCustomAcceptanceDescription(
                    options.custom[i].description,
                    i
                );
                rCuss.push({
                    id: options.custom[i].id,
                    radio: radio,
                    desc: desc,
                    index: i
                });
            }
        })()
        mdxYes.onclick = function() {
            localStorage.setItem(
                ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'func',
                rFunc.value
            );
            localStorage.setItem(
                ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'anal',
                rAnal.value
            );
            localStorage.setItem(
                ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'perf',
                rPerf.value
            );
            localStorage.setItem(
                ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'tgt',
                rTgt.value
            );
            (function() {
                for (var i = 0; i < rCuss.length; i++) {
                    localStorage.setItem(
                        ((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-customdnt-' : '--tmcookie-custom-') + rCuss[i].id,
                        rCuss[i].radio.value
                    );
                }
            })()
            mdxNo.onclick();
        }
        mdxscroll.appendChild(rReq.element);
        mdxscroll.appendChild(
            createAcceptanceDescription(
                "These cookies are required for the site to function and can't be disabled",
                'required'
            )
        );
        mdxscroll.appendChild(rFunc.element);
        mdxscroll.appendChild(
            createAcceptanceDescription(
                "These cookies remember stuff like your language, shopping cart, and login details.",
                'functional'
            )
        );
        mdxscroll.appendChild(rAnal.element);
        mdxscroll.appendChild(
            createAcceptanceDescription(
                "These cookies are used to measure site traffic and collect information about site usage.",
                'analytics'
            )
        );
        mdxscroll.appendChild(rPerf.element);
        mdxscroll.appendChild(
            createAcceptanceDescription(
                "These cookies are used to see how well the site performs and sends error reports back to the server.",
                'performance'
            )
        );
        if (options.targeting) {
            mdxscroll.appendChild(rTgt.element);
            mdxscroll.appendChild(
                createAcceptanceDescription(
                    "These cookies are used to track websites you visit and create profiles to show you advertisements and other personalized content.",
                    'targeting'
                )
            );
        }
        (function() {
            for (var i = 0; i < rCuss.length; i++) {
                mdxscroll.appendChild(rCuss[i].radio.element)
                mdxscroll.appendChild(rCuss[i].desc)
            }
        })()
        this.functionalCookiesAllowed = function() {
            if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'func') === 'allow') {
                return true
            } else if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'func') === 'block') {
                return false
            } else {
                if (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' ||
                    window.doNotTrack == 'yes') {
                    return options.dntDefaults.functional
                } else {
                    return options.defaults.functional
                }
            }
        };
        this.customCookieAllowed = function(id) {
            if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-customdnt-' : '--tmcookie-custom-') + id) === 'allow') {
                return true
            } else if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-customdnt-' : '--tmcookie-custom-') + id) === 'block') {
                return false
            } else {
                if (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' ||
                    window.doNotTrack == 'yes') {
                    for (var i = 0; i < options.custom.length; i++) {
                        if (options.custom[i].id == id) {
                            return options.custom[i].dnt
                        }
                    }
                } else {
                    for (var i = 0; i < options.custom.length; i++) {
                        if (options.custom[i].id == id) {
                            return options.custom[i].reg
                        }
                    }
                }
            }
        };
        this.analyticCookiesAllowed = function() {
            if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'anal') === 'allow') {
                return true
            } else if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'anal') === 'block') {
                return false
            } else {
                if (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' ||
                    window.doNotTrack == 'yes') {
                    return options.dntDefaults.analytics
                } else {
                    return options.defaults.analytics
                }
            }
        };
        this.performanceCookiesAllowed = function() {
            if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'perf') === 'allow') {
                return true
            } else if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'perf') === 'block') {
                return false
            } else {
                if (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' ||
                    window.doNotTrack == 'yes') {
                    return options.dntDefaults.performance
                } else {
                    return options.defaults.performance
                }
            }
        };
        this.targetingCookiesAllowed = function() {
            if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'tgt') === 'allow') {
                return true
            } else if (localStorage.getItem(((window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1') ? '--tmcookie-consentdnt-' : '--tmcookie-consent-') + 'tgt') === 'block') {
                return false
            } else {
                if (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' ||
                    window.doNotTrack == 'yes') {
                    return options.dntDefaults.targeting
                } else {
                    return options.defaults.targeting
                }
            }
        };
    };
    return tmc
})().CookieNotice({
    targeting: true,
    defaults: {
        functional: true,
        analytics: true,
        performance: false,
        targeting: false,
    },
    dntDefaults: {
        functional: true,
        analytics: false,
        performance: false,
        targeting: false,
    },
    bg: "#ffffff",
    fg: "#000000",
    custom: [
    ]
});
