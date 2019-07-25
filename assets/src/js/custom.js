$(document).ready(function() {
  //Division ID nomenclature: East = 1, West = 2, South = 3, Midwest = 4
  var questionJson = {
    questions: [
      {
        division: 'E',
        round: 1,
        game: 1,
        color1: {
          title: '286c',
          hex: '4286f4'
        },
        color2: {
          title: '268c',
          hex: '41f474'
        }
      },
      {
        division: 'E',
        round: 1,
        game: 2,
        color1: {
          title: '186c',
          hex: 'bc2fb3'
        },
        color2: {
          title: '168c',
          hex: 'c4522d'
        }
      },
      {
        division: 'E',
        round: 1,
        game: 2,
        color1: {
          title: '816c',
          hex: '45f7e2'
        },
        color2: {
          title: '618c',
          hex: 'd60c4c'
        }
      }
    ]
  };
  var resultArray = [];
  var resultUrlString = '';

  var renderBracketFromUrlString = function(urlString){
    //Show results
    $('#questions').hide();
    $('#results').show();

    var count = questionJson.questions.length;
    for(var i = 0; i < count; i += 1){
      var winnerHex = '#'+questionJson.questions[i].color1.hex;
      var loserHex = '#'+questionJson.questions[i].color2.hex;
      if(urlString[i] == '1'){
        winnerHex = '#'+questionJson.questions[i].color2.hex;
        loserHex = '#'+questionJson.questions[i].color1.hex;
      }
      $('#results').append('<div id="game_'+i.toString()+'" class="game-result game'+i.toString()+'" style="background-color:'+winnerHex+';"><div class="loser" style="background-color:'+loserHex+';"></div></div>');
    }
  }

  //TODO: switch to rendering questions on the fly
  //TODO: create new JSON nodes for later round games
  var renderQuestions = function(){
    var count = questionJson.questions.length;
    for(var i = 0; i < count; i += 1){
      var displayString = 'none';
      if(i == 0){
        displayString = 'block';
      }
      var colorGroupHtml = '<div id="color_group_'+i.toString()+'" class="color-group" style="display:'+displayString+';"><input type="radio" id="game'+i.toString()+'option1" name="g'+i.toString()+'" value="0"><label for="game'+i.toString()+'option1" style="background-color:#'+questionJson.questions[i].color1.hex+';">'+questionJson.questions[i].color1.title+'</label><input type="radio" id="game'+i.toString()+'option2" name="g'+i.toString()+'" value="1"><label for="game'+i.toString()+'option2" style="background-color:#'+questionJson.questions[i].color2.hex+';">'+questionJson.questions[i].color2.title+'</label></div>';
      $('#color_groups').append(colorGroupHtml);
    }

    $('input[type="radio"]').on('change', function(){
      var gameIndex = $(this).attr('name').substring(1);
      resultArray[gameIndex] = $(this).val();
  
      $('.color-group').hide();
      if(resultArray.length < questionJson.questions.length){
        $('#color_group_'+questionJson.questions[resultArray.length].game).show();
      }else{
        $('#btn_render').show();
      }
    });
    $('#btn_render').on('click', function(event){
      resultUrlString = resultArray.toString().replace(/,/g,'');
      window.location.hash = resultUrlString;
      renderBracketFromUrlString(resultUrlString);
    });
  }

  //Init
  if(window.location.hash){
    renderBracketFromUrlString(window.location.hash.substring(1));
  }else{
    renderQuestions();
  }
});
