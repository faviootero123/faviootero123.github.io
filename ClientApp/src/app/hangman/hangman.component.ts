import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  code = `
<PageTitle>Hangman!</PageTitle>
<MudGrid>
    <MudItem xs="12" sm="9">
        <MudPaper>
            <MudForm style="padding: 25px;">
                    <h1 style="text-align:center">Welcome to the Hangman Game!</h1>
                    <img id="imageGame" style="display:none;" src="@imageSource" />
                    <p id="descriptionGame" style="padding:25px; text-align:center;">Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words. 
                      You will be presented with a number of blank spaces representing the missing letters you need to find. <br /> Use the keyboard to guess a letter (I recommend starting with vowels). 
                      If your chosen letter exists in the answer, then all places in the answer where that letter appear will be revealed. <br /> After you've revealed several letters, you may be able to guess what the answer 
                      is and fill in the remaining letters. Be warned, every time you guess a letter wrong you lose a life and the hangman begins to appear, piece by piece. <br />Solve the puzzle before the hangman dies.
                    </p>

                    <MudItem xs="1" sm="1" style="display:none;" id="counterDiv">
                        <MudField id="counter" FullWidth="true" Variant="Variant.Text" style="display:none;">@counter</MudField>
                    </MudItem>
                    <MudField id="numberToGuess" FullWidth="true" Variant="Variant.Text" style="display:none;">@underlines</MudField>
                    <MudField id="incorrectGuess" FullWidth="true" Variant="Variant.Text" style="display:none;">Incorrect Letters<br> @wrongletters</MudField>
                    <MudField id="prompt" Variant="Variant.Text" style="display:none;" DisableUnderLine="true">Enter Letter: </MudField>  
                    <MudItem xs="1" sm="1" style="display:none;" id="userletterDiv">            
                        <MudTextField id="userLetter" @bind-Value="letter" Variant="Variant.Text" MaxLength="1"></MudTextField>  
                    </MudItem>
                    <MudButton id="startGame" Variant="Variant.Filled" style="padding:10px; margin-left: auto; margin-right: auto; display:block" Color="Color.Primary" DisableElevation="true" OnClick="StartGame">Start!</MudButton>
                    <MudButton id="submitLetter" Variant="Variant.Filled" style="display:none;" Color="Color.Primary" DisableElevation="true" OnClick="GuessLetter">Submit!</MudButton>
                    <MudButton id="newGame" Variant="Variant.Filled" style="display:none;" Color="Color.Primary" DisableElevation="true" OnClick="StartGame">Play again!</MudButton>
            </MudForm>   
        </MudPaper>
    </MudItem>
</MudGrid>

  `
}
