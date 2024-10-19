﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TodoAppAPI.Models;

#nullable disable

namespace TodoAppAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20241019122914_CreateTable")]
    partial class CreateTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TodoAppAPI.Models.Todo", b =>
                {
                    b.Property<int>("tid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("tid"));

                    b.Property<string>("tname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("tid");

                    b.ToTable("Todos");
                });
#pragma warning restore 612, 618
        }
    }
}
