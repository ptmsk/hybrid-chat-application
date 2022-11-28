const socket = io("https://servermmt.herokuapp.com/", {
  transports: ["websocket"],
});

$("#div-chat").hide();
let curr_username = "";

const peer = new Peer();

peer.on("open", (id) => {
  $("#btnSignUp").click(() => {
    const username = $("#txtUsername-dangky").val();
    const password = $("#txtPassword-dangky").val();
    socket.emit("NGUOI_DUNG_DANG_KY", {
      username: username,
      password: password,
      peerId: id,
    });
    $("#my-peer").html("Your Name: " + username);
  });
  $("#btnLogin").click(() => {
    const username = $("#txtUsername-dangnhap").val();
    const password = $("#txtPassword-dangnhap").val();
    socket.emit("NGUOI_DUNG_DANG_NHAP", {
      username: username,
      password: password,
      peerId: id,
    });
    $("#my-peer").html("Your Name: " + username);
  });
});

socket.on("DANG_KY_THAT_BAI", (warning) => alert(warning));
socket.on("DANG_NHAP_THAT_BAI", (warning) => alert(warning));

socket.on("DANH_SACH_ONLINE", (userOnline) => {
  $("#div-chat").show();
  $("#div-dang-ky").hide();
  $("#div-dang-nhap").hide();

  userOnline.forEach((user) => {
    const { username, peerId } = user;
    $("#ulUser").append(
      `<li id="${peerId}" class="btn btn-secondary list-group-item mb-2">${username}</li>`
    );
  });

  socket.on("CO_NGUOI_DUNG_MOI", (user) => {
    const { username, peerId } = user;
    userOnline.push(user);
    $("#ulUser").append(
      `<li id="${peerId}" class="btn btn-secondary list-group-item mb-2">${username}</li>`
    );
  });

  socket.on("AI_DO_NGAT_KET_NOI", (peerId) => {
    const index = userOnline.findIndex((user) => user.peerId === socket.peerId);
    userOnline.splice(index, 1);
    $(`#${peerId}`).remove();
  });

  peer.on("connection", function (conn) {
    const username = userOnline.find((e) => e.peerId == conn.peer).username;
    conn.on("data", function (data) {
      if (data.type == "message") {
        $("#chat-box")
          .append(`<div style="clear: both; float: left; background-color: gray; margin: 2px;
                border-radius: 4px;" class="p-2 ${username}">${username}: ${data.content}</div>`);
      } else if (data.type == "file") {
        const file = data.content;
        const filename = data.name;
        var blob = new Blob([file], { type: data.type });
        var url = URL.createObjectURL(blob);
        $("#chat-box")
          .append(`<a style="clear: both; float: left; background-color: gray; margin: 2px;
                border-radius: 4px;" class="p-2 ${username}" href="${url}" download='${filename}'>${username}: ${filename}</a>`);
      }
      $(".p-2").addClass("visually-hidden");
      $(`.${curr_username}`).removeClass("visually-hidden");
    });
  });
});

$("#ulUser").on("click", "li", function () {
  const id = $(this).attr("id");
  const username = $(this).text();

  $(".list-group-item").removeClass("active");
  $(".list-group-item").removeClass("disabled");
  $(this).addClass("active");
  $(this).addClass("disabled");

  curr_username = username;
  $(".p-2").addClass("visually-hidden"); //???
  $(`.${username}`).removeClass("visually-hidden"); //??

  var conn = peer.connect(id);
  // on open will be launch when you successfully connect to PeerServer
  conn.on("open", function () {
    console.log(peer.connections);
    document.getElementById("chat-to").innerText = "Chat with: " + username;
    console.log("connect to: " + username);
    // here you have conn.id
    $("#send").click(() => {
      if (conn.open) {
        const mess = $("#messages").val();
        $("#chat-box").append(
          `<div style="clear: both; float: right; background-color: green; margin: 2px; border-radius: 4px;" class="p-2 ${username}">${mess}</div>`
        );
        conn.send({ content: mess, type: "message" });
        console.log(conn);
      }
    });

    $("#send-file").click(() => {
      if (conn.open) {
        const file = document.getElementById("file-upload").files[0];
        const filename = file.name;
        var blob = new Blob([file], { type: file.type });
        var url = URL.createObjectURL(blob);
        $("#chat-box")
          .append(`<a style="clear: both; float: right; background-color: green; margin: 2px;
                border-radius: 4px;" class="p-2 ${username}" href="${url}" download='${filename}'>${filename}</a>`);

        conn.send({ content: file, type: "file", name: filename });
        console.log(file);
      }
    });

    $("#ulUser").on("click", "li", function () {
      conn.close();
      console.log(conn);
    });
  });
});
