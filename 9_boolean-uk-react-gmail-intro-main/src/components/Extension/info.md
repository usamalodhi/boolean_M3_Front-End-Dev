<div class="container">
  <div class="bin"></div>
  <div class="profile"></div>
  <div class="moreHorizontal"></div>
  <div class="moreVertical"></div>
  <div class="send"></div>
  <div class="features"></div>
  <div class="expand"></div>
  <div class="reply"></div>
  <div class="emailTo"></div>
  <div class="emailBody"></div>
</div>

.container { display: grid;
grid-template-columns: 0.7fr 0.6fr 1.7fr 1fr 1fr 2.1fr 0.4fr 0.5fr;
grid-template-rows: 1fr 1.8fr 0.6fr 0.6fr;
grid-auto-columns: 1fr;
gap: 0px 0px;
grid-auto-flow: row;
grid-template-areas:
"profile reply emailTo . . . . expand"
"emailBody emailBody emailBody emailBody emailBody emailBody emailBody emailBody"
". moreVertical . . . . . ."
". send features . . . moreHorizontal bin";
}

.bin { grid-area: bin; }
.profile { grid-area: profile; }
.moreHorizontal { grid-area: moreHorizontal; }
.moreVertical { grid-area: moreVertical; }
.send { grid-area: send; }
.features { grid-area: features; }
.expand { grid-area: expand; }
.reply { grid-area: reply; }
.emailTo { grid-area: emailTo; }
.emailBody { grid-area: emailBody; }
