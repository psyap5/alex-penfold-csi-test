using Microsoft.EntityFrameworkCore.Migrations;

namespace alexpenfoldcsitest.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SortedArrays",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Array = table.Column<string>(maxLength: 1024, nullable: true),
                    Direction = table.Column<int>(nullable: false),
                    Duration = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SortedArrays", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SortedArrays");
        }
    }
}
