const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

const hira = [
['あ','a'],['い','i'],['う','u'],['え','e'],['お','o'],
['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko'],
['さ','sa'],['し','shi'],['す','su'],['せ','se'],['そ','so'],
['た','ta'],['ち','chi'],['つ','tsu'],['て','te'],['と','to'],
['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no'],
['は','ha'],['ひ','hi'],['ふ','fu'],['へ','he'],['ほ','ho'],
['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo'],
['や','ya'],['',''],['ゆ','yu'],['',''],['よ','yo'],
['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro'],
['わ','wa'],['',''],['',''],['',''],['を','wo'],['ん','n']
];
const kata = [
['ア','a'],['イ','i'],['ウ','u'],['エ','e'],['オ','o'],
['カ','ka'],['キ','ki'],['ク','ku'],['ケ','ke'],['コ','ko'],
['サ','sa'],['シ','shi'],['ス','su'],['セ','se'],['ソ','so'],
['タ','ta'],['チ','chi'],['ツ','tsu'],['テ','te'],['ト','to'],
['ナ','na'],['ニ','ni'],['ヌ','nu'],['ネ','ne'],['ノ','no'],
['ハ','ha'],['ヒ','hi'],['フ','fu'],['ヘ','he'],['ホ','ho'],
['マ','ma'],['ミ','mi'],['ム','mu'],['メ','me'],['モ','mo'],
['ヤ','ya'],['',''],['ユ','yu'],['',''],['ヨ','yo'],
['ラ','ra'],['リ','ri'],['ル','ru'],['レ','re'],['ロ','ro'],
['ワ','wa'],['',''],['',''],['',''],['ヲ','wo'],['ン','n']
];
const extras = {
 voiced:[['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go'],['ざ','za'],['じ','ji'],['ず','zu'],['ぜ','ze'],['ぞ','zo'],['だ','da'],['ぢ','ji'],['づ','zu'],['で','de'],['ど','do'],['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo'],['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']],
 yoon:[['きゃ','kya'],['きゅ','kyu'],['きょ','kyo'],['しゃ','sha'],['しゅ','shu'],['しょ','sho'],['ちゃ','cha'],['ちゅ','chu'],['ちょ','cho'],['にゃ','nya'],['にゅ','nyu'],['にょ','nyo'],['ひゃ','hya'],['ひゅ','hyu'],['ひょ','hyo'],['みゃ','mya'],['みゅ','myu'],['みょ','myo'],['りゃ','rya'],['りゅ','ryu'],['りょ','ryo'],['ぎゃ','gya'],['ぎゅ','gyu'],['ぎょ','gyo'],['じゃ','ja'],['じゅ','ju'],['じょ','jo'],['びゃ','bya'],['びゅ','byu'],['びょ','byo'],['ぴゃ','pya'],['ぴゅ','pyu'],['ぴょ','pyo']]
};

const vocab = [["日常","おはよう","おはよう","ohayou","早安","おはようございます。"],["日常","こんにちは","こんにちは","konnichiwa","你好／午安","こんにちは、元気ですか。"],["日常","こんばんは","こんばんは","konbanwa","晚上好","こんばんは。今日は寒いですね。"],["日常","ありがとう","ありがとう","arigatou","謝謝","手伝ってくれて、ありがとう。"],["日常","すみません","すみません","sumimasen","不好意思／對不起","すみません、駅はどこですか。"],["人物","私","わたし","watashi","我","私は台湾から来ました。"],["人物","友達","ともだち","tomodachi","朋友","友達と映画を見ます。"],["人物","先生","せんせい","sensei","老師","先生に質問します。"],["人物","家族","かぞく","kazoku","家人／家庭","家族は五人です。"],["時間","今日","きょう","kyou","今天","今日は休みです。"],["時間","明日","あした","ashita","明天","明日、東京へ行きます。"],["時間","昨日","きのう","kinou","昨天","昨日は雨でした。"],["時間","今","いま","ima","現在","今、何時ですか。"],["時間","朝","あさ","asa","早上","朝ご飯を食べます。"],["時間","夜","よる","yoru","晚上","夜に勉強します。"],["場所","学校","がっこう","gakkou","學校","学校は駅の近くです。"],["場所","会社","かいしゃ","kaisha","公司","会社で働いています。"],["場所","駅","えき","eki","車站","駅まで歩きます。"],["場所","空港","くうこう","kuukou","機場","空港へ行くバスです。"],["場所","ホテル","ホテル","hoteru","飯店","ホテルを予約しました。"],["飲食","水","みず","mizu","水","水をください。"],["飲食","ご飯","ごはん","gohan","飯／餐","ご飯を食べましょう。"],["飲食","肉","にく","niku","肉","肉は食べますか。"],["飲食","魚","さかな","sakana","魚","魚料理が好きです。"],["飲食","野菜","やさい","yasai","蔬菜","野菜をたくさん食べます。"],["飲食","美味しい","おいしい","oishii","好吃","このラーメンは美味しいです。"],["交通","電車","でんしゃ","densha","電車","電車で大阪へ行きます。"],["交通","車","くるま","kuruma","汽車","車を運転します。"],["交通","自転車","じてんしゃ","jitensha","腳踏車","自転車で学校へ行きます。"],["交通","切符","きっぷ","kippu","車票","切符を二枚ください。"],["旅遊","旅行","りょこう","ryokou","旅行","日本を旅行したいです。"],["旅遊","地図","ちず","chizu","地圖","地図を見せてください。"],["旅遊","写真","しゃしん","shashin","照片","写真を撮ってもいいですか。"],["旅遊","観光","かんこう","kankou","觀光","京都を観光します。"],["購物","値段","ねだん","nedan","價格","値段はいくらですか。"],["購物","安い","やすい","yasui","便宜","これは安いですね。"],["購物","高い","たかい","takai","昂貴／高","少し高いです。"],["購物","買う","かう","kau","買","お土産を買います。"],["購物","現金","げんきん","genkin","現金","現金で払います。"],["工作","仕事","しごと","shigoto","工作","仕事は忙しいです。"],["工作","会議","かいぎ","kaigi","會議","午後に会議があります。"],["工作","資料","しりょう","shiryou","資料","資料を確認してください。"],["工作","連絡","れんらく","renraku","聯絡","後で連絡します。"],["工作","予定","よてい","yotei","預定／行程","今日の予定を教えてください。"],["感情","楽しい","たのしい","tanoshii","開心／有趣","旅行はとても楽しいです。"],["感情","嬉しい","うれしい","ureshii","高興","会えて嬉しいです。"],["感情","悲しい","かなしい","kanashii","悲傷","そのニュースは悲しいです。"],["感情","心配","しんぱい","shinpai","擔心","心配しないでください。"],["健康","病院","びょういん","byouin","醫院","病院へ行きます。"],["健康","薬","くすり","kusuri","藥","この薬を飲んでください。"],["健康","痛い","いたい","itai","痛","頭が痛いです。"],["健康","元気","げんき","genki","有精神／健康","お元気ですか。"],["自然","山","やま","yama","山","富士山に登りたいです。"],["自然","海","うみ","umi","海","夏は海へ行きます。"],["自然","雨","あめ","ame","雨","今日は雨が降っています。"],["自然","雪","ゆき","yuki","雪","北海道は雪が多いです。"],["動詞","行く","いく","iku","去","コンビニへ行きます。"],["動詞","来る","くる","kuru","來","友達が家に来ます。"],["動詞","見る","みる","miru","看","映画を見ます。"],["動詞","聞く","きく","kiku","聽／問","音楽を聞きます。"],["動詞","話す","はなす","hanasu","說","日本語で話しましょう。"],["動詞","読む","よむ","yomu","讀","本を読みます。"],["動詞","書く","かく","kaku","寫","名前を書いてください。"],["動詞","食べる","たべる","taberu","吃","寿司を食べます。"],["動詞","飲む","のむ","nomu","喝","コーヒーを飲みます。"],["形容詞","大きい","おおきい","ookii","大的","大きい家ですね。"],["形容詞","小さい","ちいさい","chiisai","小的","小さい犬がいます。"],["形容詞","新しい","あたらしい","atarashii","新的","新しいスマホを買いました。"],["形容詞","古い","ふるい","furui","舊的","この寺はとても古いです。"],["形容詞","面白い","おもしろい","omoshiroi","有趣","この本は面白いです。"],["數量","一つ","ひとつ","hitotsu","一個","りんごを一つください。"],["數量","二人","ふたり","futari","兩個人","二人で行きます。"],["數量","百","ひゃく","hyaku","一百","百円です。"],["數量","千","せん","sen","一千","千円札があります。"],["科技","携帯電話","けいたいでんわ","keitai denwa","手機","携帯電話を忘れました。"],["科技","パソコン","パソコン","pasokon","電腦","パソコンを使います。"],["科技","インターネット","インターネット","intaanetto","網路","インターネットにつながりません。"]];

