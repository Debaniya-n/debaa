function LAppLive2DManager()
{
    // console.log("--> LAppLive2DManager()");
    
    // モデルデータ
    this.models = [];  // LAppModel
    
    //  サンプル機能
    this.count = -1;
    this.reloadFlg = false; // モデル再読み込みのフラグ
    
    Live2D.init();
    Live2DFramework.setPlatformManager(new PlatformManager);
    
}

LAppLive2DManager.prototype.createModel = function()
{
    // console.log("--> LAppLive2DManager.createModel()");
    
    var model = new LAppModel();
    this.models.push(model);
    
    return model;
}


LAppLive2DManager.prototype.changeModel = function(gl)
{
    // console.log("--> LAppLive2DManager.update(gl)");
    
    if (this.reloadFlg)
    {
        // モデル切り替えボタンが押された時、モデルを再読み込みする
        this.reloadFlg = false;
        var no = parseInt(this.count % 5);

        var thisRef = this;
        switch (no)
        {
            case 0: // ハル
                this.releaseModel(1, gl);
                this.releaseModel(0, gl);
                // OpenGLのコンテキストをセット
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_DEBA);
                document.getElementById("glbg").src = "assets/image/DebaBG.mp4";
                document.getElementById("metadatae").innerHTML = '<img src="images/ico_deba.png" style="height: 7.5vw; border-radius:50%; text-align: center;"><h1>"Debaa"</h1><h2>The Green Tea</h2>Date of Creation: May 2nd 2020<br><br>Debut: August 18th 2020<br><br>Status: Active<br><br>Channel: <a href="https://www.twitch.tv/debaa_nyan" style="color: violet;text-decoration: none;">debaa_nyan</a><br><br>Description: <br>Deba’s second attempt at virtualizing himself into a Live2D model. Being the 4th model in his timeline, he had a significantly quicker development for not having to rig parameters unused by the face-tracker.';
                break;
            case 1: // わんこ
                this.releaseModel(0, gl);
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_CODY);
                document.getElementById("glbg").src = "assets/image/CodyBG.mp4";
                document.getElementById("metadatae").innerHTML = '<img src="images/ico_cody.png" style="height: 7.5vw; border-radius:50%; text-align: center;"><h1>"Cody"</h1><h2>The Diamond Snowflake</h2>Date of Creation: March 15th 2020<br><br>Debut: March 18th 2020<br><br>Status: Discontinued<br><br>Channel: <a href="https://www.twitch.tv/codyyuki7" style="color: violet;text-decoration: none;">codyyuki7</a><br><br>Description: <br>The third ever model that Deba have ever worked on, While also being the very first model commissioned to him, She was very stiff and has too many stuff going on that i wasn’t able to understand back then.';
                break;
            case 2: // わんこ
                this.releaseModel(0, gl);
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_MAICHI);
                document.getElementById("glbg").src = "assets/image/MaichiBG.mp4";
                document.getElementById("metadatae").innerHTML = '<img src="images/ico_maichi.png" style="height: 7.5vw; border-radius:50%; text-align: center;"><h1>"Maichi"</h1><h2>The Friendly Alien</h2>Date of Creation: July 12th 2020<br><br>Debut: July 21st 2020<br><br>Status: Active<br><br>Channel: <a href="https://www.twitch.tv/yummymaichi" style="color: violet;text-decoration: none;">yummymaichi</a><br><br>Description: <br>One of the few of Deba’s 1st generation commissioned model. Despite having more thoughts put into during development, Deba could only give her a very basic movement and expressions at the time.';
                break;
            case 3: // しずく
                this.releaseModel(0, gl);
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_NIA);
                document.getElementById("glbg").src = "assets/image/NiaBG.mp4";
                document.getElementById("metadatae").innerHTML = '<img src="images/ico_nia.png" style="height: 7.5vw; border-radius:50%; text-align: center;"><h1>"Nia"</h1><h2>The Lovely Airhead</h2>Date of Creation: December 9th 2020<br><br>Debut: December 13th 2020<br><br>Status: Active<br><br>Channel: <a href="https://www.twitch.tv/niatheairhead" style="color: violet;text-decoration: none;">niatheairhead</a><br><br>Description: <br>An early prototype of Deba’s second generation of Live2D models. Unlike the other earlier models, She has more deformers instead of artmeshes assigned to parameters, Resulting in lower cpu usage.';
                break;
            case 4: // わんこ
                this.releaseModel(0, gl);
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_MEIDO);
                document.getElementById("glbg").src = "assets/image/MeidoBG.mp4";
                document.getElementById("metadatae").innerHTML = '<img src="images/ico_meido.png" style="height: 7.5vw; border-radius:50%; text-align: center;"><h1>"Spare"</h1><h2>The Spare Maid</h2>Date of Creation: December 22th 2020<br><br>Debut: December 23th 2020<br><br>Status: Active<br><br>Channel: <a href="https://www.twitch.tv/maidspare" style="color: violet;text-decoration: none;">maidspare</a><br><br>Description: <br>The second prototype of Deba’s second generation of Live2d models. She’s the very first model to ever got her 2d physics implemented. While also being the first model to have a toggleable expression.';
                break;
            /*case 3: // Epsilon2.1モデル
                this.releaseModel(0, gl);
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_EPSILON);
                break;
            case 4: // 複数モデル
                this.releaseModel(0, gl);
                // 一体目のモデル
                this.createModel();
                this.models[0].load(gl, LAppDefine.MODEL_HARU_A, function() {
                    // 二体目のモデル
                    thisRef.createModel();
                    thisRef.models[1].load(gl, LAppDefine.MODEL_HARU_B);
                });
                break;*/
            default:
                break;
        }
    }
};


