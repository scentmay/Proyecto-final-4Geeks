"""empty message

Revision ID: bf65df2841f7
Revises: 433c02643e5f
Create Date: 2022-09-23 07:16:33.060494

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bf65df2841f7'
down_revision = '433c02643e5f'
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
