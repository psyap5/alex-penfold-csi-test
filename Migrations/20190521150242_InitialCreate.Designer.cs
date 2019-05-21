﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using alexpenfoldcsitest.Contexts;

namespace alexpenfoldcsitest.Migrations
{
    [DbContext(typeof(SortedArrayContext))]
    [Migration("20190521150242_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085");

            modelBuilder.Entity("alexpenfoldcsitest.Models.SortedArrayModel", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Array")
                        .HasMaxLength(1024);

                    b.Property<int>("Direction");

                    b.Property<string>("Duration");

                    b.HasKey("ID");

                    b.ToTable("SortedArrays");
                });
#pragma warning restore 612, 618
        }
    }
}
