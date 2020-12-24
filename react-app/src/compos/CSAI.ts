/*
 * @Author: Kanata You 
 * @Date: 2020-12-24 20:39:10 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2020-12-24 21:27:03
 */

export const WelcomeLog = () => {
    return "您好！我是在线客服机器人。请问有能帮到您？\n"
        + "常见问题：\n"
        + Object.keys(answers).map(
            (q, i) => {
                return `\t${ i + 1 }. !(${ q })`;
            }
        ).join("\n");
};

export const answers = {
    "账户验证问题": "本网站使用密码进行登录验证，您在创建账号时录入的邮箱信息可以作为找回密码的途径。",
    "为什么购买产品需要实名验证": "依据相关法律法规，购买金融产品需要绑定交易人的实名信息。"
        + "在本网站交易时，通过实名验证的账户会自动发送一份购买人的信息收录备案。",
    "支付限制": "对于每一位实名用户，为保护您的权益，您的支付将会服从一个支付限额，每日的交易不可超出此限额。",
    "支付方式问题": "本网站目前仅支持支付宝支付。"
};
