"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commentsData = [
    {
        body: "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat",
        votes: -43,
        author: "dappernerddesigns",
        cartoon_id: 14,
        created_at: "6/30/2021",
    },
    {
        body: "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
        votes: -5,
        author: "poonam-raj",
        cartoon_id: 8,
        created_at: "9/6/2021",
    },
    {
        body: "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
        votes: 76,
        author: "dappernerddesigns",
        cartoon_id: 16,
        created_at: "8/8/2021",
    },
    {
        body: "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
        votes: -91,
        author: "poonam-raj",
        cartoon_id: 13,
        created_at: "11/10/2021",
    },
    {
        body: "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",
        votes: 14,
        author: "xmenbteam",
        cartoon_id: 7,
        created_at: "4/23/2021",
    },
    {
        body: "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
        votes: 100,
        author: "jadelandeg",
        cartoon_id: 26,
        created_at: "10/21/2021",
    },
    {
        body: "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
        votes: 95,
        author: "dentednerd",
        cartoon_id: 19,
        created_at: "1/3/2022",
    },
    {
        body: "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
        votes: -15,
        author: "poonam-raj",
        cartoon_id: 15,
        created_at: "7/12/2021",
    },
    {
        body: "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
        votes: -71,
        author: "dappernerddesigns",
        cartoon_id: 15,
        created_at: "9/5/2021",
    },
    {
        body: "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
        votes: -39,
        author: "sirkevlar",
        cartoon_id: 5,
        created_at: "7/18/2021",
    },
    {
        body: "nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
        votes: -47,
        author: "dappernerddesigns",
        cartoon_id: 18,
        created_at: "7/24/2021",
    },
    {
        body: "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
        votes: -76,
        author: "jadelandeg",
        cartoon_id: 22,
        created_at: "9/10/2021",
    },
    {
        body: "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
        votes: 56,
        author: "heatherever",
        cartoon_id: 23,
        created_at: "9/28/2021",
    },
    {
        body: "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
        votes: 43,
        author: "dappernerddesigns",
        cartoon_id: 30,
        created_at: "10/31/2021",
    },
    {
        body: "sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
        votes: -87,
        author: "xmenbteam",
        cartoon_id: 11,
        created_at: "5/26/2021",
    },
    {
        body: "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam",
        votes: 38,
        author: "dappernerddesigns",
        cartoon_id: 3,
        created_at: "12/17/2021",
    },
    {
        body: "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu",
        votes: 27,
        author: "heatherever",
        cartoon_id: 2,
        created_at: "11/2/2021",
    },
    {
        body: "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
        votes: -30,
        author: "xmenbteam",
        cartoon_id: 26,
        created_at: "3/14/2022",
    },
    {
        body: "vel est donec odio justo sollicitudin ut suscipit a feugiat",
        votes: 14,
        author: "xmenbteam",
        cartoon_id: 11,
        created_at: "6/26/2021",
    },
    {
        body: "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
        votes: -73,
        author: "poonam-raj",
        cartoon_id: 29,
        created_at: "5/1/2021",
    },
    {
        body: "morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
        votes: -98,
        author: "heatherever",
        cartoon_id: 4,
        created_at: "12/4/2021",
    },
    {
        body: "risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
        votes: -80,
        author: "dentednerd",
        cartoon_id: 27,
        created_at: "4/23/2021",
    },
    {
        body: "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius",
        votes: -61,
        author: "dentednerd",
        cartoon_id: 26,
        created_at: "12/26/2021",
    },
    {
        body: "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
        votes: 96,
        author: "sirkevlar",
        cartoon_id: 3,
        created_at: "7/29/2021",
    },
    {
        body: "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at",
        votes: 39,
        author: "heatherever",
        cartoon_id: 9,
        created_at: "1/9/2022",
    },
    {
        body: "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
        votes: 19,
        author: "xmenbteam",
        cartoon_id: 6,
        created_at: "8/19/2021",
    },
    {
        body: "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
        votes: 96,
        author: "xmenbteam",
        cartoon_id: 20,
        created_at: "12/23/2021",
    },
    {
        body: "suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
        votes: -67,
        author: "dappernerddesigns",
        cartoon_id: 4,
        created_at: "10/1/2021",
    },
    {
        body: "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
        votes: 91,
        author: "heatherever",
        cartoon_id: 7,
        created_at: "6/4/2021",
    },
    {
        body: "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
        votes: 21,
        author: "heatherever",
        cartoon_id: 14,
        created_at: "7/23/2021",
    },
    {
        body: "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        votes: 30,
        author: "xmenbteam",
        cartoon_id: 23,
        created_at: "2/23/2022",
    },
    {
        body: "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac",
        votes: -26,
        author: "poonam-raj",
        cartoon_id: 12,
        created_at: "12/20/2021",
    },
    {
        body: "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
        votes: 20,
        author: "dentednerd",
        cartoon_id: 3,
        created_at: "10/21/2021",
    },
    {
        body: "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
        votes: 80,
        author: "poonam-raj",
        cartoon_id: 3,
        created_at: "8/13/2021",
    },
    {
        body: "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
        votes: -68,
        author: "heatherever",
        cartoon_id: 30,
        created_at: "10/20/2021",
    },
    {
        body: "venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
        votes: -20,
        author: "xmenbteam",
        cartoon_id: 18,
        created_at: "10/16/2021",
    },
    {
        body: "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
        votes: 77,
        author: "jadelandeg",
        cartoon_id: 22,
        created_at: "9/24/2021",
    },
    {
        body: "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
        votes: -4,
        author: "jadelandeg",
        cartoon_id: 14,
        created_at: "12/30/2021",
    },
    {
        body: "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
        votes: 92,
        author: "dentednerd",
        cartoon_id: 12,
        created_at: "10/25/2021",
    },
    {
        body: "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
        votes: -21,
        author: "dentednerd",
        cartoon_id: 2,
        created_at: "3/7/2022",
    },
    {
        body: "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
        votes: 43,
        author: "dentednerd",
        cartoon_id: 17,
        created_at: "3/1/2022",
    },
    {
        body: "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
        votes: -61,
        author: "dentednerd",
        cartoon_id: 2,
        created_at: "10/15/2021",
    },
    {
        body: "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
        votes: -1,
        author: "poonam-raj",
        cartoon_id: 25,
        created_at: "8/31/2021",
    },
    {
        body: "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
        votes: 34,
        author: "dentednerd",
        cartoon_id: 24,
        created_at: "4/18/2021",
    },
    {
        body: "ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
        votes: -15,
        author: "poonam-raj",
        cartoon_id: 10,
        created_at: "8/5/2021",
    },
    {
        body: "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
        votes: 13,
        author: "sirkevlar",
        cartoon_id: 6,
        created_at: "6/23/2021",
    },
    {
        body: "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
        votes: -35,
        author: "dentednerd",
        cartoon_id: 1,
        created_at: "5/31/2021",
    },
    {
        body: "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
        votes: -55,
        author: "poonam-raj",
        cartoon_id: 29,
        created_at: "5/13/2021",
    },
    {
        body: "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
        votes: 65,
        author: "dentednerd",
        cartoon_id: 15,
        created_at: "8/19/2021",
    },
    {
        body: "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
        votes: 43,
        author: "sirkevlar",
        cartoon_id: 23,
        created_at: "10/15/2021",
    },
    {
        body: "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
        votes: -96,
        author: "dentednerd",
        cartoon_id: 9,
        created_at: "9/3/2021",
    },
    {
        body: "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
        votes: 84,
        author: "poonam-raj",
        cartoon_id: 24,
        created_at: "8/6/2021",
    },
    {
        body: "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
        votes: 92,
        author: "poonam-raj",
        cartoon_id: 1,
        created_at: "8/30/2021",
    },
    {
        body: "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
        votes: 99,
        author: "heatherever",
        cartoon_id: 8,
        created_at: "9/12/2021",
    },
    {
        body: "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        votes: 26,
        author: "dappernerddesigns",
        cartoon_id: 23,
        created_at: "12/17/2021",
    },
    {
        body: "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
        votes: -18,
        author: "sirkevlar",
        cartoon_id: 17,
        created_at: "6/20/2021",
    },
    {
        body: "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
        votes: -27,
        author: "jadelandeg",
        cartoon_id: 27,
        created_at: "6/3/2021",
    },
    {
        body: "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
        votes: 9,
        author: "dentednerd",
        cartoon_id: 21,
        created_at: "12/21/2021",
    },
    {
        body: "fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
        votes: 33,
        author: "xmenbteam",
        cartoon_id: 1,
        created_at: "7/14/2021",
    },
    {
        body: "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
        votes: -48,
        author: "dappernerddesigns",
        cartoon_id: 22,
        created_at: "2/28/2022",
    },
    {
        body: "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
        votes: 47,
        author: "dentednerd",
        cartoon_id: 24,
        created_at: "12/5/2021",
    },
    {
        body: "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
        votes: 0,
        author: "jadelandeg",
        cartoon_id: 11,
        created_at: "7/26/2021",
    },
    {
        body: "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
        votes: -72,
        author: "dentednerd",
        cartoon_id: 24,
        created_at: "1/16/2022",
    },
    {
        body: "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
        votes: -11,
        author: "sirkevlar",
        cartoon_id: 26,
        created_at: "7/23/2021",
    },
    {
        body: "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
        votes: -99,
        author: "dentednerd",
        cartoon_id: 25,
        created_at: "1/26/2022",
    },
    {
        body: "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
        votes: -65,
        author: "dappernerddesigns",
        cartoon_id: 22,
        created_at: "10/15/2021",
    },
    {
        body: "suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu",
        votes: 81,
        author: "xmenbteam",
        cartoon_id: 15,
        created_at: "12/13/2021",
    },
    {
        body: "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
        votes: 75,
        author: "xmenbteam",
        cartoon_id: 4,
        created_at: "7/29/2021",
    },
    {
        body: "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
        votes: 13,
        author: "dentednerd",
        cartoon_id: 25,
        created_at: "1/5/2022",
    },
    {
        body: "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
        votes: 68,
        author: "xmenbteam",
        cartoon_id: 2,
        created_at: "9/18/2021",
    },
    {
        body: "a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla",
        votes: 25,
        author: "poonam-raj",
        cartoon_id: 1,
        created_at: "11/4/2021",
    },
    {
        body: "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin",
        votes: 19,
        author: "heatherever",
        cartoon_id: 9,
        created_at: "3/11/2022",
    },
    {
        body: "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor",
        votes: -74,
        author: "poonam-raj",
        cartoon_id: 3,
        created_at: "9/18/2021",
    },
    {
        body: "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
        votes: -18,
        author: "heatherever",
        cartoon_id: 29,
        created_at: "11/10/2021",
    },
    {
        body: "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
        votes: -53,
        author: "heatherever",
        cartoon_id: 18,
        created_at: "3/13/2022",
    },
    {
        body: "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
        votes: -6,
        author: "jadelandeg",
        cartoon_id: 27,
        created_at: "11/8/2021",
    },
    {
        body: "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
        votes: 4,
        author: "poonam-raj",
        cartoon_id: 9,
        created_at: "5/1/2021",
    },
    {
        body: "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
        votes: -29,
        author: "dentednerd",
        cartoon_id: 12,
        created_at: "7/20/2021",
    },
    {
        body: "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
        votes: -53,
        author: "poonam-raj",
        cartoon_id: 24,
        created_at: "11/22/2021",
    },
    {
        body: "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
        votes: 47,
        author: "heatherever",
        cartoon_id: 19,
        created_at: "8/24/2021",
    },
];
exports.default = commentsData;