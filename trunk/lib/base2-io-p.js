eval(function(p,a,c,k,e,r){var b,e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)a[c]=(r[b=e(c)]=k[c])?b:'\\x0';e=function(){return a.join('|')||'^'};k=[function(e){return r[e]}];c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b('+e(c)+')\\b','g'),k[c]);return p}('f 5(_){7 1k=f base2.Namespace(4,{1a:"1k",version:"0.3",1l:"H,Q,1m,Z,h,1n,1b"});1o(4.imports);5 m(){1p f 1q("Not supported.");}7 v=f 10({R:K,11:K,"@(v)":{C:5(a,b){1r{7 c=w.classes["@mozilla.org/"+a];7 d=w.1s[b];6 c.createInstance(d)}1t(1c){1p f 1q(format("Failed to I 12 \'%1\' (%2).",b,1c.message));}},R:5(a){6 5(){netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");6 a.apply(4,1u)}},11:5(c){10.forEach(c,5(a,b){9(S a=="5"){c[b]=v.R(a)}})}}});7 H=10.G({o:"/",chdir:5(a){a=4.T(a);9(!/\\/$/.1v(a)){9(4.k(a)){a+="/"}13{a=a.D(/[^\\/]+$/,"")}}4.o=a},T:5(a,b){9(1u.U==1){b=a;a=4.o}6 H.1d(a,b)},V:m,j:m,k:m,J:m,14:m,15:m,p:m,t:m,l:m},{1d:5(a,b){7 c=/[^\\/]+$/;7 d=/\\/[^\\/]+\\/\\.\\./g;a=17(a||"");b=17(b||"");9(b.charAt(0)=="/"){7 e=""}13{e=a.D(c,"")}e+=b;1e(d.1v(e)){e=e.D(d,"")}6 e}});7 Q=Collection.G({sort:5(){6 4.s(5(a,b,c,d){9(a.k!=b.k){6 a.k?-1:1}13{6 c<d?-1:1}})}},{W:{z:5(a,b,c){4.1a=17(a);4.k=Boolean(b);4.size=1w(c||0)},toString:5(){6 4.1a}}});7 1m=H.G({p:5(a){6 h.p(a)},l:5(a,b){6 h.l(a,b)},"@(L)":{z:5(){4.$q=f L("1x.1y")},V:5(a,b){7 c=4.k(a)?"CopyFolder":"CopyFile";4.$q[c](a,b,true)},J:5(a){6 4.$q.1z(a)},k:5(a){6 4.$q.FolderExists(a)},14:5(a){6 4.$q.CreateFolder(a)},15:5(a,b){7 c=4.k(a)?"MoveFolder":"MoveFile";4.$q[c](a,b)},p:5(a){9(4.k(a)){6 f Z(4.$q.GetFolder(a))}6 4.s(a)},t:5(a){9(4.J(a)){4.$q.DeleteFile(a)}13 9(4.k(a)){4.$q.DeleteFolder(a)}}},"@(w)":{z:5(){4.$u=h.$C()},V:5(a,b){6 4.$u.copyTo(b)},j:5(a){6 4.$u.j()},J:5(a){6 4.j()&&4.$u.J()},k:5(a){6 4.j()&&4.$u.k()},14:5(a){6 4.$u.I(1)},15:5(a,b){6 4.$u.moveTo(b)},p:5(a){9(4.k(a)){6 f Z(4.$u.directoryEntries)}6 4.s(a)},t:5(a){4.$u.t(1A)}},"@(E && !1B.w)":{j:5(a){6 f E.M.1C(a).j()}}},{"@(w)":{A:5(){v.11(4.1D)}}});7 Z=Q.G({"@(L)":{z:5(a){4.s();7 b=a.files;7 c=b.Count();1E(7 i=0;i<c;i++){4.1F(b.item(i))}}},"@(w)":{z:v.R(5(a){4.s();7 b=a.QueryInterface(w.1s.nsIDirectoryEnumerator);1e(b.hasMoreElements()){4.1F(b.nextFile)}})}},{"@(L)":{I:5(a,b){6 f 4.W(b.Name,b.Type|16,b.Size)}},"@(w)":{I:5(a,b){6 f 4.W(b.leafName,b.k(),b.fileSize)}}});7 h=10.G({z:5(a,b){assignID(4);4.o=h.T(a);9(b)4.X(b)},x:0,o:"",B:5(){1f h.18[4.1G];1f 4.$8;4.x=h.19},X:5(a){4.x=a||h.N;h.18[4.1G]=4},j:m,p:m,t:m,l:m,"@(L)":{z:5(a,b){4.$q=f L("1x.1y");4.s(a,b)},B:5(){9(4.$8){4.$8.Close();4.s()}},j:5(){6 4.$q.1z(4.o)},X:5(a){9(!4.$8){4.s(a);1g(4.x){O h.N:9(!4.j()){4.x=h.19;F}4.$8=4.$q.1H(4.o,1);F;O h.P:4.$8=4.$q.1H(4.o,2,-1,0);F}}},p:5(){6 4.$8.ReadAll()},t:5(){6 4.$q.GetFile(4.o).Delete()},l:5(a){4.$8.Write(a||"")}},"@(w)":{z:5(a,b){4.$u=h.$C();4.s(a,b)},$A:5(){7 a=4.$u;1r{a.1I(4.o)}1t(1c){a.1I(1J.1K);a.setRelativeDescriptor(a,4.o)}6 a},B:5(){9(4.$8){9(4.x==h.P)4.$8.flush();4.$8.B();4.s()}},j:5(){6 4.$A().j()},X:5(a){9(!4.$8){4.s(a);7 b=4.$A();1g(4.x){O h.N:9(!b.j()){4.x=h.19;F}7 c=v.C("1L/1h-input-8;1","nsIFileInputStream");c.A(b,0x01,1M,Y);4.$8=v.C("scriptableinputstream;1","nsIScriptableInputStream");4.$8.A(c);F;O h.P:9(!b.j())b.I(0,0664);4.$8=v.C("1L/1h-output-8;1","nsIFileOutputStream");4.$8.A(b,0x20|0x02,1M,Y);F}}},p:5(){6 4.$8.p(4.$8.available())},t:5(){4.$A().t(1A)},l:5(a){9(a==Y)a="";4.$8.l(a,a.U)}},"@(E && !1B.w)":{B:5(){9(4.$8){4.$8.B();4.s()}},j:5(){7 a=f E.M.1C(4.o);6 a.j()},X:5(a){9(!4.$8){4.s(a);1g(4.x){O h.N:7 b=f E.M.FileReader(4.o);4.$8=f E.M.BufferedReader(b);F;O h.P:7 b=f E.M.FileOutputStream(4.o);4.$8=f E.M.PrintStream(b);F}}},p:5(){7 a=[];7 b,i=0;1e((b=4.$8.readLine())!=Y){a[i++]=b}6 a.1i("\\r\\n")},l:5(a){4.$8.print(a||"")}}},{19:0,N:1,P:2,18:{},1N:5(a,b){7 c=4.p(a);4.l(b||(a+".1N"),c);6 c},closeAll:5(){7 a=4.18;1E(7 i in a)a[i].B()},j:5(a){6 f 4(a).j()},T:5(a){7 b=/\\//g;7 c=/\\\\/g;7 d=/[^\\/]+$/;a=17(a||"").D(c,"/");7 e=1J.1K.D(c,"/").D(d,"");e=H.1d(e,a).slice(1);6 decodeURIComponent(e.D(b,"\\\\"))},p:5(a){7 b=f 4(a,4.N);7 c=b.x?b.p():"";b.B();6 c},t:5(a){7 b=f 4(a);b.t()},l:5(a,b){7 c=f 4(a,4.P);c.l(b);c.B()},"@(w)":{A:5(){v.11(4.1D);4.$C=v.R(5(){6 v.C("1h/local;1","u")})}}});7 y="#"+1w(f Date);7 1n=H.G({z:5(d){4[y]=5(c){c=4.T(c);6 reduce(c.1j("/"),5(a,b){9(a&&b)a=a[b];6 a},d)}},j:5(a){6 4[y](a)!==undefined},J:5(a){6 S 4[y](a)=="string"},k:5(a){6 S 4[y](a)=="12"},V:5(a,b){7 c=4[y](a);4.l(b,JSON.V(c))},14:5(a){4.l(a,{})},15:5(a,b){7 c=4[y](a);4.l(b,c);4.t(a)},p:5(a){7 b=4[y](a);6 S b=="12"?f 1b(b):b||""},t:5(a){a=a.D(/\\/$/,"").1j("/");7 b=a.1O(a.U-1,1);7 c=4[y](a.1i("/"));9(c)1f c[b]},l:5(a,b){a=a.1j("/");7 c=a.1O(a.U-1,1);7 d=4[y](a.1i("/"));assert(d,"Q not found.");6 d[c]=b||""}});7 1b=Q.G(Y,{I:5(a,b){9(!instanceOf(b,4.W)){b=f 4.W(a,S b=="12",b&&b.U)}6 b}});1o(4.1l)};',[],206,'||||this|function|return|var|stream|if||||||new||LocalFile||exists|isDirectory|write|NOT_SUPPORTED||path|read|fso||base|remove|nsILocalFile|XPCOM|Components|mode|FETCH|constructor|init|close|createObject|replace|java|break|extend|FileSystem|create|isFile||ActiveXObject|io|READ|case|WRITE|Directory|privelegedMethod|typeof|makepath|length|copy|Item|open|null|LocalDirectory|Base|privelegedObject|object|else|mkdir|move||String|opened|CLOSED|name|JSONDirectory|error|resolve|while|delete|switch|file|join|split|IO|exports|LocalFileSystem|JSONFileSystem|eval|throw|Error|try|interfaces|catch|arguments|test|Number|Scripting|FileSystemObject|FileExists|false|global|File|prototype|for|store|base2ID|OpenTextFile|initWithPath|location|pathname|network|00004|backup|splice'.split('|'),0,{}));