const grammar = [
{lv:'N5',t:'01｜句子的核心：です／ます',p:'名詞・な形容詞 + です／動詞 + ます',d:'建立日文禮貌體的骨架。です用於名詞與形容詞判斷，ます用於動詞。日文常省略能由語境理解的主語。',e:[['私は会社員です。','我是公司職員。'],['毎日、日本語を勉強します。','每天學日文。']]},
{lv:'N5',t:'02｜助詞 は・が・を',p:'A は Bです／N が…／N を V',d:'は提示主題；が標示焦點、存在或能力等主語；を標示他動詞直接受詞。不要把「は＝主詞」死背。',e:[['私は日本語が好きです。','我喜歡日文。'],['本を読みます。','讀書。']]},
{lv:'N5',t:'03｜場所與方向：に・へ・で',p:'時間/目的地 に｜方向 へ｜動作場所/手段 で',d:'に常標示到達點、存在點、具體時間；へ強調方向；で標示動作發生場所或手段。',e:[['七時に起きます。','七點起床。'],['電車で会社へ行きます。','搭電車去公司。']]},
{lv:'N5',t:'04｜存在與所有：ある・いる',p:'場所に N が あります／います',d:'無生命物用あります；人與動物用います。所有關係也常用「Nには…があります」。',e:[['机の上に本があります。','桌上有書。'],['公園に子どもがいます。','公園裡有小孩。']]},
{lv:'N5',t:'05｜動詞現在、過去與否定',p:'ます／ません／ました／ませんでした',d:'掌握禮貌體四格變化。日文非過去式可表示現在習慣與未來安排。',e:[['昨日、映画を見ました。','昨天看了電影。'],['今日は働きません。','今天不工作。']]},
{lv:'N5',t:'06｜形容詞：い形／な形',p:'高い→高くない／静かだ→静かではない',d:'い形容詞本身會活用；な形容詞修飾名詞時接な，句尾則使用です／だ系統。',e:[['この店は安くて美味しいです。','這家店便宜又好吃。'],['ここは静かな町です。','這裡是安靜的城鎮。']]},
{lv:'N5',t:'07｜て形入門',p:'Vて + ください／います／もいいです',d:'て形是日文最重要的連接形式，可連接動作，也可接請求、進行、許可等文型。',e:[['ここに名前を書いてください。','請在這裡寫名字。'],['今、雨が降っています。','現在正在下雨。']]},
{lv:'N5',t:'08｜希望、邀請與意願',p:'Vたい／Vませんか／Vましょう',d:'たい表自己的希望；ませんか是較柔和邀請；ましょう表示「一起～吧」。',e:[['日本へ行きたいです。','我想去日本。'],['一緒に食べませんか。','要不要一起吃？']]},
{lv:'N4',t:'09｜普通形與口語',p:'行く・行かない・行った・行かなかった',d:'普通形是從N4開始所有複句的核心。動詞、い形、な形、名詞各有不同接法。',e:[['明日行くと思います。','我想明天會去。'],['彼は来ないと言いました。','他說不會來。']]},
{lv:'N4',t:'10｜能力與可能',p:'可能形／ことができる',d:'五段動詞改 e 段＋る；一段動詞去る＋られる。口語中一段動詞常出現「ら抜き」，正式學習仍以標準形為主。',e:[['日本語が話せます。','會說日文。'],['ここで写真を撮ることができます。','這裡可以拍照。']]},
{lv:'N4',t:'11｜經驗與完成：たことがある',p:'Vた + ことがある／Vてしまう',d:'たことがある表過去經驗；てしまう表動作完成，也常帶遺憾、意外語氣。',e:[['京都へ行ったことがあります。','去過京都。'],['財布を忘れてしまいました。','不小心忘了錢包。']]},
{lv:'N4',t:'12｜條件：と・たら・なら・ば',p:'Vると／Vたら／Nなら／Vば',d:'と偏向必然結果；たら用途最廣；なら根據前提提出判斷或建議；ば偏邏輯條件。',e:[['春になると、暖かくなります。','春天一到就變暖。'],['時間があったら、行きます。','有時間的話就去。']]},
{lv:'N4',t:'13｜授受：あげる・くれる・もらう',p:'AがBに…てあげる／…てくれる／…てもらう',d:'日文以說話者視角區分「給出去」「別人為我方做」「我方接受」。理解內外群體比直譯更重要。',e:[['友達が手伝ってくれました。','朋友幫了我。'],['先生に教えてもらいました。','我請老師教我／得到老師指導。']]},
{lv:'N4',t:'14｜義務、禁止與不必',p:'なければならない／てはいけない／なくてもいい',d:'三組高頻規範文型。口語常縮約成「なきゃ」「ちゃだめ」等。',e:[['薬を飲まなければなりません。','必須吃藥。'],['明日は来なくてもいいです。','明天不來也可以。']]},
{lv:'N3',t:'15｜原因、目的與結果',p:'ので／ために／ように／結果',d:'ので語氣較客觀柔和；ために可表目的或原因；ように常接非意志性目標，例如能力、狀態改變。',e:[['雨なので、出かけません。','因為下雨，所以不出門。'],['忘れないようにメモします。','為了不要忘記而做筆記。']]},
{lv:'N3',t:'16｜樣態、推測與傳聞',p:'そうだ／ようだ／らしい／みたいだ',d:'そうだ有「看起來」與「聽說」兩套接續；ようだ是依據情況判斷；らしい可表傳聞或典型性；みたいだ較口語。',e:[['雨が降りそうです。','看起來要下雨。'],['彼は来ないらしいです。','聽說他不會來。']]},
{lv:'N3',t:'17｜限制與範圍',p:'しか～ない／だけ／ばかり／ほど',d:'しか必須與否定呼應，表示「只有」；ばかり可表偏重、剛做完等；ほど可表程度或比較。',e:[['千円しかありません。','只有一千日圓。'],['彼はゲームばかりしています。','他老是在打電動。']]},
{lv:'N3',t:'18｜逆接與讓步',p:'のに／ても／ながら／くせに',d:'のに表示與預期相反；ても表示即使；ながら可表同時或逆接；くせに帶責難語氣，使用時要注意人際關係。',e:[['勉強したのに、忘れました。','明明學了卻忘了。'],['雨でも行きます。','即使下雨也去。']]},
{lv:'N3',t:'19｜被動、使役、使役被動',p:'Vられる／Vさせる／Vさせられる',d:'被動不只描述受動，也常形成「受害被動」；使役可表命令、許可；使役被動常表被迫。',e:[['先生に褒められました。','被老師稱讚了。'],['母は子どもに野菜を食べさせます。','母親讓孩子吃蔬菜。']]},
{lv:'N2',t:'20｜時間關係的高階表達',p:'うちに／間に／最中に／たびに／次第',d:'精細表達「趁著」「期間某一點」「正在～之中」「每當」「一…就…」。接續形式是N2重點。',e:[['日本にいるうちに、京都へ行きたいです。','想趁人在日本時去京都。'],['分かり次第、ご連絡します。','一知道就聯絡您。']]},
{lv:'N2',t:'21｜判斷、立場與評價',p:'わけだ／わけではない／に違いない／はずだ',d:'わけだ表示由前文推導出的合理結論；わけではない否定部分推論；に違いない是強推斷；はずだ依據已知資訊推測。',e:[['十年住んでいるから、日本語が上手なわけです。','住了十年，難怪日文好。'],['嫌いなわけではありません。','並不是討厭。']]},
{lv:'N2',t:'22｜書面連接與正式表達',p:'に関して／に対して／において／を通じて',d:'新聞、商務、論說文高頻。要學習語義差異及名詞修飾形式，如「に関するN」。',e:[['環境問題に関して調査します。','針對環境問題進行調查。'],['会議は東京において開催されます。','會議將於東京舉行。']]},
{lv:'N1',t:'23｜強調與限定的高階文型',p:'にほかならない／にすぎない／こそ／さえ',d:'用於論述、演說與正式文章。核心是控制語氣強度：斷定、限定、焦點與極端例示。',e:[['成功は努力の結果にほかなりません。','成功正是努力的結果。'],['これは一例にすぎません。','這只不過是一個例子。']]},
{lv:'N1',t:'24｜逆接、無關與不可避免',p:'にもかかわらず／をものともせず／にかかわらず／ざるを得ない',d:'N1常考書面逆接與讓步。ざるを得ない表示「不得不」，語氣比なければならない更像因情勢所迫。',e:[['雨にもかかわらず、多くの人が集まりました。','儘管下雨，仍聚集許多人。'],['計画を変更せざるを得ません。','不得不變更計畫。']]},
{lv:'N1',t:'25｜N1 論述：文脈、語感與省略',p:'ものの／とはいえ／かたわら／を皮切りに／極端な省略',d:'最高階不是只背句型，而是判斷文體、搭配與作者立場。本章以篇章閱讀、近義文型比較、句尾省略與新聞書面語為核心。',e:[['便利になったものの、問題も残っています。','雖然變方便了，問題仍然存在。'],['東京公演を皮切りに、全国を回ります。','以東京公演為開端，展開全國巡演。']]}
];

