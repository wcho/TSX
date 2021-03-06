//// [jsx.ts]
/// <jsx namespace={ns} />

interface AProps {
	href: string;
}

interface DivProps {
	className?: string;
}

interface DivElement extends DivProps {
}

function div(props: DivProps): DivElement {
	return props;
}

class a {
	constructor(props: AProps) {
	}
}

module ns {
	export class b {
	}
}

module ns2 {
	export class i {
	}
}

// Creates element from factory
var elm = <div className="cls" />;

// Creates element from class
var elm2 = <a href="http://rreverser.com/" />;

// Creates element from auto-namespaced name
var b = <b>text</b>;

// Local symbol doesn't override auto-namespaced name
var b2 = <b>another text</b>;

// Creates element from manually namespaced name
var i = <ns2.i>quite different text</ns2.i>;

// Creates complicated structures of nested elements
var html = <div
data-numbers="
1
2
" x={0} yes>
	<b>{this.title}</b>
	Current time{/* in milliseconds */} is{} <ns2.i>[ {Date.now()} ]</ns2.i>
</div>;

// Works fine with type casts
var smth = <ns2.i><any><b>text</b>;

//// [jsx.js]
/// <jsx namespace={ns} />
function div(props) {
    return props;
}
var a = (function () {
    function a(props) {
    }
    return a;
})();
var ns;
(function (ns) {
    var b = (function () {
        function b() {
        }
        return b;
    })();
    ns.b = b;
})(ns || (ns = {}));
var ns2;
(function (ns2) {
    var i = (function () {
        function i() {
        }
        return i;
    })();
    ns2.i = i;
})(ns2 || (ns2 = {}));
// Creates element from factory
var elm = div({ className: "cls" });
// Creates element from class
var elm2 = new a({ href: "http://rreverser.com/" });
// Creates element from auto-namespaced name
var b = new ns.b(null, "text");
// Local symbol doesn't override auto-namespaced name
var b2 = new ns.b(null, "another text");
// Creates element from manually namespaced name
var i = new ns2.i(null, "quite different text");
// Creates complicated structures of nested elements
var html = div({
    "data-numbers": "\n\
1\n\
2\n\
",
    x: 0,
    yes: true
}, "\n\
\t", new ns.b(null, this.title), "\n\
\tCurrent time" /* in milliseconds */, " is", " ", new ns2.i(null, "[ ", Date.now(), " ]"), "\n\
");
// Works fine with type casts
var smth = new ns.b(null, "text");
