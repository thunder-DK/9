var milkcocoa = new MilkCocoa("https://onifc51rff.mlkcca.com:443");

function logIn(){
    var id = $('.login-id').val();
    var pass = $('.login-pass').val();

    if(id != undefined && pass != undefined){
        milkcocoa.login(id,pass,function(err,user){
            if(err === null){
                alert('ログインが完了しました');
            } else {
                if(err === MilkCocoa.Error.Login.FormatError){
                    alert('メールアドレスが無効の形式です');
                }

                if(err === MilkCocoa.Error.Login.LoginError){
                    alert('パスワードが無効です');
                }

                if(err === MilkCocoa.Error.Login.EmailNotVerificated){
                    alert('メールアドレスが認証されていません');
                }
            }
        })
    } else {
        if(id === undefined){
            alert('メールアドレスを入力してください');
        }

        if(pass === undefined){
            alert('パスワードを入力してください');
        }
    }
}

function signIn(){
    var id = $('.signin-id').val();
    var pass_1 = $('.signin-pass-1').val();
    var pass_2 = $('.signin-pass-2').val();

    if(id != undefined){
        if(pass_1 == pass_2){
            milkcocoa.addAccount(id,pass_1,null,function(err,user){
                if(err == null){
                    alert(user.email + 'のユーザ登録が完了しました');
                } else {
                    if(err === MilkCocoa.Error.AddAccount.FormatError){
                        alert('無効な書式のメールアドレスです');
                    }

                    if(err === MilkCocoa.Error.AddAccount.AlreadyExist){
                        alert('すでに追加されているメールアドレスです');
                    }
                }
            })
        } else {
            alert('パスワードが間違ってます');
        }
    } else {
        alert('メールアドレスを入力してください');
    }
}