const dialogues = [
{t:'初次見面',lines:[['A','はじめまして。私は林です。','Hajimemashite. Watashi wa Hayashi desu.','初次見面，我姓林。'],['B','はじめまして。田中です。よろしくお願いします。','Hajimemashite. Tanaka desu. Yoroshiku onegai shimasu.','初次見面，我是田中，請多指教。'],['A','こちらこそ、よろしくお願いします。','Kochira koso, yoroshiku onegai shimasu.','我才要請您多多指教。']]},
{t:'餐廳點餐',lines:[['A','すみません、注文をお願いします。','Sumimasen, chuumon o onegai shimasu.','不好意思，我要點餐。'],['B','はい、何になさいますか。','Hai, nani ni nasaimasu ka.','好的，您要點什麼？'],['A','ラーメンを一つと、餃子をお願いします。','Raamen o hitotsu to, gyouza o onegai shimasu.','一碗拉麵和一份餃子，麻煩了。']]},
{t:'問路',lines:[['A','すみません、東京駅はどこですか。','Sumimasen, Toukyou-eki wa doko desu ka.','請問東京車站在哪裡？'],['B','この道をまっすぐ行って、二つ目の信号を右に曲がってください。','Kono michi o massugu itte, futatsume no shingou o migi ni magatte kudasai.','沿這條路直走，在第二個紅綠燈右轉。'],['A','ありがとうございます。','Arigatou gozaimasu.','謝謝。']]},
{t:'購物',lines:[['A','これはいくらですか。','Kore wa ikura desu ka.','這個多少錢？'],['B','三千五百円です。','Sanzen gohyaku-en desu.','3,500 日圓。'],['A','試着してもいいですか。','Shichaku shite mo ii desu ka.','可以試穿嗎？']]},
{t:'飯店入住',lines:[['A','予約している林です。','Yoyaku shite iru Hayashi desu.','我是有預約的林先生／小姐。'],['B','お名前を確認いたします。','Onamae o kakunin itashimasu.','我確認一下您的姓名。'],['A','チェックインをお願いします。','Chekkuin o onegai shimasu.','麻煩幫我辦理入住。']]},
{t:'搭電車',lines:[['A','この電車は京都に行きますか。','Kono densha wa Kyouto ni ikimasu ka.','這班電車會到京都嗎？'],['B','いいえ、次の快速に乗ってください。','Iie, tsugi no kaisoku ni notte kudasai.','不會，請搭下一班快速列車。'],['A','分かりました。','Wakarimashita.','我知道了。']]},
{t:'職場',lines:[['A','今日の会議は何時からですか。','Kyou no kaigi wa nanji kara desu ka.','今天的會議幾點開始？'],['B','午後二時からです。資料を先に確認してください。','Gogo niji kara desu. Shiryou o saki ni kakunin shite kudasai.','下午兩點。請先確認資料。'],['A','承知しました。','Shouchi shimashita.','了解。']]},
{t:'電話',lines:[['A','もしもし、田中さんはいらっしゃいますか。','Moshi moshi, Tanaka-san wa irasshaimasu ka.','喂，請問田中先生／小姐在嗎？'],['B','申し訳ありません。今、席を外しております。','Moushiwake arimasen. Ima, seki o hazushite orimasu.','很抱歉，他／她現在不在座位上。'],['A','では、また後でお電話します。','Dewa, mata ato de odenwa shimasu.','那我稍後再打。']]},
{t:'身體不舒服',lines:[['A','どうしましたか。','Dou shimashita ka.','怎麼了？'],['B','頭が痛くて、少し熱があります。','Atama ga itakute, sukoshi netsu ga arimasu.','頭痛，而且有點發燒。'],['A','無理をしないで、休んでください。','Muri o shinaide, yasunde kudasai.','不要勉強，請休息。']]},
{t:'交朋友',lines:[['A','休みの日は何をしていますか。','Yasumi no hi wa nani o shite imasu ka.','休假時都做什麼？'],['B','ジムに行ったり、映画を見たりします。','Jimu ni ittari, eiga o mitari shimasu.','會去健身房、看電影之類的。'],['A','私も映画が好きです。','Watashi mo eiga ga suki desu.','我也喜歡電影。']]},
{t:'機場',lines:[['A','搭乗口はどこですか。','Toujouguchi wa doko desu ka.','登機口在哪裡？'],['B','二階の十五番ゲートです。','Nikai no juugoban geeto desu.','在二樓 15 號登機門。'],['A','何時までに行けばいいですか。','Nanji made ni ikeba ii desu ka.','幾點前到比較好？']]},
{t:'緊急情況',lines:[['A','助けてください！','Tasukete kudasai!','請幫幫我！'],['B','どうしましたか。','Dou shimashita ka.','發生什麼事？'],['A','財布をなくしました。警察署はどこですか。','Saifu o nakushimashita. Keisatsusho wa doko desu ka.','我把錢包弄丟了。警察局在哪裡？']]}
];