LAppLive2DManager.prototype.getModel = function(no)
{
    // console.log("--> LAppLive2DManager.getModel(" + no + ")");
    
    if (no >= this.models.length) return null;
    
    return this.models[no];
};


/*
 * モデルを解放する
 * ないときはなにもしない
 */
LAppLive2DManager.prototype.releaseModel = function(no, gl)
{
    // console.log("--> LAppLive2DManager.releaseModel(" + no + ")");
    
    if (this.models.length <= no) return;

    this.models[no].release(gl);
    
    delete this.models[no];
    this.models.splice(no, 1);
};


/*
 * モデルの数
 */
LAppLive2DManager.prototype.numModels = function()
{
    return this.models.length;
};


/*
 * ドラッグしたとき、その方向を向く設定する
 */
LAppLive2DManager.prototype.setDrag = function(x, y)
{
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].setDrag(x, y);
    }
}


/*
 * 画面が最大になったときのイベント
 */
LAppLive2DManager.prototype.maxScaleEvent = function()
{
    if (LAppDefine.DEBUG_LOG)
        console.log("Max scale event.");
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_IN,
                                         LAppDefine.PRIORITY_NORMAL);
    }
}


/*
 * 画面が最小になったときのイベント
 */
LAppLive2DManager.prototype.minScaleEvent = function()
{
    if (LAppDefine.DEBUG_LOG)
        console.log("Min scale event.");
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_OUT,
                                         LAppDefine.PRIORITY_NORMAL);
    }
}


/*
 * タップしたときのイベント
 */
LAppLive2DManager.prototype.tapEvent = function(x, y)
{    
    if (LAppDefine.DEBUG_LOG)
        console.log("tapEvent view x:" + x + " y:" + y);

    for (var i = 0; i < this.models.length; i++)
    {

        if (this.models[i].hitTest(LAppDefine.HIT_AREA_HEAD, x, y))
        {
            // 顔をタップしたら表情切り替え
            if (LAppDefine.DEBUG_LOG)
                console.log("Tap face.");

            this.models[i].setRandomExpression();
        }
        else if (this.models[i].hitTest(LAppDefine.HIT_AREA_BODY, x, y))
        {
            // 体をタップしたらモーション
            if (LAppDefine.DEBUG_LOG)
                console.log("Tap body." + " models[" + i + "]");

            this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_TAP_BODY,
                                             LAppDefine.PRIORITY_NORMAL);
        }
    }

    return true;
};

