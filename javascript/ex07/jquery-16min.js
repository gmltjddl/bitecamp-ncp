function jQuery(e) { return new ElementBox(e) } function ElementBox(e) { if (this.el = [], e.startsWith("<")) this.el[0] = document.createElement(e.substring(1, e.length - 1)); else { let t = document.querySelectorAll(e); for (let n of t) this.el.push(n) } } ElementBox.prototype.append = function (e) { for (let t of this.el) for (let n of e.el) t.appendChild(n.cloneNode(!0)); for (let o of e.el) (null != o.parentElement || void 0 != o.parentElement) && o.parentElement.removeChild(o); return this }, ElementBox.prototype.appendTo = function (e) { for (let t of e.el) for (let n of this.el) t.appendChild(n.cloneNode(!0)); for (let o of this.el) (null != o.parentElement || void 0 != o.parentElement) && o.parentElement.removeChild(o); return this }, ElementBox.prototype.html = function (e) { if (0 != this.el.length) { if (arguments.length > 0) { for (let t of this.el) t.innerHTML = e; return this } this.el[0].innerHTML } }, ElementBox.prototype.on = function (e, t) { for (let n of this.el) n.addEventListener(e, t); return this }, ElementBox.prototype.click = function (e) { return this.on("click", e) }, ElementBox.prototype.val = function (e) { if (0 != this.el.length) { if (!(arguments.length > 0)) return this.el[0].value; for (let t of this.el) t.value = e; return this } }, ElementBox.prototype.submit = function (e) { return this.on("submit", e) }, jQuery.ajax = function (e) { void 0 == e.method && (e.method = "GET"), void 0 == e.async && (e.async = "true"); var t = new XMLHttpRequest; if (t.onreadystatechange = () => { if (4 == t.readyState) { if (200 == t.status) { if (void 0 == e.success) return; let n; n = "json" == e.dataType ? JSON.parse(t.responseText) : t.responseText, e.success(n) } else { if (void 0 == e.error) return; e.error() } } }, t.open(e.method, e.url, e.async), "POST" == e.method) { t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); let n = ""; if (void 0 != e.data && null != e.data) for (let o in e.data) n.length > 0 && (n += "&"), n += o + "=" + window.encodeURIComponent(e.data[o]); t.send(n) } else t.send() }, jQuery.getJSON = function (e, t) { jQuery.ajax({ url: e, dataType: "json", success: t }) }, jQuery.post = function (e, t, n) { jQuery.ajax({ url: e, data: t, method: "POST", success: n }) }; var $ = jQuery;