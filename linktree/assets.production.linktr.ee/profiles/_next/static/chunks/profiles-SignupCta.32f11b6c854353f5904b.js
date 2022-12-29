"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8291], {
        26198: function(n, t, e) {
            e.r(t);
            var i, o, r = e(79056),
                a = e(52209),
                l = e(67294),
                s = e(21943),
                c = e(26793),
                u = e(46491),
                x = e(81019),
                d = e(94736),
                f = e(79970),
                g = e(85893),
                h = (0, s.keyframes)(i || (i = (0, a.Z)(["\n  4.16% {\n    transform: translateY(4px);\n  }\n\n  8.33% {\n    transform: translateY(-3px);\n  }\n\n  12.48% {\n    transform: translateY(2px);\n  }\n\n  16.66% {\n    transform: translateY(-1px);\n  }\n\n  20.81% {\n    transform: translateY(1px);\n  }\n\n  25% {\n    transform: translateY(0);\n  }\n"]))),
                m = (0, s.styled)(s.Flex)(o || (o = (0, a.Z)(["\n  animation: ", " 4s linear infinite;\n  &:hover,\n  &:active {\n    animation: unset;\n  }\n"])), h);
            t.default = function(n) {
                var t = n.repeatVisits,
                    e = (0, c.$)("SignupCta").t,
                    i = (0, l.useState)(!0),
                    o = i[0],
                    a = i[1],
                    h = (0, d.useStorage)("browserId", ""),
                    p = (0, r.Z)(h, 1)[0],
                    C = (0, u.EG)(),
                    v = C.trackEvent,
                    j = C.account,
                    L = String(null === j || void 0 === j ? void 0 : j.uuid),
                    k = String(null === j || void 0 === j ? void 0 : j.username),
                    S = (0, l.useMemo)((function() {
                        return (0, x.Pv)(p)
                    }), [p]),
                    b = (0, l.useMemo)((function() {
                        return e(S)
                    }), [e, S]),
                    w = (0, l.useMemo)((function() {
                        return (0, x.kY)(p, k)
                    }), [p, k, L]);
                (0, l.useEffect)((function() {
                    var n = setTimeout((function() {
                        v("ProfileSignupCtaViewed", {
                            visits: t,
                            callToActionText: b
                        })
                    }), 500);
                    return function() {
                        return clearTimeout(n)
                    }
                }), [b]);
                var T = (0, l.useCallback)((function() {
                        v("ProfileSignupCtaClicked", {
                            callToActionText: b,
                            callToActionLink: w
                        }), window.location.href = "".concat(window.location.protocol, "//").concat(w), a(!1)
                    }), [b, a]),
                    _ = (0, l.useCallback)((function() {
                        v("ProfileSignupCtaDismissed", {
                            callToActionText: b
                        }), a(!1)
                    }), [b, a]);
                return o ? (0, g.jsxs)(s.Flex, {
                    position: "fixed",
                    "data-testid": "SignupCta",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "auto",
                    paddingY: ["x6", "x8"],
                    background: "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                    fontFamily: "secondary",
                    zIndex: 1e3,
                    children: [(0, g.jsxs)(m, {
                        backgroundColor: "black",
                        boxShadow: "0px 12px 16px rgba(10, 11, 13, 0.12)",
                        borderRadius: "x6",
                        height: "x12",
                        paddingX: "x4",
                        marginBottom: "x2",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "auto",
                        children: [(0, g.jsx)(s.Button, {
                            type: "button",
                            height: "100%",
                            marginRight: "x2",
                            onClick: T,
                            children: (0, g.jsxs)(s.Flex, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [(0, g.jsx)(f.R, {
                                    height: "16px",
                                    type: "white",
                                    title: "",
                                    description: ""
                                }), (0, g.jsx)(s.Box, {
                                    marginLeft: "x2",
                                    marginRight: "x1",
                                    children: (0, g.jsx)(s.Text, {
                                        fontWeight: "normal",
                                        level: "p5",
                                        color: "palette.slate8",
                                        children: e("linktreeUrl")
                                    })
                                }), (0, g.jsx)(s.Text, {
                                    fontWeight: "normal",
                                    level: "p5",
                                    color: "palette.slate6",
                                    children: e("yourNameHereSlug")
                                })]
                            })
                        }), (0, g.jsx)(s.Button, {
                            padding: "x1",
                            onClick: _,
                            children: (0, g.jsx)(s.Icon, {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 10 10",
                                color: "palette.slate6",
                                children: (0, g.jsx)("path", {
                                    d: "M0.64063 8.19141C0.341802 8.49023 0.330083 9.0293 0.64649 9.3457C0.962896 9.66211 1.50196 9.65039 1.80079 9.35742L4.98829 6.16992L8.16993 9.35156C8.48047 9.66211 9.00782 9.66211 9.32422 9.33984C9.63477 9.02344 9.64063 8.49609 9.33008 8.19141L6.14844 5.00977L9.33008 1.82227C9.64063 1.51758 9.64063 0.984375 9.32422 0.673828C9.00782 0.357422 8.48047 0.357422 8.16993 0.662109L4.98829 3.84375L1.80079 0.65625C1.50196 0.363281 0.962896 0.351562 0.64649 0.667969C0.335943 0.984375 0.341802 1.52344 0.64063 1.82227L3.82813 5.00977L0.64063 8.19141Z"
                                })
                            })
                        })]
                    }), (0, g.jsx)(s.Box, {
                        children: (0, g.jsx)(s.Text, {
                            fontWeight: "normal",
                            level: "p5",
                            color: "white",
                            children: b
                        })
                    })]
                }) : null
            }
        }
    }
]);