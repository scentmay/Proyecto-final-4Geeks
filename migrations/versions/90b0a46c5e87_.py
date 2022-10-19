"""empty message

Revision ID: 90b0a46c5e87
Revises: 917543aa6c6c
Create Date: 2022-09-19 18:13:57.087371

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '90b0a46c5e87'
down_revision = '917543aa6c6c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
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
    # ### end Alembic commands ###