const jlptSeeds = {
N5:[
['「水」の読み方は？',['みず','みち','みせ','みみ'],0,'水＝みず。'],
['毎朝、七時___起きます。',['を','に','で','へ'],1,'具體時間點使用助詞「に」。'],
['私はパン___食べます。',['が','を','に','で'],1,'他動詞「食べる」的受詞用「を」。'],
['昨日、映画を___。',['見ます','見ました','見ません','見るです'],1,'「昨日」要求過去式，禮貌體為見ました。'],
['この本は___です。',['おもしろい','おもしろく','おもしろな','おもしろ'],0,'い形容詞可直接接です。'],
['「ありがとう」最接近哪個意思？',['對不起','再見','謝謝','沒關係'],2,'ありがとう＝謝謝。'],
['駅___電車に乗ります。',['で','を','が','の'],0,'動作發生場所可用「で」。'],
['猫が二匹___。',['あります','います','ですか','します'],1,'動物的存在使用「います」。'],
['「大きい」的相反詞是？',['小さい','高い','新しい','長い'],0,'大きい↔小さい。'],
['日本___行きたいです。',['を','へ','が','と'],1,'移動方向可用「へ」。']
],
N4:[
['日本へ行ったことが___。',['います','あります','します','なります'],1,'經驗文型：Vたことがあります。'],
['雨が降ったら、家に___。',['います','ありました','いませんか','いてです'],0,'「如果下雨，就待在家」用います。'],
['ここで写真を撮って___ですか。',['もいい','はいけない','くださいない','みたい'],0,'許可：Vてもいいですか。'],
['先生が私に本を___。',['くれました','あげました','もらいました','いただくました'],0,'他人給我方，用くれる。'],
['弟は日本語が___。',['話せます','話しますこと','話したいが','話すあります'],0,'可能形「話せる」。'],
['宿題をし___寝ました。',['てから','ながらに','のでに','そうで'],0,'「做完作業後睡覺」＝Vてから。'],
['時間が___、手伝ってください。',['あれば','あるときにだけで','あるそう','ありながら'],0,'條件形：あれば。'],
['この料理は辛___すぎます。',['い','く','す','さ'],0,'い形容詞去い＋すぎる：辛すぎる。'],
['窓を___ください。',['開けて','開いてを','開けるで','開きて'],0,'他動詞開ける的て形＝開けて。'],
['明日は早く起き___なりません。',['なければ','ないでが','なくてを','ないそうに'],0,'義務：なければなりません。']
],
N3:[
['忘れない___、メモしてください。',['ように','ためで','そうな','らしいを'],0,'非意志性目標常用「ように」。'],
['彼は日本に十年住んでいる___。',['そうだ','そうな','らしいで','みたいを'],0,'此處可用傳聞「そうだ」：聽說住了十年。'],
['千円___持っていません。',['しか','だけを','ほどが','ばかりを'],0,'しか要搭配否定：千円しか持っていません。'],
['勉強した___、試験に落ちました。',['のに','ので','ために','ように'],0,'與預期相反使用「のに」。'],
['先生に___。',['褒められました','褒めさせました','褒めてもらうです','褒めるらしい'],0,'「被老師稱讚」使用被動形。'],
['雨が降り___なので、傘を持って行きます。',['そう','ようを','らしいに','みたいが'],0,'外觀判斷「看起來要下雨」＝降りそう。'],
['子どもの時、よく川で___ものです。',['遊んだ','遊ぶに','遊びそう','遊ばせたら'],0,'回憶過去常態：Vたものだ。'],
['この仕事は一人___できません。',['では','へは','しかは','ほどを'],0,'「一個人無法完成」可用一人では。'],
['帰る___、コンビニに寄りました。',['途中で','ばかりに','ようで','ほどに'],0,'途中で＝在途中。'],
['日本語が上手になる___、毎日練習しています。',['ために','ほどで','ばかり','のに'],0,'意志性目的可用ために。']
],
N2:[
['分かり___、ご連絡いたします。',['次第','最中','ほど','うち'],0,'Vます語幹＋次第＝一…就…。'],
['会議の___に、電話が鳴りました。',['最中','たび','次第','うち'],0,'最中に＝正在…之中。'],
['日本にいる___、各地を旅行したい。',['うちに','たびに','だけで','からこそに'],0,'うちに＝趁狀態尚未改變。'],
['彼が犯人である___。',['はずがない','しかないです','わけほど','にすぎる'],0,'依據判斷「不可能是」＝はずがない。'],
['嫌いな___、食べる機会が少ないだけです。',['わけではなく','わけだがない','はずにして','ものをこそ'],0,'部分否定：わけではない。'],
['環境問題___研究しています。',['に関して','に反してを','に応じてを','に限ってを'],0,'に関して＝關於、針對。'],
['経験___、対応を変える必要があります。',['に応じて','を通じては','に先立ってを','にもましてが'],0,'に応じて＝依照、因應。'],
['彼は疲れている___、仕事を続けた。',['にもかかわらず','ものだからで','おかげに','だけあってを'],0,'逆接：儘管…。'],
['この制度は学生___対象にしています。',['を','が','へ','で'],0,'「Nを対象にする」固定搭配。'],
['努力した___、必ず成功するとは限らない。',['からといって','ことからで','以上にを','ばかりかを'],0,'からといって＝不能只因為…就…。']
],
N1:[
['この結果は努力の賜物___。',['にほかならない','にすぎなくない','にかかわらない','を皮切らない'],0,'にほかならない＝正是、無非是。'],
['これは仮説___。',['にすぎない','にもかかわる','を禁じない','に堪えないで'],0,'にすぎない＝只不過是。'],
['大雨___、大会は予定通り行われた。',['にもかかわらず','をものともして','ならではに','に至るで'],0,'にもかかわらず＝儘管。'],
['状況から見て、計画を変更せ___。',['ざるを得ない','ずにはおく','まいにもない','ないではすむ'],0,'ざるを得ない＝不得不。'],
['彼は周囲の反対___、計画を実行した。',['をものともせず','に即してを','に照らすと','にかこつけてが'],0,'をものともせず＝不把困難當回事。'],
['東京公演___、全国ツアーが始まった。',['を皮切りに','を限りでしか','に至ってで','に則りを'],0,'を皮切りに＝以…為開端。'],
['便利になった___、新たな問題も生じた。',['ものの','そばからを','が最後に','ともなくを'],0,'ものの＝雖然…但是…。'],
['専門家___、判断を誤ることがある。',['といえども','にしてからを','ならではなく','べからざるが'],0,'といえども＝即使是…。'],
['彼は仕事の___、大学で教えている。',['かたわら','ところを','極みに','手前で'],0,'かたわら＝一面從事主要活動，一面也…。'],
['事実を知った___、黙っていることはできない。',['以上','なりに','そばから','ときたら'],0,'Vた以上＝既然已經…。']
]
};

