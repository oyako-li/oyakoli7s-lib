# Generated by Django 3.1 on 2022-04-04 00:45

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('status', models.IntegerField(choices=[(1, '未完了'), (2, '作業中'), (3, '完了')], default=1)),
                ('due_date', models.DateField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('folder_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo.folder')),
            ],
        ),
    ]
