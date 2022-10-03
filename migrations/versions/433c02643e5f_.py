"""empty message

Revision ID: 433c02643e5f
Revises: db3106cfcbd7
Create Date: 2022-09-23 06:37:00.209582

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '433c02643e5f'
down_revision = 'db3106cfcbd7'
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