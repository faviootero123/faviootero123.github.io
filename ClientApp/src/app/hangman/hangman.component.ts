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
  @page "/Highscore"
  @using crumbs.Data
  @using Microsoft.EntityFrameworkCore
  @implements IDisposable
  
  @inject IDbContextFactory<HangmanDbContext> DbFactory
  <PageTitle>Highscore</PageTitle>
  <h3>Highscore</h3>
  
  @if (TopScorers == null)
  {
      <MudProgressCircular Color="Color.Default" Indeterminate="true" />
  }
  else
  {
      <MudTable Items="TopScorers" Hover="true" SortLabel="Sort By" Elevation="0">
          <HeaderContent>
              <MudTh><MudTableSortLabel SortBy="new Func<Highscore, object>(x=>x.Username)">Username</MudTableSortLabel></MudTh>
              <MudTh><MudTableSortLabel SortBy="new Func<Highscore, object>(x=>x.Score)">Score</MudTableSortLabel></MudTh>
          </HeaderContent>
          <RowTemplate>
              <MudTd DataLabel="Username">@context.Username</MudTd>
              <MudTd DataLabel="Score">@context.Score</MudTd>
          </RowTemplate>
          <PagerContent>
              <MudTablePager PageSizeOptions="new int[]{50, 100}" />
          </PagerContent>
      </MudTable>
  }
  
  @code {
      List<Highscore> TopScorers = new List<Highscore>();
      private HangmanDbContext HangmanDb { get; set; }
  
      protected override async Task OnInitializedAsync()
      {
          HangmanDb = await DbFactory.CreateDbContextAsync();
  
          var query = HangmanDb.Highscores
              .OrderBy(s => s.Score)
              .Take(10);
          
          TopScorers = query
              .ToList();
          await base.OnInitializedAsync();
      }
      public void Dispose()
      {
          HangmanDb?.Dispose();
      }
  }
  `
}
