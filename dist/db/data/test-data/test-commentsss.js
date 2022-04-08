"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const testComments = [
    {
        body: "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
        votes: -98,
        author: "xmenbteam",
        cartoon_id: 10,
        created_at: "1600663903000",
    },
    {
        body: "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
        votes: -97,
        author: "jadelandeg",
        cartoon_id: 4,
        created_at: "1628408999000",
    },
    {
        body: "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
        votes: -97,
        author: "jadelandeg",
        cartoon_id: 9,
        created_at: "1645475429000",
    },
    {
        body: "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
        votes: 70,
        author: "dentednerd",
        cartoon_id: 8,
        created_at: "1601128889000",
    },
    {
        body: "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit",
        votes: 73,
        author: "xmenbteam",
        cartoon_id: 6,
        created_at: "1615591820000",
    },
    {
        body: "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
        votes: 86,
        author: "xmenbteam",
        cartoon_id: 9,
        created_at: "1645721059000",
    },
    {
        body: "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
        votes: 34,
        author: "jadelandeg",
        cartoon_id: 4,
        created_at: "1648099788000",
    },
    {
        body: "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
        votes: 4,
        author: "sirkevlar",
        cartoon_id: 6,
        created_at: "1607924896000",
    },
    {
        body: "amet nulla quisque arcu libero rutrum ac lobortis vel dapibus",
        votes: -57,
        author: "jadelandeg",
        cartoon_id: 4,
        created_at: "1625431156000",
    },
    {
        body: "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
        votes: -83,
        author: "dentednerd",
        cartoon_id: 5,
        created_at: "1620833277000",
    },
    {
        body: "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
        votes: 5,
        author: "sirkevlar",
        cartoon_id: 3,
        created_at: "1609110901000",
    },
    {
        body: "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        votes: -7,
        author: "xmenbteam",
        cartoon_id: 8,
        created_at: "1625486907000",
    },
    {
        body: "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
        votes: -66,
        author: "xmenbteam",
        cartoon_id: 4,
        created_at: "1625428797000",
    },
    {
        body: "ante vestibulum ante ipsum primis in faucibus orci luctus et",
        votes: 0,
        author: "sirkevlar",
        cartoon_id: 5,
        created_at: "1607952526000",
    },
    {
        body: "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
        votes: -67,
        author: "jadelandeg",
        cartoon_id: 7,
        created_at: "1630011318000",
    },
    {
        body: "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
        votes: -89,
        author: "jadelandeg",
        cartoon_id: 6,
        created_at: "1601769219000",
    },
    {
        body: "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
        votes: -2,
        author: "jadelandeg",
        cartoon_id: 3,
        created_at: "1602208098000",
    },
    {
        body: "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
        votes: -91,
        author: "sirkevlar",
        cartoon_id: 2,
        created_at: "1623357595000",
    },
    {
        body: "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
        votes: -19,
        author: "dentednerd",
        cartoon_id: 4,
        created_at: "1628307506000",
    },
    {
        body: "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
        votes: -53,
        author: "dentednerd",
        cartoon_id: 10,
        created_at: "1636093955000",
    },
    {
        body: "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
        votes: -13,
        author: "xmenbteam",
        cartoon_id: 1,
        created_at: "1602566843000",
    },
    {
        body: "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
        votes: -16,
        author: "xmenbteam",
        cartoon_id: 7,
        created_at: "1618157645000",
    },
    {
        body: "est congue elementum in hac habitasse platea dictumst morbi vestibulum",
        votes: -64,
        author: "dentednerd",
        cartoon_id: 7,
        created_at: "1637006309000",
    },
    {
        body: "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
        votes: 21,
        author: "jadelandeg",
        cartoon_id: 8,
        created_at: "1625396771000",
    },
    {
        body: "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
        votes: -71,
        author: "xmenbteam",
        cartoon_id: 6,
        created_at: "1630844524000",
    },
    {
        body: "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",
        votes: -76,
        author: "xmenbteam",
        cartoon_id: 3,
        created_at: "1613829500000",
    },
    {
        body: "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus",
        votes: 56,
        author: "jadelandeg",
        cartoon_id: 4,
        created_at: "1635096949000",
    },
    {
        body: "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec",
        votes: -49,
        author: "jadelandeg",
        cartoon_id: 5,
        created_at: "1620371066000",
    },
    {
        body: "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
        votes: 81,
        author: "xmenbteam",
        cartoon_id: 3,
        created_at: "1638779013000",
    },
    {
        body: "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
        votes: -61,
        author: "sirkevlar",
        cartoon_id: 9,
        created_at: "1642865528000",
    },
    {
        body: "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
        votes: 87,
        author: "xmenbteam",
        cartoon_id: 8,
        created_at: "1627462058000",
    },
    {
        body: "phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
        votes: 50,
        author: "dentednerd",
        cartoon_id: 8,
        created_at: "1605020046000",
    },
    {
        body: "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac",
        votes: -92,
        author: "xmenbteam",
        cartoon_id: 3,
        created_at: "1631603618000",
    },
    {
        body: "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
        votes: 60,
        author: "xmenbteam",
        cartoon_id: 3,
        created_at: "1612919478000",
    },
    {
        body: "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
        votes: 33,
        author: "dentednerd",
        cartoon_id: 8,
        created_at: "1642076767000",
    },
    {
        body: "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
        votes: -57,
        author: "sirkevlar",
        cartoon_id: 5,
        created_at: "1603858226000",
    },
    {
        body: "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        votes: 22,
        author: "sirkevlar",
        cartoon_id: 1,
        created_at: "1616439026000",
    },
    {
        body: "donec ut dolor morbi vel lectus in quam fringilla rhoncus",
        votes: -46,
        author: "dentednerd",
        cartoon_id: 8,
        created_at: "1634614545000",
    },
    {
        body: "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
        votes: 84,
        author: "sirkevlar",
        cartoon_id: 4,
        created_at: "1632734425000",
    },
    {
        body: "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi",
        votes: 41,
        author: "dentednerd",
        cartoon_id: 2,
        created_at: "1644809973000",
    },
];
exports.default = testComments;
const newData = testComments.map((comment) => {
    return Object.assign(Object.assign({}, comment), { created_at: Number(comment.created_at) });
});
console.log(newData);
const newDataWriter = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, promises_1.writeFile)("./test-comments.ts", JSON.stringify(newData), "utf-8");
});
newDataWriter();