const state = JSON.parse(localStorage.getItem('morihibiState') || '{"kana":[],"vocab":[],"grammar":[],"quizBest":0,"streak":1,"lastStudy":""}');
function save(){localStorage.setItem('morihibiState', JSON.stringify(state));}
function touchStudy(){
  const today=new Date(); const todayKey=today.toISOString().slice(0,10);
  if(!state.lastStudy){state.streak=1;state.lastStudy=todayKey;save();return;}
  if(state.lastStudy===todayKey)return;
  const prev=new Date(state.lastStudy+'T00:00:00');
  const now=new Date(todayKey+'T00:00:00');
  const diff=Math.round((now-prev)/86400000);
  state.streak=diff===1?(state.streak||1)+1:1;
  state.lastStudy=todayKey;save();
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}
function speak(text, rate=.9){
  if(!('speechSynthesis' in window)) return toast('此瀏覽器不支援語音播放');
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.rate=rate;
  const voices=speechSynthesis.getVoices(); const ja=voices.find(v=>v.lang.toLowerCase().startsWith('ja')); if(ja)u.voice=ja;
  speechSynthesis.speak(u);
}
function speakSequential(lines, rate=.82){
  if(!('speechSynthesis' in window)) return toast('此瀏覽器不支援語音播放');
  speechSynthesis.cancel();
  let i=0;
  const next=()=>{
    if(i>=lines.length)return;
    const u=new SpeechSynthesisUtterance(lines[i++]); u.lang='ja-JP'; u.rate=rate;
    const voices=speechSynthesis.getVoices(); const ja=voices.find(v=>v.lang.toLowerCase().startsWith('ja')); if(ja)u.voice=ja;
    u.onend=next; speechSynthesis.speak(u);
  };
  next();
}
function recognizeJapanese(cb){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR) return toast('此瀏覽器未提供語音辨識；建議使用 Chrome');
  const r=new SR();r.lang='ja-JP';r.interimResults=false;r.maxAlternatives=3;
  toast('請開始說日文…');r.onresult=e=>cb(e.results[0][0].transcript);r.onerror=()=>toast('語音辨識失敗，請再試一次');r.start();
}
function setPage(page){
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
  const titles={dashboard:'學習首頁',kana:'完整 50 音',vocab:'單字學習',grammar:'文法 25 章',dialogue:'常用日語對話',translate:'翻譯＋語音',jlpt:'JLPT 30 題'};
  $('#pageTitle').textContent=titles[page]; $('#sidebar').classList.remove('open');
  ({dashboard:renderDashboard,kana:renderKana,vocab:renderVocab,grammar:renderGrammar,dialogue:renderDialogue,translate:renderTranslate,jlpt:renderJLPT}[page])();
  window.scrollTo(0,0);
}
function renderDashboard(){
  $('#content').innerHTML=$('#dashboardTemplate').innerHTML;
  $('#statKana').textContent=Math.round((state.kana.length/92)*100)+'%';$('#barKana').style.width=Math.min(100,(state.kana.length/92)*100)+'%';
  $('#statVocab').textContent=state.vocab.length;$('#statGrammar').textContent=state.grammar.length;$('#statQuiz').textContent=state.quizBest||'—';
  $$('[data-go]').forEach(b=>b.onclick=()=>setPage(b.dataset.go));
}
let kanaMode='hira',selectedKana=['あ','a'];
function renderKana(){
  $('#content').innerHTML=`<div class="section-head"><div><span class="eyebrow">KANA MASTER</span><h3>從聲音、辨讀到手寫</h3></div></div>
  <div class="toolbar"><div class="segmented">
    <button data-km="hira" class="${kanaMode==='hira'?'active':''}">平假名</button>
    <button data-km="kata" class="${kanaMode==='kata'?'active':''}">片假名</button>
    <button data-km="voiced" class="${kanaMode==='voiced'?'active':''}">濁音・半濁音</button>
    <button data-km="yoon" class="${kanaMode==='yoon'?'active':''}">拗音</button>
  </div><button class="round-action" id="kanaListening">🎧 隨機聽力</button></div>
  <div class="kana-layout"><div class="panel"><div class="kana-grid" id="kanaGrid"></div>
  <p class="hint">※ 基礎五十音包含平、片假名；進階補上濁音、半濁音、拗音。促音「っ／ッ」與長音「ー」會在單字課與會話中練習。</p></div>
  <div class="panel study-card"><span class="level-badge">聽・說・讀・寫</span><div class="big-kana" id="bigKana">${selectedKana[0]}</div><div class="roman" id="roman">${selectedKana[1]}</div>
  <div class="action-row"><button class="round-action" id="kanaSpeak">🔊 聽發音</button><button class="round-action" id="kanaMic">🎙 跟讀辨識</button><button class="round-action" id="kanaLearn">✓ 我學會了</button></div>
  <div class="canvas-wrap"><canvas id="writeCanvas" width="600" height="420"></canvas></div>
  <div class="action-row"><button class="round-action" id="clearCanvas">清除手寫</button></div><p class="hint">在上方畫布臨摹目前假名。建議「看字→聽音→跟讀→遮住字手寫」循環。</p></div></div>`;
  $$('[data-km]').forEach(b=>b.onclick=()=>{kanaMode=b.dataset.km;renderKana()});
  const arr=kanaMode==='hira'?hira:kanaMode==='kata'?kata:extras[kanaMode];
  const grid=$('#kanaGrid');grid.innerHTML=arr.map(([k,r])=>k?`<button class="kana-card ${state.kana.includes(k)?'learned':''}" data-k="${k}" data-r="${r}"><div class="jp">${k}</div><small>${r}</small></button>`:`<div></div>`).join('');
  $$('.kana-card').forEach(b=>b.onclick=()=>{selectedKana=[b.dataset.k,b.dataset.r];$('.big-kana').textContent=selectedKana[0];$('#roman').textContent=selectedKana[1];$$('.kana-card').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});
  $('#kanaSpeak').onclick=()=>speak(selectedKana[0],.65);
  $('#kanaMic').onclick=()=>recognizeJapanese(txt=>toast(`辨識到：${txt}`));
  $('#kanaLearn').onclick=()=>{if(!state.kana.includes(selectedKana[0]))state.kana.push(selectedKana[0]);touchStudy();save();toast('已記錄為學會');renderKana()};
  $('#kanaListening').onclick=()=>{const valid=arr.filter(x=>x[0]);selectedKana=valid[Math.floor(Math.random()*valid.length)];speak(selectedKana[0],.65);toast('先只聽聲音，再找出對應假名')};
  setupCanvas();
}
function setupCanvas(){
  const c=$('#writeCanvas');if(!c)return;const ctx=c.getContext('2d');ctx.lineWidth=12;ctx.lineCap='round';ctx.strokeStyle='#18392b';let down=false;
  const pos=e=>{const r=c.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return[(p.clientX-r.left)*(c.width/r.width),(p.clientY-r.top)*(c.height/r.height)]};
  const start=e=>{e.preventDefault();down=true;const [x,y]=pos(e);ctx.beginPath();ctx.moveTo(x,y)};
  const move=e=>{if(!down)return;e.preventDefault();const [x,y]=pos(e);ctx.lineTo(x,y);ctx.stroke()};
  const end=()=>down=false;c.onmousedown=start;c.onmousemove=move;c.onmouseup=end;c.onmouseleave=end;c.ontouchstart=start;c.ontouchmove=move;c.ontouchend=end;
  $('#clearCanvas').onclick=()=>ctx.clearRect(0,0,c.width,c.height);
}
function renderVocab(){
  const cats=['全部',...new Set(vocab.map(v=>v[0]))];
  $('#content').innerHTML=`<div class="toolbar"><input id="vSearch" placeholder="搜尋日文、讀音、中文…" style="min-width:250px"><select id="vCat">${cats.map(c=>`<option>${c}</option>`).join('')}</select><button class="round-action" id="randomV">隨機 10 詞</button></div><div class="list-grid" id="vGrid"></div>`;
  const draw=(random=false)=>{
    const q=$('#vSearch').value.trim().toLowerCase(),cat=$('#vCat').value;let rows=vocab.filter(v=>(cat==='全部'||v[0]===cat)&&(!q||v.join('|').toLowerCase().includes(q)));
    if(random) rows=rows.sort(()=>Math.random()-.5).slice(0,10);
    $('#vGrid').innerHTML=rows.map((v,i)=>`<div class="vocab-card"><div class="vocab-top"><div><div class="vocab-word">${v[1]}</div><div class="vocab-reading">${v[2]} · ${v[3]}</div></div><button class="icon-small speakV" data-t="${v[1]}">🔊</button></div><div class="vocab-meaning">${v[4]}</div><div class="example">${v[5]}</div><div class="action-row" style="justify-content:flex-start;margin-bottom:0"><button class="round-action learnV" data-w="${v[1]}">${state.vocab.includes(v[1])?'✓ 已熟悉':'加入已學'}</button></div></div>`).join('')||'<div class="empty">找不到符合的單字。</div>';
    $$('.speakV').forEach(b=>b.onclick=()=>speak(b.dataset.t));$$('.learnV').forEach(b=>b.onclick=()=>{if(!state.vocab.includes(b.dataset.w))state.vocab.push(b.dataset.w);touchStudy();save();toast('單字已加入學習紀錄');draw()});
  };draw();$('#vSearch').oninput=()=>draw();$('#vCat').onchange=()=>draw();$('#randomV').onclick=()=>draw(true);
}
let chapterIndex=0;
function renderGrammar(){
  $('#content').innerHTML=`<div class="chapter-list"><div class="panel chapter-nav" id="chapterNav"></div><div class="panel" id="grammarDetail"></div></div>`;
  $('#chapterNav').innerHTML=grammar.map((g,i)=>`<button class="chapter-btn ${i===chapterIndex?'active':''}" data-i="${i}"><b>${g.t}</b><small>${g.lv} · ${g.p}</small></button>`).join('');
  $$('.chapter-btn').forEach(b=>b.onclick=()=>{chapterIndex=+b.dataset.i;renderGrammar()});drawGrammar();
}
function drawGrammar(){
  const g=grammar[chapterIndex],done=state.grammar.includes(chapterIndex);
  $('#grammarDetail').innerHTML=`<span class="level-badge">${g.lv}</span><h3 class="grammar-title">${g.t}</h3><div class="grammar-pattern">${g.p}</div><p class="grammar-body">${g.d}</p>
  <h4>核心例句</h4>${g.e.map(e=>`<div class="example-box"><b>${e[0]}</b><br><span class="hint">${e[1]}</span> <button class="icon-small grammarSpeak" data-t="${e[0]}">🔊</button></div>`).join('')}
  <h4>靈活學法</h4><p class="grammar-body">先看「結構」而不是只背中文意思；把例句中的名詞或動詞替換成自己的生活內容，再朗讀三次。遇到近義文型時，優先比較「語氣、接續、使用場景」。</p>
  <div class="action-row" style="justify-content:flex-start"><button class="primary-btn" id="completeGrammar">${done?'✓ 已完成本章':'標記本章完成'}</button><button class="round-action" id="grammarNext">下一章 →</button></div>`;
  $$('.grammarSpeak').forEach(b=>b.onclick=()=>speak(b.dataset.t));
  $('#completeGrammar').onclick=()=>{if(!state.grammar.includes(chapterIndex))state.grammar.push(chapterIndex);touchStudy();save();toast('章節進度已儲存');drawGrammar()};
  $('#grammarNext').onclick=()=>{chapterIndex=Math.min(24,chapterIndex+1);renderGrammar()};
}
let sceneIndex=0;
function renderDialogue(){
  $('#content').innerHTML=`<div class="dialogue-list"><div class="panel scene-list" id="sceneList"></div><div class="panel"><div class="toolbar"><label><input type="checkbox" id="romaToggle" checked> 顯示羅馬拼音</label><button class="round-action" id="playScene">▶ 播放整段</button><button class="round-action" id="rolePlay">🎙 跟讀模式</button></div><div class="chat" id="chat"></div></div></div>`;
  $('#sceneList').innerHTML=dialogues.map((s,i)=>`<button class="scene-btn ${i===sceneIndex?'active':''}" data-i="${i}">${i+1}. ${s.t}</button>`).join('');
  $$('.scene-btn').forEach(b=>b.onclick=()=>{sceneIndex=+b.dataset.i;renderDialogue()});drawDialogue();
  $('#romaToggle').onchange=drawDialogue;$('#playScene').onclick=()=>speakSequential(dialogues[sceneIndex].lines.map(l=>l[1]),.78);
  $('#rolePlay').onclick=()=>{const target=dialogues[sceneIndex].lines[0][1];speak(target,.75);setTimeout(()=>recognizeJapanese(txt=>toast(`你說的是：${txt}`)),900)};
}
function drawDialogue(){
  const show=!$('#romaToggle')||$('#romaToggle').checked;
  $('#chat').innerHTML=dialogues[sceneIndex].lines.map((l,i)=>`<div class="bubble ${i%2?'right':''}"><div class="jp-line">${l[0]}：${l[1]}</div>${show?`<div class="roma">${l[2]}</div>`:''}<div class="zh">${l[3]}</div><div class="bubble-tools"><button class="icon-small dSpeak" data-t="${l[1]}">🔊 聽</button></div></div>`).join('');
  $$('.dSpeak').forEach(b=>b.onclick=()=>speak(b.dataset.t,.8));
}
function renderTranslate(){
  $('#content').innerHTML=`<div class="panel" style="margin-bottom:15px"><p class="hint" style="margin:0"><b>翻譯模式：</b>輸入任意語言，系統自動偵測並翻成日文。此原型使用公開翻譯端點；正式商用版建議改接 Google Cloud Translation / DeepL 等正式 API。</p></div>
  <div class="translate-grid"><div class="panel translate-box"><div class="translate-head"><b>原文｜自動偵測</b><button class="icon-small" id="clearTrans">清除</button></div><textarea id="transInput" placeholder="輸入中文、英文、韓文、泰文等…"></textarea></div>
  <div class="panel translate-box"><div class="translate-head"><b>日本語</b><div><button class="icon-small" id="speakTrans">🔊 朗讀</button><button class="icon-small" id="copyTrans">複製</button></div></div><div class="translate-result" id="transResult">翻譯結果會顯示在這裡。</div></div></div>
  <div class="action-row"><button class="primary-btn" id="doTranslate">翻譯成日文</button><button class="round-action" id="micTranslate">🎙 日文語音輸入</button></div>`;
  $('#doTranslate').onclick=translateToJapanese;$('#clearTrans').onclick=()=>{$('#transInput').value='';$('#transResult').textContent='翻譯結果會顯示在這裡。'};
  $('#speakTrans').onclick=()=>speak($('#transResult').textContent);$('#copyTrans').onclick=()=>navigator.clipboard.writeText($('#transResult').textContent).then(()=>toast('已複製'));
  $('#micTranslate').onclick=()=>recognizeJapanese(txt=>{$('#transInput').value=txt;});
}
async function translateToJapanese(){
  const q=$('#transInput').value.trim();if(!q)return toast('請先輸入要翻譯的內容');
  const out=$('#transResult');out.textContent='翻譯中…';
  try{
    const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&dt=t&q='+encodeURIComponent(q);
    const r=await fetch(url);if(!r.ok)throw new Error();const d=await r.json();const text=d[0].map(x=>x[0]).join('');
    out.textContent=text||'無翻譯結果';touchStudy();
  }catch(e){
    out.textContent='公開翻譯服務目前無法連線。正式部署時請在後端設定 Google Cloud Translation、DeepL 或其他正式翻譯 API。';
  }
}
let quiz={level:'N5',questions:[],answers:[],submitted:false};
function generate30(level){
  const seeds=jlptSeeds[level];
  const qs=[];
  for(let round=0;round<3;round++){
    seeds.forEach((s,i)=>{
      const [q,opts,ans,ex]=s;let newOpts=[...opts],newAns=ans;
      if(round>0){
        const shift=(round+i)%4; newOpts=opts.map((_,j)=>opts[(j+shift)%4]);newAns=(ans-shift+4)%4;
      }
      qs.push({q:(round?`【練習${round+1}】 `:'')+q,opts:newOpts,ans:newAns,ex});
    });
  }
  return qs.slice(0,30);
}
function renderJLPT(){
  $('#currentLevel').textContent=quiz.level;
  $('#content').innerHTML=`<div class="panel quiz-start"><span class="level-badge">JLPT PRACTICE</span><h3 class="grammar-title" style="margin-top:10px">日本語能力試験・30 題練習</h3><p class="grammar-body">選擇難度後產生 30 題。交卷後立即顯示分數、正確答案與解析。題型涵蓋文字詞彙、文法與句意。</p>
  <div class="level-select">${['N5','N4','N3','N2','N1'].map(l=>`<button data-l="${l}" class="${quiz.level===l?'active':''}">${l}</button>`).join('')}</div><button class="primary-btn" id="startQuiz">開始 30 題測驗</button></div>`;
  $$('.level-select button').forEach(b=>b.onclick=()=>{quiz.level=b.dataset.l;renderJLPT()});$('#startQuiz').onclick=startQuiz;
}
function startQuiz(){
  quiz.questions=generate30(quiz.level);quiz.answers=Array(30).fill(null);quiz.submitted=false;drawQuiz();
}
function drawQuiz(){
  $('#content').innerHTML=`<div class="quiz-top"><div><b>${quiz.level} 模擬練習</b> <span class="hint" id="answeredCount">0 / 30 已作答</span></div><button class="primary-btn" id="submitQuiz">交卷</button></div>
  <div id="questions">${quiz.questions.map((x,i)=>`<div class="panel question-card"><div class="qnum">QUESTION ${String(i+1).padStart(2,'0')}</div><div class="qtext">${x.q}</div><div class="options">${x.opts.map((o,j)=>`<button class="option" data-q="${i}" data-a="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}</div></div>`).join('')}</div>`;
  $$('.option').forEach(b=>b.onclick=()=>{const q=+b.dataset.q,a=+b.dataset.a;quiz.answers[q]=a;$$(`.option[data-q="${q}"]`).forEach(x=>x.classList.remove('selected'));b.classList.add('selected');$('#answeredCount').textContent=`${quiz.answers.filter(x=>x!==null).length} / 30 已作答`});
  $('#submitQuiz').onclick=submitQuiz;
}
function submitQuiz(){
  if(quiz.answers.some(x=>x===null) && !confirm('還有題目未作答，仍要交卷嗎？'))return;
  const score=quiz.questions.reduce((n,q,i)=>n+(quiz.answers[i]===q.ans),0);state.quizBest=Math.max(state.quizBest||0,score);touchStudy();save();
  $('#content').innerHTML=`<div class="panel quiz-start"><span class="level-badge">${quiz.level}</span><h3>測驗完成</h3><div class="score-circle">${score}<small style="font-size:13px">/30</small></div><p>${score>=27?'非常穩定，可往下一級挑戰。':score>=21?'基礎不錯，建議集中複習錯題。':score>=15?'已有基礎，但文法與詞彙仍需補強。':'建議回到課程章節打穩基礎後再測。'}</p><button class="primary-btn" id="reviewQuiz">查看逐題解析</button> <button class="round-action" id="retryQuiz">再測一次</button></div>`;
  $('#reviewQuiz').onclick=()=>reviewQuiz(score);$('#retryQuiz').onclick=startQuiz;
}
function reviewQuiz(score){
  $('#content').innerHTML=`<div class="quiz-top"><b>${quiz.level}｜得分 ${score}/30</b><button class="round-action" id="backJLPT">返回 JLPT</button></div>${quiz.questions.map((x,i)=>`<div class="panel question-card"><div class="qnum">QUESTION ${i+1}</div><div class="qtext">${x.q}</div><div class="options">${x.opts.map((o,j)=>`<div class="option ${j===x.ans?'correct':quiz.answers[i]===j?'wrong':''}">${String.fromCharCode(65+j)}. ${o}</div>`).join('')}</div><div class="explain"><b>解析：</b>${x.ex}</div></div>`).join('')}`;
  $('#backJLPT').onclick=renderJLPT;
}

$$('.nav-item').forEach(b=>b.onclick=()=>setPage(b.dataset.page));
$('#menuOpen').onclick=()=>$('#sidebar').classList.add('open');$('#sidebarToggle').onclick=()=>$('#sidebar').classList.remove('open');
$('#soundTest').onclick=()=>speak('こんにちは。森日日で日本語を勉強しましょう。');
$('#resetProgress').onclick=()=>{if(confirm('確定清除所有學習進度？')){localStorage.removeItem('morihibiState');location.reload();}};
$('#streakCount').textContent=state.streak||1;$('#weeklyProgress').style.width=Math.min(100,(state.streak||1)/7*100)+'%';
if('speechSynthesis' in window) speechSynthesis.getVoices();setPage('dashboard');
