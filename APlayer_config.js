const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '平凡之路 (Live版)',
            artist: '朴树',
            //lrc: '',
            //cover: '',
            url: 'http://music.163.com/song/media/outer/url?id=553543175.mp3'
            },
            {
                name: '天空之城（经典钢琴版）（翻自 久石譲） ',
                artist: 'dylanf',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=864711417.mp3'
            },
            {
                name: '大鱼',
                artist: '周深',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=413812448.mp3'
            },
            {
                name: '步步-五月天',
                artist: '西轰Eight',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=420397651.mp3'
            },
            {
                name: '春庭雪',
                artist: '等什么君',
                //lrc: '',
                //cover: '',
                url: 'http://ws.stream.qqmusic.qq.com/C4000036hiOc1PzcKd.m4a?guid=886916074&vkey=C9F7431EA747F26B1253B38DAB6D74615438853473ED161873C9F31C26F1DE05E993CCABB6BA5CC636BE443230B1F10F68415990E2EBF7D9&uin=0&fromtag=66'
            },
            {
                name: '天使的翅膀',
                artist: '徐誉滕',
                //lrc: '',
                //cover: '',
                url: 'http://36.158.236.143/amobile.music.tc.qq.com/C400004XHjVj0H0qBe.m4a?guid=522931183&vkey=4F798CE78599238962C28899168035853F4AA17FA28655942679B72DDAA9FB54F3E3049B7EC669F1C008F3ACCF9AAFB268268D947282C800&uin=0&fromtag=66'
            },
            {
                name: '要命',
                artist: '茶茶',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=1347445635.mp3'
            },
            {
                name: '举步维艰',
                artist: '姜云升,朴冉',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=1310469265.mp3'
            },
            {
                name: '水星记',
                artist: '郭顶',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3'
            },
            {
                name: '海底',
                artist: '一支榴莲',
                //lrc: '',
                //cover: '',
                url: 'http://music.163.com/song/media/outer/url?id=1430583016.mp3'
            },
            {
                name: '破茧',
                artist: '张韶涵',
                //lrc: '',
                //cover: '',
                url: 'http://36.158.236.13/amobile.music.tc.qq.com/C400003kSb8X2Ie1Ue.m4a?guid=203449263&vkey=C62ED476C637BC6DDBE935CFE4B88995C44EC7BE7B9F817663B49D919F0D7760708C3BCD4FE08A8A6EFE1FED9394A5723C12EEFAEDADA53D&uin=0&fromtag=66'
            },
        ]
});

