import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code = `
  public async Task NewGame()
  {
      Console.WriteLine(Context.ConnectionId);

      var deck = NewDeck();
      var playerOneHand = deck.GetRange(0, 5);
      var playerTwoHand = deck.GetRange(5, 5);
      var continueL = deck.GetRange(10, 5);
      var continueR = deck.GetRange(15, 5);
      var playerOneStack = deck.GetRange(20, 15);
      var playerTwoStack = deck.GetRange(35, 15);
      var playL = deck.GetRange(50, 1).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true });
      var playR = deck.GetRange(51, 1).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true });

      await Clients.All.SendAsync("NewGame", new { PlayerOneHand = playerOneHand, PlayerTwoHand = playerTwoHand, ContinueL = continueL, ContinueR = continueR, PlayerOneStack = playerOneStack, PlayerTwoStack = playerTwoStack, PlayL = playL, PlayR = playR, players = playerData.players }, Context.ConnectionAborted);
  }

  public async Task Reset(Reset obj)
  {
      var stack = new List<Card>();
      stack.AddRange(obj.PlayL);
      stack.AddRange(obj.PlayR);
      stack.AddRange(obj.ContinueL);
      stack.AddRange(obj.ContinueR);

      stack = stack.OrderBy(a => Guid.NewGuid()).ToList();
      var continueL = stack.GetRange(0, 5).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = false }).ToList();
      var continueR = stack.GetRange(5, 5).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = false }).ToList();
      var count = stack.Count - 10;

      if (stack.Count % 2 == 0)
      {
          var playL = stack.GetRange(10, count / 2).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true }).ToList();
          var playR = stack.GetRange(10 + count / 2, count / 2).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true }).ToList();
          await Clients.All.SendAsync("ResetHandler", new Reset { ContinueL = continueL, ContinueR = continueR, PlayL = playL, PlayR = playR, IsPlayerOne = obj.IsPlayerOne });
      }
      else
      {
          var playL = stack.GetRange(10, (count + 1) / 2).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true }).ToList();
          var playR = stack.GetRange(10 + (count + 1) / 2, count - (count + 1) / 2).Select(c => new Card { SuiteNumber = c.SuiteNumber, House = c.House, FaceUp = true }).ToList();
          await Clients.All.SendAsync("ResetHandler", new Reset { ContinueL = continueL, ContinueR = continueR, PlayL = playL, PlayR = playR, IsPlayerOne = obj.IsPlayerOne });
      }
  }
  `
}
