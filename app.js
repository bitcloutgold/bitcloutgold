function loadImage(url) {
    const image = new Image();
    return [image, new Promise(resolve => {
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })];
}

const smoothstep = (x) => {
    if (x <= 0) {
        return 1;
    } else if (x >= 1) {
        return 1;
    }

    return 3 * x * x - 2 * x * x * x;
}

////////////////////////////////////////////////////////////////////////////////////////
/// Congrats on reading the source code. The first two coin owner of 
/// bitcloutgold to post a 🤖 on their account, will get a machine learning
/// 🤖 trained on their account at no extra cost!!! You must own at least one whole coin
// and make a post including a 🤖.
//
/// Bitcloutgold is super alpha. I'm building give me space mother fuckers.
////////////////////////////////////////////////////////////////////////////////////////

const [bitclout_img, img_rdy] = loadImage("bitclout.jpg");
const [bitcloutgold_img, img2_rdy] = loadImage("bitcloutgodl.jpg");
const [sign, img3_rdy] = loadImage("1f477.png");
const [worker, img4_rdy] = loadImage("1f6a7.png");

const imgs_rdy = async () => {
    await img_rdy;
    await img2_rdy;
    await img3_rdy;
    await img4_rdy;

    return true;
}

// 1000 MS
const S = 1000;

const w = window.innerHeight;
const h = window.innerHeight;

const PI = 3.14159265;

const sin = Math.sin;
const cos = Math.cos;
const pow = Math.pow;
const max = Math.max;
const min = Math.min;

const draw = (ctx, t) => {
    // m = middle
    const mw = w / 2;
    const mh = h / 2;

    const img_w = bitclout_img.width;
    const img_h = bitclout_img.height;

    // Script
    // Start with in contstruction.
    //
    // When cursor hovers, show inreasing wiggle.
    // 👷🚧👷
    // The explode off screeen spinning wildly.
    // And the bitcoin pulse logo codes through using a alpha only in the logo mask 
    // over a glitter background we make the bitcloudgold logo glitter

    // Middle
    if (t < 2 * S) {
        const px = mw;
        const py = mh;

        ctx.drawImage(bitclout_img, -px / 2, py);
    }
    // Shake
    // if (t < 6 * S) {
    if (true) {
        const px = mw;
        const py = mh;
        const r = sin(t / (PI * 80.0));
        const sign_offset = 76;
        const sign_size = { width: 50, height: 50 };
        const worker_size = { width: 50, height: 50 };

        ctx.translate(px, py);
        ctx.rotate(r);

        ctx.translate(-sign_size.width / 2 + sign_offset, -sign_size.height / 2);
        ctx.drawImage(sign, sign_size.width, sign_size.height);
        ctx.translate(sign_size.width / 2 - sign_offset, sign_size.height / 2);

        ctx.translate(-sign_size.width / 2 - sign_offset, -sign_size.height / 2);
        ctx.drawImage(sign, sign_size.width, sign_size.height);
        ctx.translate(sign_size.width / 2 + sign_offset, -sign_size.height / 2);

        ctx.rotate(-1.2 * r);
        ctx.drawImage(worker, -worker_size.width / 2, -worker_size.height / 2, worker_size.width, worker_size.height);
        ctx.rotate(1.57 * r);
        ctx.drawImage(sign, -sign_size.width / 2 + sign_offset, -sign_size.height / 2, sign_size.width, sign_size.height);
        console.log("draw", t, r);
        // ctx.rotate(-r);
        ctx.translate(-px, -py);
    }
    else if (t < 8 * S) {
        // Slide Left
        const px = mw;
        const py = mh;
        const r = sin(max(t, 8 * S / PI));
        const removeOffset = w * smoothstep(t / 8 * S)

        const img_w = bitclout_img.width;
        const img_h = bitclout_img.height;

        ctx.translate(px, py);
        ctx.rotate(r);
        ctx.drawImage(bitclout_img, -img_w / 2 - removeOffset, -img_h / 2);
        ctx.rotate(-r);
        ctx.translate(-px, -py);
    } else if (t < 15 * S) {
        // Slide Right In
        const speed = 0.32;
        const a = smoothstep((t - 15 * S) * speed);

        const px = mw;
        const py = mh;
        const r = sin(max(t, 8 * S / PI)) * 0.2 + - 0.1;
        ctx.alpha = a;

        ctx.drawImage(bitclout_img, mw - img_w / 2, mh - img_h / 2);
    }
}



const E = (tag) => {
    const element = document.createElement(tag);
    Object.keys(opts).forEach((k) => {
        const v = opts[k].toString();
        element.setAttribute(k, v);
    });

    return element;
};

const renderLoop = (f) => {
    let running = true;
    let currentFrame = null;

    const loopf = () => {
        if (running === true) {
            f();
            currentFrame = requestAnimationFrame(loopf);
        }
    };
    loopf();

    const cancel = () => {
        runnin = false;
        if (currentFrame != null) {
            window.cancelAnimationFrame(currentFrame);
        }

        // relinquish control so that the render thread can complete and
        return currentFrame;
    };
    return { cancel };
};

(async () => {
    const canvas = document.getElementById("plate")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const firstT = Date.now();

    const ctx = canvas.getContext("2d")
    await imgs_rdy()

    renderLoop(() => {
        const dt = Date.now() - firstT;
        draw(ctx, dt);
    })
})()

