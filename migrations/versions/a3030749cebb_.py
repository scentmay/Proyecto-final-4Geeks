"""empty message

Revision ID: a3030749cebb
Revises: 8d6cea2c1aca
Create Date: 2022-09-18 17:32:02.114968

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3030749cebb'
down_revision = '8d6cea2c1aca'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('code',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('code', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('code')
    )
    op.alter_column('cliente', 'peso',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=20),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cliente', 'peso',
               existing_type=sa.Float(precision=20),
               type_=sa.REAL(),
               existing_nullable=False)
    op.drop_table('code')
    # ### end Alembic commands ###